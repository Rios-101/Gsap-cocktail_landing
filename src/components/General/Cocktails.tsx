"use client"
import React, { useEffect, useRef } from 'react'
import { cocktailLists, mockTailLists } from '../utils/constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {

    const boxRef = useRef<HTMLImageElement>(null);
    const boxRef2 = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })

        parallaxTimeLine.from("#c-left-leaf", { x: -100, y: 100 }).from("#c-right-leaf", { x: 100, y: 0 })

    }, [])

    // useEffect(() => {
    //     const el = boxRef.current
    //     const ele = boxRef2.current

    //     gsap.fromTo(el, { x: 150 }, {
    //         scrollTrigger: { trigger: el },
    //         x: 0,
    //         duration: 3,

    //     })

    //     gsap.fromTo(ele, { x: -50 }, {
    //         scrollTrigger: { trigger: el },
    //         x: 0,
    //         duration: 3,

    //     })
    // })


    return (
        <section id='cocktails' className='noisy'>

            {/* <div id="red" ref={boxRef} className="w-32 fin h-32 bg-red-600 absolute top-0 left-0"></div> */}

            <img src={"images/cocktail-left-leaf.png"} ref={boxRef2} alt='cocktail-left-leaf' id='c-left-leaf' />
            <img src={"images/cocktail-right-leaf.png"} ref={boxRef} alt='cocktail-right-leaf' id='c-right-leaf' />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        {cocktailLists.map((ele, index) => (
                            <li key={index} >
                                <div className='md:me-28'>
                                    <h3>{ele?.name}</h3>
                                    <p className='flex items-center '>{ele?.country} | {ele?.detail}</p>
                                </div>
                                <span className='text-white font-medium text-2xl lg:pl-6 xl:pl-12'>
                                    - {ele?.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most loved mocktails:</h2>
                    <ul>
                        {mockTailLists.map((ele, index) => (
                            <li key={index}>
                                <div className='md:me-28'>
                                    <h3>{ele?.name}</h3>
                                    <p className='flex items-center '>{ele?.country} | {ele?.detail}</p>
                                </div>
                                <span className='text-white font-medium text-2xl lg:pl-6 xl:pl-12'>
                                    - {ele?.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails