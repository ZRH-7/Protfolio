import Layout from "@/components/Layout"
import Head from "next/head"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { About } from "@/components/About"

const about = () => {
    return (
        <>
            <Head>
                <title>About | tCoderBD</title>
                <meta name="description" content="" />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <About />
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about