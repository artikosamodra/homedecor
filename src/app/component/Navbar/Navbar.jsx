"use client"
import Link from "next/link"
import NavMenu from "./NavMenu"
import Image from "next/image"
import { List } from "@phosphor-icons/react/dist/ssr"

const Navbar = () => {
    const toggleMenu = () => {
        const navList = document.getElementById("navlist");
    
        if (navList.classList.contains("hidden")) {
          navList.classList.remove("hidden");
        } else {
          navList.classList.add("hidden");
        }
      };
    // iconNav = document.querySelector('#iconNav');
    // menuBar = document.querySelector("#navbar");


    return (
        <section className="lg:px-20 px-5 py-5 bg-rose-100 fixed top-0 w-full z-10">
            <div className="flex justify-between lg:flex-row flex-col items-center lg:text-md text-sm" id="navbar">
                <div className="flex justify-between lg:w-20 w-full">
                    <Link href="/" >
                        <Image src="/logo.png" alt="Logo" width={100} height={100} />
                    </Link>
                    <button className="lg:hidden" onClick={toggleMenu}>
                    <List size={32} />
                </button>
                </div>
                <div className="lg:flex hidden lg:flex-row flex-col justify-center gap-10 lg:mt-0 mt-10" id="navlist">
                    <div className="flex flex-row gap-5 lg:flex-row flex-col">
                        <NavMenu navTitle="HOME" navLink="/" />
                        <NavMenu navTitle="WHO WE ARE" navLink="/" />
                        <NavMenu navTitle="WHAT WE OFFER" navLink="/" />
                        <NavMenu navTitle="OUR CLIENT" navLink="/" />
                        <NavMenu navTitle="OUR TEAM" navLink="/" />
                        <NavMenu navTitle="CONTACT" navLink="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar