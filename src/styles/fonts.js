import { css } from "styled-components"
import HattonBold from "../fonts/Hatton-Bold.woff"
import NeueWorld from "../fonts/NeueWorld-Regular.woff"
import Pangram from "../fonts/Pangram-Regular.woff"
import PangramLight from "../fonts/Pangram-ExtraLight.woff"

let styles = ""

const fontsArr = [
  {
    name: "HattonBold",
    src: HattonBold,
    weight: 600,
  },
  {
    name: "NeueWorld",
    src: NeueWorld,
    weight: 400,
  },
  {
    name: "Pangram",
    src: Pangram,
    weight: 400,
  },
  {
    name: "PangramLight",
    src: PangramLight,
    weight: 200,
  },
]

for (const font of fontsArr) {
  styles += `
        @font-face {
            font-family: ${font.name};
            src: url(${font.src});
            font-weight: ${font.weight};
            font-style: normal;
            font-display: auto;
        }
    `
}

const Fonts = css`
  ${styles}
`

export { Fonts }
