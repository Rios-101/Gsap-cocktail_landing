"use client"
import React from 'react'
import { navLinks } from '../utils/constant'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        })

        navTween.fromTo("nav", { backgroundColor: "transparent" },
            {
                backgroundColor: "#00000050",
                backgroundFilter: "blur(10px)",
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    })

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center">
                    <Image src={"/images/logo.png"} alt='logo' width={32} height={32} />
                    Cosmopolitan
                </a>
                <ul>
                    {navLinks?.map((ele, index) => (
                        <li key={index} >
                            <Link href={`#${ele?.id}`}>{ele?.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar