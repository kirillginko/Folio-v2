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
              <Hello>Hello,</Hello>
              my name is Kirill
            </Name>
            <Desc
              onMouseEnter={() => {
                mouseContext.setSize("big")
              }}
              onMouseLeave={() => {
                mouseContext.setSize("small")
              }}
            >
              My background is in art & design and I strive to bring more
              intuitivness, usability and a design-driven user-experience to
              every project I take on. I love to work on projects that
              incorporate a strong aesthetic while focusing on accessibility and
              utilizing the latest tech. When I’m not coding I like to explore
              sound-design and audio-recording.
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
  top: -7rem;
  width: 40vw;
  /* left: 25rem; */
  /* margin-top: -2rem; */
  @media (max-width: 1200px) {
    left: 5%;
    top: -7rem;
    width: 90%;
  }
`
const Box = styled.div`
  position: relative;
  top: -10rem;
  left: 67rem;
  width: 40vw;
  height: 45rem;
  /* border: 1px solid red; */
  /* z-index: 100; */
  @media (max-width: 1200px) {
    top: 10rem;
    left: 5%;
    width: 90%;
  }
`
const TextWrapper = styled.div`
  position: relative;
  left: 10rem;
  top: 10rem;
  width: 60rem;
  z-index: 100;
  /* border: 1px solid red; */
  @media (max-width: 1200px) {
    top: 10rem;
    left: 5%;
    width: 90%;
  }
`
const Hello = styled.h2`
  font-size: 20vw;
  margin-left: -1rem;
  color: white;
  @media (max-width: 900px) {
    padding-bottom: 0.5rem;
    margin-left: -0.5rem;
    font-size: 27.5vw;
  }
  /* padding-left: 2rem; */
`
const Name = styled.h2`
  font-size: 5.8vw;
  margin-bottom: 1rem;
  color: #fff;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 10.4vw;
  }
`

const Desc = styled.p`
  color: #fff;
  width: 60rem;
  /* padding: 0rem 2rem; */
  font-size: 1.5vw;
  text-align: left;
  @media (max-width: 1200px) {
    /* padding-top: 0.5rem; */
    width: 100%;
    font-size: 4vw;
    /* margin: auto; */
  }
`

export default About
