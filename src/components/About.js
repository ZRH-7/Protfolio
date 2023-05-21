import React from 'react'
import AnimatedText from "@/components/AnimatedText"
import { useEffect, useRef } from "react"
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from "next/image"
import { useInView, useMotionValue, useSpring } from "framer-motion"

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

export const About = () => {
    return (
        <>
            <AnimatedText text="Passion Fuels Purpose!" className='!text-8xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-3 flex flex-col items-start justify-start my-auto dark:text-white xl:col-span-4 md:col-span-8 md:order-2">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-white/75">Biography</h2>
                    <p className="font-medium">Hi, I'm <strong>tCoderBD</strong>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my client's visions to life.</p>
                    <p className="font-medium my-6">I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
                    <p className="font-medium">Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                </div>
                <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
                    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"></div>
                    <Image src={ProfilePic} alt="tCoderBD" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
                <div className="col-span-2 flex flex-col items-end justify-center gap-16 dark:text-white xl:col-span-8 xl:flex-row xl:items-center md:col-span-8 md:order-3 xs:gap-3">
                    <div className="flex flex-col items-end justify-center md:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={40} />+</span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75 xl:text-center sm:text-base xs:text-sm">Satisfied Clients</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center md:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={300} />+</span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75 xl:text-center sm:text-base xs:text-sm">Projects Completed</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center md:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={7} />+</span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-white/75 xl:text-center sm:text-base xs:text-sm">Years Of Experience</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
