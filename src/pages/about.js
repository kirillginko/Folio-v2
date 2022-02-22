import * as THREE from "three"
import React, { useRef, Suspense, useContext, useEffect } from "react"
import { CursorContext } from "../components/CustomCursor/CursorManager"
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import glsl from "babel-plugin-glsl/macro"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import selfie from "../images/selfie.jpg"

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
      float noiseAmp = 0.06;
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
  const imageRef = useRef()

  useEffect(() => {
    console.log(imageRef.current)
  }, [])
  return (
    <Canvas camera={{ fov: 14, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave texture={texture} size={size} />
      </Suspense>
    </Canvas>
  )
}

function About({ location }) {
  const mouseContext = useContext(CursorContext)

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
          <TextWrapper>
            <Name
              onMouseEnter={() => {
                mouseContext.setSize("bigger")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              Hello, my name is Kirill
            </Name>
            <Desc
              onMouseEnter={() => {
                mouseContext.setSize("big")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              I'm a Full-Stack Developer currently based in Montreal. My
              Interests are in art and design, and I like to create visual
              exciting user experiences and strong brand-identities. I like to
              utilize my skills and background in Photography and Graphic Design
              and bring it to the world wide web.
            </Desc>
          </TextWrapper>
          <Box
            onMouseEnter={() => {
              mouseContext.setSize("bigger")
            }}
            onMouseLeave={() => {
              mouseContext.setSize("small")
            }}
          >
            <Image>
              <Scene texture={selfie} size={[0.8, 0.8, 16, 16]} />
            </Image>
          </Box>
        </ContentWrapper>
      </motion.main>
    </AnimatePresence>
  )
}
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

const ContentWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0rem;
`

const Image = styled.div`
  position: relative;
  top: -5rem;
  /* left: 25rem; */

  /* margin-top: -2rem; */
  @media (max-width: 900px) {
    left: 5%;
    width: 90%;
  }
`
const Box = styled.div`
  position: relative;
  top: -15rem;
  left: 65rem;
  width: 44rem;
  height: 45rem;
  border: 1px solid red;
  /* z-index: 100; */
  @media (max-width: 1200px) {
    top: 15rem;
    left: 5%;
    width: 90%;
  }
`
const TextWrapper = styled.div`
  position: relative;
  left: 15rem;
  top: 15rem;
  width: 60rem;
  z-index: 100;
  @media (max-width: 1200px) {
    top: 15rem;
    left: 5%;
    width: 90%;
    text-align: center;
  }
`
const Name = styled.h2`
  font-size: 6rem;
  margin-bottom: 2rem;
  color: #fff;
  @media (max-width: 1200px) {
    font-size: 4rem;
  }
`

const Desc = styled.p`
  color: #fff;
  width: 50rem;
  /* padding: 0rem 2rem; */
  font-size: 2rem;
  text-align: center;
  @media (max-width: 1200px) {
    width: 90%;
    font-size: 1.5rem;
    margin: auto;
  }
`

export default About
