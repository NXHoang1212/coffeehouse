import * as React from "react"
import Svg, { SvgProps, Image } from "react-native-svg"

const IconChecked = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    // xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <Image
      href="data:image/png;base64,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"
    />
  </Svg>
)
export default IconChecked
