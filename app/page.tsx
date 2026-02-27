import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-flexa-light font-sans selection:bg-flexa-dark selection:text-flexa-light">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Classes />
                <Benefits />
                <CTA />
                <Insights />
            </main>
            <Footer />
        </div>
    );
}
