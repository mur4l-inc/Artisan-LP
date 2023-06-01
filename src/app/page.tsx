import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capability from "@/components/Capability";
import Marketing from "@/components/Marketing";
import Pricing from "@/components/Pricing";
import QA from "@/components/QA";
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

        <QA />

        <Footer />
      </main>
    </>
  );
}
