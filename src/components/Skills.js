import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-dark lg:py-2 lg:px-4 md:text-sm md:py-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'

            whileHover={{
                scale: 1.05
            }}
            initial={{
                x: 0,
                y: 0
            }}
            whileInView={{
                x: x,
                y: y
            }}
            transition={{
                duration: 1.5
            }}
            viewport={{
                once: true
            }}
        >
            {name}
        </motion.div>
    )
}

export const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32 sm:text-5xl xs:text-4xl'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs-h[50vh] lg:circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2'

                    whileHover={{
                        scale: 1.1
                    }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-19vw" y="-2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="20vw" y="0vw" />
                <Skill name="ReactJS" x="0vw" y="12vw" />
                <Skill name="WordPress" x="-20vw" y="-15vw" />
                <Skill name="PHP" x="15vw" y="-12vw" />
                <Skill name="Web Design" x="32vw" y="-5vw" />
                <Skill name="Shopify" x="-38vw" y="0vw" />
                <Skill name="Figma" x="-22vw" y="18vw" />
                <Skill name="TailwindCSS" x="18vw" y="18vw" />
            </div >
        </>
    )
}
