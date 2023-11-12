import React from "react"

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white flex justify-end items-center h-16 w-full px-10 absolute bottom-0 z-10">
      <ul className="flex items-center gap-x-8 uppercase text-xs">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}
