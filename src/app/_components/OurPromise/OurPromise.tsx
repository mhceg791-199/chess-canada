import Link from "next/link";

export default function OurPromise() {
  return (
    <section
      id="contact"
      className="bg-black text-[#fffbfb] px-6 md:px-20 py-12 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-white/20 pt-20">

        {/* Left: Promise */}
        <div>
          <h2 className="text-3xl md:text-4xl tracking-widest mb-6">
            OUR PROMISE
          </h2>

          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            At CHESS, we believe a home works best when everything works
            together. That’s why we focus on providing reliable, well-designed
            appliances and fixtures that simplify everyday life — from kitchens
            to bathrooms, and everything in between.
          </p>
        </div>

        {/* Right: Call to Action */}
        <div className="border border-white/30 p-10 md:p-14">
          <p className="text-sm tracking-widest uppercase opacity-60 mb-4">
            Call to Action
          </p>

          <h3 className="text-2xl md:text-3xl tracking-wide mb-4">
            Equip Your Home with CHESS
          </h3>

          <p className="text-white/70 mb-8">
            Smart solutions. Reliable performance.
            <br />
            One complete home brand.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="px-8 py-3 border border-white text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="px-8 py-3 border border-white/30 text-sm tracking-widest hover:border-white transition"
            >
              Explore CHESS Products
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
