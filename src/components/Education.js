import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LiIcon } from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full xs:text-sm'>{info}</p>
        </motion.div>
    </li>
}

export const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <>
            <div className='my-64 md:my-16'>
                <h2 className='font-bold text-8xl w-full text-center mb-32 dark:text-light md:text-6xl md:mt-32 sm:text-5xl xs:text-4xl md:mb-16'>Education</h2>
                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                    <motion.div
                        className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl'
                        style={{ scaleY: scrollYProgress }}
                    />
                    <ul className='w-full flex flex-col items-start justify-between ml-4 dark:text-light'>
                        <Details
                            type='Bachelor Of Science In Computer Science'
                            place='Massachusetts Institute Of Technology (MIT)'
                            time='2016-2020'
                            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                        />
                        <Details
                            type='Master Of Computer Science'
                            place='Stanford University'
                            time='2020-2022'
                            info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
                        />
                        <Details
                            type='Online Coursework'
                            place='Coursera And EdX'
                            time='2016-2020'
                            info='Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}
