export default function Classes() {
    const classes = [
        {
            num: "01",
            title: "Vinyasa Flow",
            desc: "Dynamic movement for strength and flexibility",
            tags: ["Energy", "Flexibility", "Strength"],
            level: "All Levels",
            duration: "3 Months",
            img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=400&auto=format&fit=crop",
        },
        {
            num: "02",
            title: "Hatha Yoga",
            desc: "Slow, mindful practice with deep stretches",
            tags: ["Balance", "Calm", "Release"],
            level: "Beginner",
            duration: "1 Month",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop",
        },
        {
            num: "03",
            title: "Yin Yoga",
            desc: "Long, gentle holds for deep release and calm",
            tags: ["Flexibility", "Relaxation", "Release"],
            level: "Intermediate",
            duration: "2 Months",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop",
        },
    ];

    return (
        <section className="bg-[#F6F3ED] text-[#2A251E] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight">
                        Find your flow
                        <br />
                        with our{" "}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1.5px #2A251E" }}
                        >
                            Classes
                        </span>
                    </h2>
                    <div className="max-w-xs mb-4">
                        <p className="text-[15px] font-medium mb-4 leading-relaxed">
                            A variety of classes designed to meet you exactly where you are.
                        </p>
                        <a
                            href="#"
                            className="text-sm font-semibold border-b border-[#2A251E] pb-1 hover:opacity-70 transition-opacity"
                        >
                            Explore All
                        </a>
                    </div>
                </div>

                {/* Classes List */}
                <div className="flex flex-col">
                    {classes.map((cls, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row items-start py-12 border-t border-[#2A251E]/10 gap-8"
                        >
                            <div className="text-sm font-medium text-[#2A251E]/50 w-12 pt-2">
                                {cls.num}
                            </div>

                            <div className="flex-1 max-w-md">
                                <h3 className="text-[32px] font-medium mb-3">{cls.title}</h3>
                                <p className="text-[15px] text-[#2A251E]/80 mb-6 font-medium">
                                    {cls.desc}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {cls.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 rounded-full border border-[#2A251E]/20 text-[13px] font-medium flex items-center gap-2"
                                        >
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929" />
                                            </svg>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-8 pt-2">
                                <div>
                                    <p className="text-[13px] text-[#2A251E]/50 mb-1 font-medium">
                                        Level:
                                    </p>
                                    <p className="text-[22px] font-medium">{cls.level}</p>
                                </div>
                                <div>
                                    <p className="text-[13px] text-[#2A251E]/50 mb-1 font-medium">
                                        Duration:
                                    </p>
                                    <p className="text-[22px] font-medium">{cls.duration}</p>
                                </div>
                            </div>

                            <div className="w-full md:w-[320px] h-[180px] shrink-0">
                                <img
                                    src={cls.img}
                                    alt={cls.title}
                                    className="w-full h-full object-cover rounded-[20px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
