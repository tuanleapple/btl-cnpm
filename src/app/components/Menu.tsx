import Link from "next/link";
import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "In Tài Liệu",
      slug: "print",
    },
    {
      id: 2,
      link: "Tiến Trình",
      slug: "process",
    },
    {
      id: 3,
      link: "Máy In",
      slug: "printer",
    },
    {
      id: 4,
      link: "Lịch Sự",
      slug: "history",
    },
  ];

  return (
    <div className="menu-parent">
      <ul className="menu">
        {links.map(({ id, link, slug }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={slug}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;