export default function Insights() {
    const news = [
        {
            date: "Jul 5, 2025",
            title: "Join Our Upcoming Yoga Workshop Series",
            img: "/images/moody-twist.png",
        },
        {
            date: "Jun 10, 2025",
            title: "New Summer Class Schedule Announced",
            img: "/images/reflection-meditation.png",
        },
    ];

    const blogs = [
        {
            date: "Jul 9, 2025",
            title: "How to Start a Mindful Yoga Practice at Home",
            img: "/images/dark-face.png",
        },
        {
            date: "Jun 27, 2025",
            title: "Finding the Right Yoga Class for Your Goals",
            img: "/images/bright-pigeon-pose.png",
        },
    ];

    return (
        <section className="bg-[#F6F3ED] text-[#2A251E] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-24">
                    Our{" "}
                    <span
                        className="text-transparent"
                        style={{ WebkitTextStroke: "1.5px #2A251E" }}
                    >
                        Insights
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                    {/* News Column */}
                    <div>
                        <h3 className="text-[13px] font-medium text-[#2A251E]/50 mb-6">
                            News
                        </h3>
                        <div className="flex flex-col">
                            {news.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-8 group cursor-pointer py-8 border-t border-[#2A251E]/10"
                                >
                                    <div className="w-[200px] h-[120px] shrink-0 overflow-hidden rounded-[20px]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[13px] font-medium text-[#2A251E]/50 mb-2">
                                            {item.date}
                                        </p>
                                        <h4 className="text-[22px] font-medium leading-snug mb-4 group-hover:text-[#2A251E]/70 transition-colors">
                                            {item.title}
                                        </h4>
                                        <a
                                            href="#"
                                            className="text-[13px] font-semibold border-b border-[#2A251E] pb-0.5 w-fit hover:opacity-70 transition-opacity"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Blog Column */}
                    <div>
                        <h3 className="text-[13px] font-medium text-[#2A251E]/50 mb-6">
                            Blog
                        </h3>
                        <div className="flex flex-col">
                            {blogs.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-8 group cursor-pointer py-8 border-t border-[#2A251E]/10"
                                >
                                    <div className="w-[200px] h-[120px] shrink-0 overflow-hidden rounded-[20px]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[13px] font-medium text-[#2A251E]/50 mb-2">
                                            {item.date}
                                        </p>
                                        <h4 className="text-[22px] font-medium leading-snug mb-4 group-hover:text-[#2A251E]/70 transition-colors">
                                            {item.title}
                                        </h4>
                                        <a
                                            href="#"
                                            className="text-[13px] font-semibold border-b border-[#2A251E] pb-0.5 w-fit hover:opacity-70 transition-opacity"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center border-t border-[#2A251E]/10 pt-12 mt-4">
                    <a
                        href="#"
                        className="text-[15px] font-semibold hover:opacity-70 transition-opacity"
                    >
                        Explore All
                    </a>
                </div>
            </div>
        </section>
    );
}
