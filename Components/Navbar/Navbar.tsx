"use client";
import React, { useState } from "react";
import "./Navbar.scss";
// ICONS
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// ASSETS
import logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
    const Menu = () => (
        <>
            <p>
                <Link href="#home">Home</Link>
            </p>
            <p>
                <Link href="#wgpt3">What is GPT3?</Link>
            </p>
            <p>
                <Link href="#possibility">Open AI</Link>
            </p>
            <p>
                <Link href="#features">Case Study</Link>
            </p>
            <p>
                <Link href="#blog">Library</Link>
            </p>
        </>
    );
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <div className="gpt3__navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="gpt3__navbar-links_container">
                        <Menu />
                    </div>
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => {
                                setToggleMenu(true);
                            }}
                        />
                    )}
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container  scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                                <div className="gpt3__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
