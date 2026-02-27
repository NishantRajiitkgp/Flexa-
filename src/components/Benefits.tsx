import { motion } from "motion/react";
import { Mountain, Waves, Scale } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Strength",
      desc: "Build stability and power.",
      icon: <Mountain strokeWidth={1.2} className="w-full h-full" />,
    },
    {
      title: "Flexibility",
      desc: "Increase range and ease.",
      icon: <Waves strokeWidth={1.2} className="w-full h-full" />,
    },
    {
      title: "Balance",
      desc: "Find harmony in movement.",
      icon: <Scale strokeWidth={1.2} className="w-full h-full" />,
    },
  ];

  return (
    <section className="bg-[#F6F3ED] text-[#2A251E] py-32 px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-[#E8E2D6]/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-medium mb-20 tracking-tight"
        >
          Why practice yoga
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-12 md:p-14 flex flex-col items-center text-center border border-[#2A251E]/5 hover:border-[#2A251E]/15 hover:bg-white transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(42,37,30,0.08)] hover:-translate-y-2 overflow-hidden cursor-default"
            >
              {/* Decorative top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#2A251E]/10 group-hover:w-full group-hover:bg-[#2A251E]/20 transition-all duration-700 ease-out" />

              <div className="relative w-24 h-24 mb-10 rounded-full bg-[#FAF8F5] border border-[#2A251E]/5 flex items-center justify-center text-[#2A251E]/40 group-hover:text-[#2A251E] group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-[#2A251E]/5 transition-all duration-500">
                <div className="w-10 h-10 transition-transform duration-500 group-hover:-translate-y-0.5">
                  {benefit.icon}
                </div>
                {/* Expanding ring effect on hover */}
                <div className="absolute inset-0 rounded-full border border-[#2A251E]/10 scale-100 group-hover:scale-[1.35] opacity-100 group-hover:opacity-0 transition-all duration-700 ease-out" />
              </div>

              <h3 className="relative text-[28px] font-medium mb-4 text-[#2A251E] transition-transform duration-500 group-hover:-translate-y-1">
                {benefit.title}
              </h3>
              <p className="relative text-[#2A251E]/60 text-[16px] leading-relaxed font-medium transition-transform duration-500 group-hover:-translate-y-1 max-w-[220px]">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[#2A251E]/60 text-[16px] max-w-lg leading-relaxed font-medium"
        >
          From strength and flexibility to calm and connection, see what regular
          practice can bring to your life.
        </motion.p>
      </div>
    </section>
  );
}
