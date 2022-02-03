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

const Wave = () => {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))

  const [image] = useLoader(THREE.TextureLoader, [selfie])

  return (
    <mesh>
      <planeBufferGeometry args={[0.8, 0.8, 16, 16]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  )
}

const Scene = () => {
  return (
    <Canvas camera={{ fov: 14, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
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
          <SceneWrapper>
            <Name>Hello, my name is Kirill</Name>
            <Desc>
              I'm a Full-Stack Developer currently based in Montreal. <br /> I
              come from a Photography/Design background and love <br />
              to infuse a critical vision to online experiences.
            </Desc>
            <Scene />
          </SceneWrapper>
        </ContentWrapper>
      </motion.main>
    </AnimatePresence>
  )
}
const ContentWrapper = styled.div`
  display: relative;
`
const Name = styled.h1`
  display: relative;
  margin: 0rem 1.5rem;
  margin-top: 10rem;
  text-align: left;
  font-size: 5rem;
  text-transform: uppercase;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  }
`
const Desc = styled.h2`
  font-size: 2rem;
  text-align: left;
  text-transform: uppercase;
  margin-top: 2rem;
  padding-left: 3rem;
  color: limegreen;
  @media (max-width: 900px) {
    padding-left: 0rem;
    font-size: 1.5rem;
    text-align: center;
  }
`
const SceneWrapper = styled.div`
  position: relative;
  left: 15%;
  width: 100%;
  @media (max-width: 900px) {
    left: 5%;
    width: 90%;
  }
`

export default About
