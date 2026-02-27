import { Phone } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-stretch h-[72px] border-b border-white/20 text-white/90">
            <div className="flex items-center px-8 border-r border-white/20 min-w-[200px]">
                <a
                    href="#"
                    className="flex items-center gap-3 font-medium text-[17px] tracking-wide text-white"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2a10 10 0 1 1-7.07 2.93" />
                    </svg>
                    Flexa
                </a>
            </div>

            <div className="flex-1 flex items-center px-8">
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
                    <a href="#" className="hover:text-white transition-colors">
                        Classes
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Pricing
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Insights
                    </a>
                </div>
            </div>

            <div className="flex items-stretch">
                <div className="hidden md:flex items-center px-8 border-l border-white/20">
                    <a
                        href="tel:+12135550198"
                        className="flex items-center gap-2 text-[15px] font-medium hover:text-white transition-colors"
                    >
                        <Phone size={16} />
                        +1 (213) 555-0198
                    </a>
                </div>
                <button className="bg-[#F6F3ED] text-[#2A251E] px-8 h-full text-[15px] font-medium hover:bg-white transition-colors">
                    Join Now
                </button>
            </div>
        </nav>
    );
}
