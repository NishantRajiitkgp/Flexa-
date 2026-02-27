export default function CTA() {
    return (
        <section className="relative h-[800px] w-full p-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
                    alt="Meditation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between py-12">
                <h2 className="text-[6.5rem] leading-[0.95] tracking-tight text-white font-medium max-w-3xl mt-24">
                    Breathe deep.
                    <br />
                    <span className="text-white/80">Start practice</span>
                </h2>

                <div className="self-end max-w-[480px] w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-10 relative overflow-hidden mt-auto">
                    <h3 className="text-white text-[28px] font-medium leading-snug mb-8 relative z-10">
                        Find your flow{" "}
                        <span className="text-white/70">in a warm, inclusive space</span>{" "}
                        where every class helps you reconnect.
                    </h3>
                    <a
                        href="#"
                        className="text-white text-[15px] font-medium hover:underline underline-offset-4 relative z-10 inline-block"
                    >
                        Explore Pricing
                    </a>

                    {/* Decorative Star */}
                    <div className="absolute -bottom-12 -right-12 text-white/20 w-48 h-48">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="w-full h-full"
                        >
                            <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
