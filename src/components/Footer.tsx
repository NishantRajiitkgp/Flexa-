export default function Footer() {
  return (
    <footer className="bg-[#2A251E] text-[#F6F3ED] pt-24 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <h2 className="text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-2xl">
            Find your place
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #F6F3ED" }}
            >
              and
            </span>{" "}
            practice here
          </h2>
          <div className="max-w-xs">
            <p className="text-[15px] text-[#F6F3ED]/80 mb-6 leading-relaxed">
              Experience accessible yoga that meets you exactly where you are.
            </p>
            <a
              href="#"
              className="text-sm font-semibold border-b border-[#F6F3ED] pb-1 hover:opacity-70 transition-opacity"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-[#F6F3ED]/10">
          <div>
            <h4 className="text-[13px] font-medium text-[#F6F3ED]/50 mb-6">
              Menu
            </h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-[#F6F3ED]/50 mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Call Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-[#F6F3ED]/50 mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Templates{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  NutsDev{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Temply{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-[#F6F3ED]/50 mb-6">
              Follow Us
            </h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  X (Twitter){" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Instagram{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Facebook{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  LinkedIn{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F6F3ED]/10 text-[13px] text-[#F6F3ED]/50">
          <p>© 2025, Flexa</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
