import * as THREE from "three"
import React, { useRef, Suspense } from "react"
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import glsl from "babel-plugin-glsl/macro"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import selfie from "../images/selfie.jpg"

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);


    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.25;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.04;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
)

extend({ WaveShaderMaterial })

const Wave = ({ texture, size }) => {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))

  const [image] = useLoader(THREE.TextureLoader, [texture])

  return (
    <mesh>
      <planeBufferGeometry args={size} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  )
}

const Scene = ({ texture, size }) => {
  return (
    <Canvas camera={{ fov: 14, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave texture={texture} size={size} />
      </Suspense>
    </Canvas>
  )
}

function About({ location }) {
  return (
    <AnimatePresence>
      <motion.main
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ContentWrapper data-scroll-section>
          {/* <Name>Hello, my name is Kirill</Name>
          <Desc>
            I'm a Full-Stack Developer currently based in Montreal. <br /> I
            come from a Photography/Design background and love <br />
            to infuse a critical vision to online experiences.
          </Desc> */}
          <Image1>
            <Scene texture={selfie} size={[0.8, 0.8, 16, 16]} />
          </Image1>
        </ContentWrapper>
      </motion.main>
    </AnimatePresence>
  )
}
const ContentWrapper = styled.div`
  display: relative;
`

const Image1 = styled.div`
  position: relative;
  left: 20%;
  width: 100%;
  margin-top: -2rem;
  @media (max-width: 900px) {
    left: 5%;
    width: 90%;
  }
`

export default About
