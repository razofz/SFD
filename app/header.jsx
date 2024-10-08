import React from "react";
import Link from "next/link";
// import styles from './header.module.css';
// .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px;
//     background-color: #333;
//     color: white;
// }

// .logo {
//     font-size: 24px;
//     font-weight: bold;
// }

// .nav {
//     display: flex;
//     gap: 15px;
// }

// .link {
//     color: white;
//     text-decoration: none;
//     font-size: 18px;
// }

// .link:hover {
//     text-decoration: underline;
// }

const Header = ({ title }) => {
  const links = [
    { href: "/how-to", text: "How-to" },
    { href: "/about", text: "About" },
  ];

  return (
    <header className="flex h-20 justify-start items-center p-6 md:h-32 place-content-center m-0 bg-gradient-to-b from-green-900">
      <h1 className="text-3xl font-bold text-slate-300 bg-clip-text font-serif underline">
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
