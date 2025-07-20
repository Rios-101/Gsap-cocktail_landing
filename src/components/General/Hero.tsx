"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

// gsap.registerPlugin(ScrollTrigger)


const Hero = () => {

    const videoRef = useRef<HTMLVideoElement>(null)
    const isMobile = useMediaQuery({ maxWidth: 725 })

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" })
        const pharagraphSplit = new SplitText(".subTitle", { type: "lines" })

        heroSplit.chars.forEach((ele) => ele.classList.add("text-gradient"))

        gsap.from(heroSplit.chars, {
            yPercent: 70,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.09
        })

        gsap.from(pharagraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.09,
            delay: 1
        })

        const video = videoRef.current;
        if (!video) return;

        const onLoaded = () => {
            const duration = video.duration;
            const startVideoValue = isMobile ? "top 50%" : "center 60%"
            const endVideoValue = isMobile ? "120% top" : "bottom top"

            // Clear old triggers if any
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            gsap.to(video, {
                currentTime: duration,
                ease: "none",
                scrollTrigger: {
                    trigger: "#rios",
                    start: startVideoValue,
                    end: endVideoValue,
                    scrub: true,
                    pin: true
                }
            });
        };

        // Wait for duration
        if (video.readyState >= 1) {
            onLoaded();
        } else {
            video.addEventListener("loadedmetadata", onLoaded);
        }

        return () => video.removeEventListener("loadedmetadata", onLoaded);

    }, [])





    return (
        <>
            <section id="hero" className="noisy">
                <h1 className='title'>Negroni</h1>
                <img src={"images/hero-left-leaf.png"} alt='left-leaf' className='left-leaf' />
                <img src={"images/hero-right-leaf.png"} alt='right-leaf' className='right-leaf' />

                <div className="body z-10">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subTitle">Sip the Spirit <br /> of Summer</p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subTitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                            <a href="#cocktails">View cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0 ">
                <video
                    src="/videos/input.mp4"
                    muted
                    id='rios'
                    playsInline
                    preload="auto"
                    ref={videoRef}

                />
            </div>
        </>
    )
}

export default Hero