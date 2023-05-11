import Layout from "@/components/Layout"
import Head from "next/head"
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import Project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Project2 from '../../public/images/projects/portfolio-cover-image.jpg'
import Project3 from '../../public/images/projects/nft-collection-website-cover-image.jpg'
import Project4 from '../../public/images/projects/fashion-studio-website.jpg'
import Project5 from '../../public/images/projects/agency-website-cover-image.jpg'
import Project6 from '../../public/images/projects/devdreaming.jpg'

const FeaturedProject = ({ type, title, summery, image, link, github }) => {
    return (
        <article className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl">
            <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div>
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
                    <Image src={image} alt={title} className="w-full h-auto" />
                </motion.div>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline">
                    <h2 className="my-2 text-left w-full text-4xl font-bold">{title}</h2>
                </Link>
                <p className="w-full my-2 font-medium text-dark">{summery}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light py-2 px-6 font-semibold border-solid border-dark border-[2px] transition hover:text-dark hover:bg-light">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, image, link, github }) => {
    return (
        <article className="relative w-full rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div>
            <Link href={link} target="_blank" className="w-full block cursor-pointer overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
                    <Image src={image} alt={title} className="w-full h-auto" />
                </motion.div>
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline">
                    <h2 className="my-2 text-left w-full text-4xl font-bold">{title}</h2>
                </Link>
                <div className="flex w-full items-center  justify-between">
                    <Link href={link} target="_blank" className="text-lg font-medium underline hover:no-underline">Visit</Link>
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | tCoderBD</title>
                <meta name="description" content="" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="py-16">
                    <AnimatedText className="!text-8xl mb-16" text='Imagination Trumps Knowledge!' />
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                image={Project1}
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="NFT collection Website"
                                image={Project3}
                                link="/"
                                type="Website Template"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Fashion Studio Website"
                                image={Project4}
                                link="/"
                                type="Website"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="React Portfolio Website"
                                summery="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                                image={Project2}
                                link="/"
                                type="Portfolio Website"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Agency Website Template"
                                image={Project5}
                                link="/"
                                type="Website Template"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Blog Website"
                                image={Project6}
                                link="/"
                                type="DevDreaming"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}
export default projects