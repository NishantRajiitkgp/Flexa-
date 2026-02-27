import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex flex-col pt-[72px] overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Yoga_Video_Generation.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full px-8 flex-1 flex flex-col justify-center">
                <h1 className="text-[7.5rem] leading-[1.05] tracking-tight text-[#F6F3ED] font-medium max-w-5xl">
                    Flow like water.
                    <br />
                    Stand like a tree
                </h1>
            </div>

            {/* Bottom Grid */}
            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 border-t border-white/20 h-[340px]">
                {/* Testimonial Section */}
                <div className="border-r border-white/20 p-8 flex flex-col">
                    <p className="text-white/80 text-[15px] font-medium mb-6">
                        What other say
                    </p>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex gap-6 items-center flex-1">
                        <img
                            src="/images/peaceful-portrait.png"
                            alt="Karina L."
                            className="w-[140px] h-[160px] rounded-2xl object-cover"
                        />
                        <div className="flex-1 flex flex-col justify-between h-full py-2">
                            <div>
                                <div className="text-white/40 text-2xl font-serif leading-none mb-3">
                                    99
                                </div>
                                <p className="text-white text-[15px] leading-relaxed mb-4 font-medium pr-4">
                                    &quot;More than yoga - it&apos;s a second home with incredible people
                                    and caring teachers who make everyone feel welcome.&quot;
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-white/60 text-[15px] font-medium">
                                    Karina L.
                                </span>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-white text-[#2A251E] flex items-center justify-center hover:bg-white/90 transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="p-8 flex flex-col relative">
                    <p className="text-white/80 text-[15px] font-medium mb-6">
                        About Flexa
                    </p>
                    <div className="flex-1 flex items-center pr-24">
                        <h3 className="text-white text-[28px] font-medium leading-snug">
                            We&apos;re a supportive community where you can grow and deepen your
                            yoga practice.
                        </h3>
                    </div>

                    {/* Decorative Star */}
                    <div className="absolute right-12 top-1/2 text-white/60">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        >
                            <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
