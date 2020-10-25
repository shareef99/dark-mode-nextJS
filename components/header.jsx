import React from "react";
import Link from "next/link";
import Styles from "../styles/components/header.module.scss";
import DarkModeToggle from "../components/darkModeToggle";
export default function Header() {
    return (
        <>
            <nav id="navbar" className={Styles.navBar}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
            </nav>
        </>
    );
}
