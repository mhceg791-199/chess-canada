type WhyItem = {
  title: string;
  description: string;
};

const whyChessData: WhyItem[] = [
  {
    title: "One Brand, Complete Home Solutions",
    description:
      "Appliances, fixtures, and essentials designed to work together.",
  },
  {
    title: "Consistent Quality & Design",
    description:
      "Unified standards across all product categories.",
  },
  {
    title: "Practical & Modern Living",
    description:
      "Built for everyday use, comfort, and durability.",
  },
  {
    title: "Trusted Canadian Standards",
    description:
      "Reliability you can depend on for your home.",
  },
];

export default function WhyChess() {
  return (
    <section className="bg-black px-6 md:px-20 py-6 md:py-12">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-6">
        <h2 className="text-3xl md:text-4xl tracking-widest text-[#fffbfb]">
          WHY CHESS
        </h2>
      </div>

      {/* Boards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white">
        {whyChessData.map((item, index) => {
          // تحديد اللون حسب ترتيب ثابت
          const isDark = index === 0 || index === 3;

          return (
            <div
              key={item.title}
              className={`
                p-10 md:p-14
                border
                ${isDark
                  ? "bg-black text-[#fffbfb] border-white"
                  : "bg-[#fffbfb] text-black border-black"
                }
              `}
            >
              <h3 className="text-lg md:text-xl tracking-widest mb-4">
                {item.title}
              </h3>

              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
