import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconDownMenu = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path d="M6.4 123.4c-4.5 2-6.4 5.2-6.4 11.1v5l124.8 124.7c85.6 85.6 125.6 124.9 127.5 125.4 1.5.3 4.4.3 6.5-.1 3.3-.6 17.1-14 125.6-122.3 67-66.9 123.1-123.5 124.7-125.6 7.1-9.5.4-21.2-10.8-19.1-3.4.6-16.6 13.4-123.3 120.1L255.5 362 137 243.4c-69.4-69.5-119.8-119.2-121.7-120-3.9-1.7-4.9-1.7-8.9 0z" />
  </Svg>
)
export default IconDownMenu
