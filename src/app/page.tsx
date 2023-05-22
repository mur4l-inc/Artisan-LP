
// import Image from 'next/image'
import MyComponent from './MyComponent';
import Navbar from '@/components/Navbar';
import { IResult } from '@/interface';
import Results from '@/components/Results';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Capability from '@/components/Capability';
import Marketing from '@/components/Martketing';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const API_KEY = process.env.API_KEY

export default async function Home() {

  return (
    <>
      <main className="">
        <Navbar />

        <Hero />

        <Capability />

        <Marketing />

        <Pricing />

        <FAQ />

        <Footer />

        {/* <article className="border-2 border-green-500">
          <section className="max-w-5xl w-full mx-auto border-4 border-green-800">
            sss
          </section>
        </article> */}


        {/* <MyComponent /> */}

      </main>
    </>
  )
}

