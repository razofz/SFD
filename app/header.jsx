import React from "react";
import Link from "next/link";

const Header = ({ title }) => {
  const links = [
    { href: "/how-to", text: "How-to" },
    { href: "/about", text: "About" },
  ];

  return (
    <header className="flex h-10 justify-start items-center p-6 md:h-20 place-content-center m-0 bg-gradient-to-b from-green-900">
      <h1 className="text-3xl font-bold text-slate-300 bg-clip-text font-serif">
        {title ? title : "Missing title!"}
      </h1>
      <nav className="px-3 content-center justify-center">
        {links.map((link, index) => (
            <Link key={index} href={link.href} className="mx-3 text-slate-400">
                {link.text}
            </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
