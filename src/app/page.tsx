import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capability from "@/components/Capability";
import Marketing from "@/components/Marketing";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const API_KEY = process.env.API_KEY;

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
      </main>
    </>
  );
}
