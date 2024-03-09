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
                            type='Bachelor Of Science Electrical and Electronic Engineering (EEE)'
                            place='IUBAT—International University of Business Agriculture and Technology'
                            time='2021'
                            info="The Bachelor of Science in Electrical and Electronic Engineering program provides a solid foundation in electrical and electronic principles, preparing students for successful careers in a wide range of industries. By combining theoretical knowledge, practical skills, and specialized expertise, graduates are equipped to contribute to the advancement of technology and address the evolving challenges in the field of engineering."
                        />
                        <Details
                            type='HSC – Higher Secondary School Certificate'
                            place='Shahzadpur Govt. College'
                            time='2013'
                            info="The Higher Secondary School Certificate (HSC) is an essential qualification that signifies the completion of secondary education and acts as a bridge to higher education or vocational training. The program offers subject choices to suit students' interests and provides a platform to pursue various career paths. The HSC qualification is highly valued by educational institutions and employers, opening up opportunities for further academic and professional growth"
                        />
                        <Details
                            type='SSC – Secondary School Certificate'
                            place='Shahzadpur Pilot Model High School'
                            time='2010'
                            info='The Secondary School Certificate (SSC) is a crucial educational qualification that marks the completion of secondary education and acts as a stepping stone to higher education or vocational training. The program offers a range of subjects to foster a well-rounded education and prepares students for further academic pursuits or entry-level employment. The SSC qualification holds value for universities, colleges, and employers, providing students with opportunities for future growth and success.'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}
