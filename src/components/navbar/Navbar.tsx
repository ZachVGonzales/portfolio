import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";


export default function Navbar() {
  return (
    <header>
        <nav className={style.navbar}>
        <ul className={style.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/resume">Resume</Link></li>
        </ul>
        </nav>

    </header>
  );
}