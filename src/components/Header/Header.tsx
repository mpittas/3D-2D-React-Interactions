import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="bg-black text-white flex justify-center items-center h-8 w-full px-10 absolute bottom-0 z-10">
      <ul className="flex items-center gap-x-5 uppercase text-xs font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/about">About</Link>
        </li> */}
        <li>
          <Link href="/lusion">Lusion</Link>
        </li>
        <li>
          <Link href="/drone">Drone</Link>
        </li>
        <li>
          <Link href="/balls">Balls</Link>
        </li>
        <li>
          <Link href="/rocket">Rocket</Link>
        </li>
        {/* <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/horizontal-scroll">Horizontal Scroll</Link>
        </li> */}
      </ul>
    </nav>
  )
}
