import React from "react";

export default function Header() {
  return (
    <nav className="bg-black text-white flex justify-center items-center h-8 w-full px-10 absolute bottom-0 z-10">
      <ul className="flex items-center gap-x-8 uppercase text-xs">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/lusion">Lusion</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
