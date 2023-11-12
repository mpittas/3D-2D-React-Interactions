import React from "react"
import DrawingPane from "./DrawingPane"
import DrawingPaneTwo from "./DrawingPaneTwo"
import Image from "next/image"

export default function DrawWrap() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/bg-1.jpg"
        fill="true"
        className="object-cover"
        quality={100}
        alt="Bg image"
      />

      {/* <DrawingPane /> */}
      <DrawingPaneTwo />
    </div>
  )
}
