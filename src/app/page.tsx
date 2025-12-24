import Carousel from "./_components/HomeSlider/HomeSlider";
import Card from "./_components/Card/Card";
import ProductsPage from "./(pages)/(main)/product/page";
import WhyChess from "./_components/WhyChess/WhyChess";
import ServicesSupport from "./_components/ServicesSupport/ServicesSupport";
import OurPromise from "./_components/OurPromise/OurPromise";

export default function Home() {
  return (
    <div className="home bg-black text-[#fffbfb]">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[83vh] w-full flex flex-col justify-center">
        <div className="absolute inset-0 bg-home bg-cover bg-center opacity-20 z-0" />

        <div className="relative z-10 px-6 md:px-20">
          
          {/* Brand Intro */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light tracking-widest">
              CHESS
            </h1>

            <p className="mt-4 text-lg md:text-2xl tracking-wide text-white/80">
              Canadian Home, Electrical, and Supply Solutions
            </p>

            <p className="mt-2 text-sm md:text-base tracking-widest uppercase text-white/60">
              Powering & Equipping Modern Homes
            </p>
          </div>

          {/* Slider */}
          <div className="mt-12 w-full">
            <div className="h-[15rem] md:h-[22rem] w-full relative overflow-hidden">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-6 md:py-12 border-t border-white/10 scroll-mt-24" id="about">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl tracking-widest mb-6">
            ABOUT CHESS
          </h2>

          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            CHESS is a home solution brand offering a complete range of essential
            appliances and fixtures for modern living. From electronics to
            plumbing essentials, CHESS brings together functionality,
            reliability, and contemporary design — all under one trusted name.
          </p>

          <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
            We create integrated solutions for kitchens, bathrooms, and living
            spaces, making it easier to equip homes with products that work
            seamlessly together.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-6 md:px-20 ">
        <Card />
      </section>

      {/* Products */}
      <ProductsPage />

      <WhyChess/>

      <ServicesSupport/>

      <OurPromise/>
    </div>
  );
}

