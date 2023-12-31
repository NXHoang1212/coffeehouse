import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconWeb = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    // width={24}
    // height={24}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path d="M231 .7C142.2 9.8 66.2 62.5 26 142.9c-12.6 25.3-20.5 51.9-24.5 82.8-2.4 18-1.7 54.2 1.4 71.9 9.1 53 31.9 98.2 69.1 136.8 38.2 39.6 87 65.2 142.4 74.7 17.4 3 53.2 3.7 71.6 1.5 46.9-5.7 90.9-24 129-53.5 10.7-8.3 32.5-30 41.4-41.1 29.2-36.8 47.3-79.7 53.7-127 1.8-13.2 2-18.8 1.6-38.5-.5-24.7-1.8-35.2-6.7-55.3-13.9-57.3-47.8-108.5-95.2-144.3-36.1-27.1-76.3-43.4-122.1-49.4C276.9.1 241.6-.4 231 .7zm54.4 22.8c42.2 5.5 82 22.4 116.1 49.3 3.9 3 7.4 5.9 7.9 6.3 1.7 1.5-2.3 5.7-7.3 7.5-6.8 2.4-10 5.9-9.4 10.1.4 2.5 1.1 3.3 3.4 3.8s3.4 1.6 4.6 4.6c1.7 4.3 2.5 4.6 7.7 2.4 3.9-1.7 3.7-1.9 4.9 5.8l.4 2.8-5.3-.7c-3-.3-7.4-.3-9.9 0-4 .7-4.8 1.3-8.6 6.6-2.8 4-5 6.1-6.8 6.4-1.4.3-4.3.8-6.3 1.2-2.1.3-3.8 1.2-3.8 1.9s-.3 3.3-.6 5.9c-.6 4.2-.5 4.6 1.5 4.6 1.7 0 2.1.6 2.1 3 0 3.3-.4 3.4-7 1.9-3.2-.7-6.3-.7-10.7.1-5.8 1.1-6.3 1.4-7.3 4.6-1.1 3.1-.7 10.7.6 15.5.8 2.8 5.2 3.9 15.4 3.9h10l1.8-3.8c1-2 4.1-6.7 7-10.3 5.2-6.6 5.2-6.7 9.4-6.2 3.7.4 4.7.1 6.7-2.1 3-3.2 3.7-3.2 4.5-.4.3 1.5 3.7 4.4 9.1 7.8 4.6 3 8.3 5.9 8.2 6.5-.2.5-2.2 1.1-4.5 1.3-4.6.3-5 1-2.4 4.1 1.9 2.4 6.4 2.9 10.5 1.3 2.3-1 2.7-1.7 2.7-5.1 0-2.2.5-4.1 1.2-4.3 2-.7 0-2.6-7.1-6.8-4.7-2.7-7.1-4.7-7.5-6.4-.3-1.3-.9-3.1-1.2-4-.5-1.3.2-1.6 3.6-1.6 3.6 0 4.9.7 10.6 5.7 6.1 5.4 6.4 5.9 6.4 10.3 0 4.2.4 5 4.9 9.4 2.7 2.6 5.1 4.4 5.4 3.9.2-.4 1.1-3.4 1.8-6.6 1-4.7 1.8-6.1 4-7.2 2.6-1.4 2.7-1.3 3.3 1.7.3 1.7.6 4 .6 5.1 0 1.2 1.4 3.6 3.2 5.4 2.9 3 3.7 3.3 9.3 3.3h6.2l3.1 8.9c1.7 4.9 2.8 9.2 2.5 9.5-.4.3-4.5.6-9.3.6h-8.6l-6.1-4.5-6.1-4.6-6.6.7-6.6.7v3.8c0 4.4-.9 4.7-4.8 2-1.5-1.1-7.1-2.9-12.4-4.2l-9.8-2.3v-6.8c0-8 1.6-7.4-16.9-5.8-8.3.8-12.3 1.6-14.6 3-2.6 1.6-5 2-11.8 2-7.7 0-9 .3-14.3 3.3l-5.9 3.3-.5 6.9-.5 6.9-12.7 9c-7 5-12.7 9.5-12.7 10.1-.1.5.4 2.7 1 4.7.8 3.1 1.4 3.8 3.6 3.8 2.1 0 2.4.3 1.9 2.2-.3 1.3-.6 2.8-.6 3.4 0 .7-.9 1.4-2 1.7-1.8.5-2 1.4-2 10.9v10.3l11.1 12.8 11.2 12.8 14.6-.7c13.5-.6 14.8-.8 17.2-3 3.8-3.6 10.6-3.4 14.3.5 2.3 2.4 3.7 2.9 9.8 3.4 3.9.3 7.1.7 7.3.9.1.2-.3 4.6-.8 9.9l-.9 9.7 8 14.2 8.1 14.3-4 7.8c-5.3 10.6-5.4 16-.4 20.9l3.5 3.4v18.4l4.5 6.1c4.4 6 4.5 6.2 4.5 14.1v8h6.1l-1.9 2.7c-3.2 4.5-24.1 24.8-31.7 30.8-42.9 34-92.6 51.5-146.3 51.5-22 0-36.5-1.7-56.2-6.6-67.1-16.6-124.1-62.6-154.5-124.9C29.4 325.4 22 293.3 22 256c0-28.4 4-52.1 13.2-78.2l3.3-9.3.3 4.6c.3 4.4.5 4.7 5.2 6.9l5 2.3v18.9l4.7 7.8c4.6 7.7 6.2 9 10.9 9 2.1 0 3.4-1.7 3.4-4.6 0-.7-2-4.6-4.5-8.4-3.6-5.6-4.7-8.3-5.2-13-.5-5.5-.4-6 1.4-6 1.7 0 2.2 1 3.1 6.7 1 5.8 2.1 8.2 7.2 15.6 3.3 4.8 6 9.3 6 10 0 .7-.7 2.2-1.5 3.4-1.5 2.1-1.3 2.6 2.7 8.7l4.3 6.5 10.2 2.5c12.1 3.1 11.3 3 11.3 1.1 0-1.6 1.2-1.8 4.8-.9 1.6.5 2.2 1.4 2.2 3.4 0 2.6.4 2.9 7.7 4.6 8.1 1.9 9.9 3.3 19.7 15 2.4 3 3.1 3.2 11.5 3.8l9 .7.6 4.7c.3 2.6.8 5.7 1 6.8.4 1.8-.8 3-6 6.5l-6.4 4.4-.1 6.5c0 3.6-.5 8.5-1 10.8l-1 4.4 8.8 11.1c5.9 7.4 9.2 12.5 9.8 15.1.8 3.4 1.4 4 5.1 5.1 2.3.7 7.1 3.4 10.7 6.1l6.6 4.8v40.4l2.4.6 2.4.6-1.4 7.2c-2 10.4-1.8 11.3 2.5 17.1l3.8 5.2-.8 9-.8 9 5.4 9.6c4.2 7.4 7.1 11.1 12.4 15.8l6.9 6.1h7.6c7.4 0 7.6-.1 8.2-2.7.5-1.8.2-3-.8-3.7-.8-.6-3.2-2.5-5.3-4.3l-3.8-3.2 1.7-5.9c2.4-8.6 2.3-9.2-2.2-9.2-2.7 0-4.1-.6-5-2-1.1-1.8-.9-2.3 1.2-4.3 1.4-1.2 2.8-3.4 3.1-4.8.6-2.3.2-2.8-2.4-3.7-4.8-1.7-3.9-3.8 2.3-5 3-.6 8.1-2.5 11.4-4.1 4.7-2.4 6.5-4 8.7-7.8 1.6-2.6 6-8.8 9.8-13.7l7.1-8.8-1.6-7.6c-1.6-7.5-1.6-7.7.5-11.5l2.2-3.8 6.3.6c6.1.7 6.4.6 11.2-3.1 2.8-2.1 5-3.9 5-4 0-.1.7-6.6 1.5-14.4l1.5-14.1 4.6-5.7c4.8-5.9 5.7-7.6 6.7-12.8.6-3 .4-3.1-4.1-4.5-4-1.3-5.1-2.3-7.7-6.7l-3-5.2h-10.7c-9.6 0-11.5-.3-18.7-3.2l-8.1-3.1v-5.4c0-3.9-.7-6.6-2.7-10.3-2.7-4.8-2.9-5-7.4-5-9.3 0-10.7-.7-15.1-7.7-2.7-4.4-5.2-7-7.9-8.3-4.7-2.5-4.9-2.5-4.9-.1s-1.9 3.1-8.3 3.1c-4.8 0-5.4-.3-7.4-3.4-1.9-2.9-3.1-3.6-8-4.6-3.2-.6-6.7-1.4-7.8-1.6-1.5-.4-3.4 1.2-7.9 6.6-3.9 4.6-6.4 6.9-7.5 6.6-.9-.3-4.8-1-8.7-1.6-6.9-1.1-7.2-1.3-7.8-4.2-.3-1.7-.6-6.1-.6-9.8 0-4.3-.5-7.1-1.3-7.8-.7-.6-3.6-1.4-6.5-1.8-2.8-.3-5.2-1.1-5.2-1.6s.9-2.7 2.1-5c2-3.9 2-10.8 0-10.8-.4 0-4.6 2.7-9.4 6-8.6 6-8.6 6-14.1 5.4-5.1-.6-5.5-.9-7.1-4.5-2.3-4.9-1.6-9.5 2.8-17.9 3.1-5.9 4-6.8 10.3-10.2l6.9-3.7 13.8-.1H150v4.2c0 4.6-.3 4.3 10.4 8.7.5.2.6-2.6.2-7.1l-.7-7.5 4.3-3.9c2.4-2.1 7.3-5.8 10.9-8.2 5.8-3.7 6.7-4.7 7.3-8 .8-5.1 13.4-17.5 23.2-22.8 3.9-2.2 6.9-4.4 6.7-5-.4-1.1 8.7-9.4 10.3-9.4.4 0 1.5.7 2.5 1.6 1.7 1.5 2 1.4 4.3-1.2l2.4-2.9-4.4-1.3c-4.4-1.3-5.4-2.8-3.2-5 2.6-2.6 8.7-.8 10 2.8.2.6 2.4.7 5.7.3 4-.5 5.5-1.1 5.9-2.5.5-2 .5-2 2.6-1.2 2.2.9 2 3.1-.5 4.4-1.4.8-1.9 1.9-1.7 3.8.3 2.3 1.1 2.9 7.7 4.9 4.1 1.3 8.1 2.1 8.8 1.9.7-.3 1.3-1.9 1.3-3.6 0-2.8-.5-3.4-5.5-5.5-3-1.4-5.5-2.9-5.5-3.4s1.9-1.6 4.3-2.3c4-1.4 4.2-1.6 4.5-6 .3-4.4.2-4.6-4.1-7.1-4.4-2.6-4.4-2.7-5-9.3-.4-3.7-.8-6.9-1.1-7.1-.2-.2-3.1.9-6.5 2.6-8.8 4.5-9.5 4.3-8.8-2.2l.5-5.4-7.7-1.6c-9.7-2.1-9.8-2.1-13.8.5-3.3 2.3-3.3 2.3-3.3 10.5v8.2l-6.1 1.7c-5.7 1.6-6.2 2-8.6 6.8-3 6-2.3 5.2-5 6-2.1.7-2.2.4-2.5-6.1l-.3-6.8-5.4-.8c-7.3-1-11.3-3.6-12.6-8.4l-1.1-3.8 9-5.4c5-3 11.9-6.5 15.4-7.8L201 82v3.5c0 3.3.2 3.5 3.4 3.5 2.5 0 3.5-.5 3.9-2 .3-1.3 1.4-2 3-2 3.2 0 4.6-1.9 2.3-3.2-2.9-1.6-1.9-3.8 1.7-3.8 2.4 0 4.2-.9 6.6-3.4 3-3.1 4-3.4 10.8-4.1 6.9-.6 7.6-.5 9.9 1.6 2.4 2.2 2.4 2.4.7 3.7-1 .8-4.8 2.9-8.5 4.8-3.8 1.9-6.8 3.6-6.8 3.8 0 .5 21.3 5.6 23.1 5.6.5 0 1.7-1.6 2.5-3.5 1.4-3.3 1.7-3.5 6.4-3.5 4.5 0 5.1-.3 6.5-3 2.1-4.1 1.9-4.8-1.7-5.8-3-.7-3.3-1.2-3.8-5.2l-.5-4.4-10.8-4.8-10.9-4.9-8.1 1.1c-4.4.6-9.8 2-11.9 3.1-3.7 1.9-3.8 2.1-3.8 7.5v5.6l-3.7-.7c-4.5-.8-4-.4-4.8-3.6-.5-2.2 0-3.1 3.4-5.8 2.3-1.8 4.1-3.6 4.1-4 0-1.2-15.9-2.1-18.5-1.1-1.3.5-2.7 2.2-3.3 3.9-.9 2.7-.9 3.1.6 3.1 3 0 4.5 1.6 3.7 3.9-.5 1.8-1.4 2.1-5.5 2.1-3.9 0-5 .4-5.5 1.9-.4 1.4-1.9 2-7.2 2.5-3.6.4-6.7.6-6.8.4-.1-.2-.5-2-.8-4.1l-.6-3.7h5.8c5.4 0 5.9-.2 10-4.4s4.2-4.5 2.3-5.5c-3.1-1.7-4.6-1.4-7.5 1.6-2.2 2.4-3.2 2.8-7.4 2.5-4.5-.3-5.1-.7-7.9-4.8l-2.9-4.4h-6.8c-6.6 0-6.8.1-14.5 5.7l-7.7 5.8 6.5.3c7.6.4 9.1 1.3 6.5 4.2-1.6 1.7-2.6 2-6 1.4-2.2-.3-5.8-1.5-7.9-2.6-2.8-1.5-5.2-1.9-8.3-1.5-2.4.2-4.3.3-4.3.2 0-.5 15.4-10.2 22.5-14.3 24.4-13.9 54.7-23.8 84.5-27.7 13.8-1.8 44.6-1.8 58.4 0zM437 108.3c0 .4-.7 1.9-1.6 3.2-1.5 2.3-2.2 2.5-9.5 2.5-9.3 0-10.3-1.4-3.4-4.8 4.5-2.2 4.5-2.2 4.5-7.4l.1-5.3 4.9 5.5c2.8 3 5 5.9 5 6.3z" />
    <Path d="M369 99.7c-3.2.6-5 2.9-5 6.4 0 2.1 1 3.3 4.5 5.6 5 3.1 5.5 5.6 1.2 6.1-2.5.3-2.7.7-2.7 4.8v4.4h8c7.6 0 8.3-.2 10.5-2.8 3.1-3.4 3.1-4 0-5.2-3.8-1.4-9.3-9.7-10-15.3-.7-4.9-.8-5-6.5-4z" />
    <Path d="M356.9 110.7c-2.1.5-5.9 7.4-5.9 10.7 0 2.3.4 2.6 3.2 2.6 1.8 0 5.2-1.3 8-3.1 4.1-2.7 4.8-3.6 4.8-6.4 0-4.2-3.7-5.6-10.1-3.8z" />
  </Svg>
)
export default IconWeb