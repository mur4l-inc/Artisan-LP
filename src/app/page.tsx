import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capability from "@/components/Capability";
import Marketing from "@/components/Marketing";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
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

        <Faq />

        <Footer />
      </main>
    </>
  );
}
