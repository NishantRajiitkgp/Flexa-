export default function About() {
    return (
        <section className="bg-[#2A251E] text-[#F6F3ED] py-32 px-8 relative overflow-hidden">
            {/* Decorative background star */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <svg
                    width="600"
                    height="600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                >
                    <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="flex items-center gap-2 text-[#D8D1C5] text-sm font-medium mb-8">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                        </svg>
                        About Flexa
                    </div>
                    <h2 className="text-5xl md:text-6xl font-medium leading-[1.1] max-w-4xl text-[#E8E2D6]">
                        A warm, inclusive space
                        <br />
                        <span className="text-[#D8D1C5]">
                            to move, breathe, and
                            <br />
                            grow your practice
                        </span>
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Image */}
                    <div className="relative mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
                            alt="Yoga practice"
                            className="w-full aspect-[4/3] object-cover rounded-3xl"
                        />
                        <div className="absolute -bottom-6 right-6 bg-[#3A342B] backdrop-blur-md rounded-2xl p-4 pr-8 border border-white/5">
                            <p className="text-2xl font-medium text-white">300+</p>
                            <p className="text-sm text-[#D8D1C5]">Members</p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative -mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
                            alt="Aerial yoga"
                            className="w-full aspect-[3/4] object-cover rounded-3xl"
                        />
                        <div className="absolute -bottom-6 right-6 bg-[#3A342B] backdrop-blur-md rounded-2xl p-4 pr-8 border border-white/5">
                            <p className="text-2xl font-medium text-white">97%</p>
                            <p className="text-sm text-[#D8D1C5]">Satisfaction</p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-24">
                        <div className="absolute -top-16 left-6 bg-[#3A342B] backdrop-blur-md rounded-2xl p-4 pr-8 border border-white/5 z-10">
                            <p className="text-2xl font-medium text-white">24/7</p>
                            <p className="text-sm text-[#D8D1C5]">Support</p>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                            alt="Yoga studio"
                            className="w-full aspect-[4/3] object-cover rounded-3xl relative z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
