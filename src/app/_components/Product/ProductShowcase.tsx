import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "CHESS Washing Machines",
    category: "Home Appliances & Electronics",
    image: "/products/washing-machine.jpg",
  },
  {
    id: 2,
    name: "CHESS Ovens",
    category: "Home Appliances & Electronics",
    image: "/products/oven.jpg",
  },
  {
    id: 3,
    name: "CHESS Ovens",
    category: "Home Appliances & Electronics",   
    image: "/products/Oven2.jpg",
  },
  {
    id: 4,
    name: "CHESS Refrigerators",
    category: "Home Appliances & Electronics",
    image: "/products/refrigerator.jpg",
  },
  {
    id: 5,
    name: "CHESS TVs",
    category: "Home Appliances & Electronics",
    image: "/products/tv.avif",
  },
  {
    id: 6,
    name: "CHESS Freezers",
    category: "Home Appliances & Electronics",
    image: "/products/freezers.jpg",
  },
  {
    id: 7,
    name: "CHESS Microwaves",
    category: "Home Appliances & Electronics",
    image: "/products/microwaves.jpg",
  },
  {
    id: 8,
    name: "CHESS Lighting Fixtures",
    category: "Lighting & Ventilation",   
    image: "/products/lighting-fixtures.avif",
  },
  {
    id: 9,
    name: "CHESS Stoves",
    category: "Home Appliances & Electronics",
    image: "/products/stove.jpg",
  },
  {
    id: 10,
    name: "CHESS Dryers",
    category: "Home Appliances & Electronics",
    image: "/products/dryer.jpg",
  },
  {
    id: 11,
    name: "CHESS Hood Fans",
    category: "Home Appliances & Electronics",
    image: "/products/hood-v2.jpg",
  },
  {
    id: 12,
    name: "CHESS Lighting Fixtures",
    category: "Lighting & Ventilation",   
    image: "/products/lighting-fixture.avif",
  },
{
    id: 13,
    name: "CHESS Ceiling Fans",
    category: "Lighting & Ventilation",   
    image: "/products/ceiling-fan.avif",
  },
  {
    id: 15,
    name: "CHESS Kitchen Sinks",
    category: "Kitchen & Bathroom Solutions",   
    image: "/products/kitchen-sink.avif",
  },
  {
    id: 16,
    name: "CHESS Bathroom & Kitchen Mixers",
    category: "Kitchen & Bathroom Solutions",   
    image: "/products/mixer.jpg",
  },
  {
    id: 17,
    name: "CHESS Electronic Toilets",
    category: "Kitchen & Bathroom Solutions",   
    image: "/products/toilet.webp",
  },
];

export default function ProductShowcase() {
  const columns = 4;

  return (
    <section
      id="products"
      className="bg-black py-6 md:py-12 px-6 md:px-20 scroll-mt-20"
    >
      {/* Section Title */}
      <div className="mb-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest text-[#fffbfb]">
          CHESS PRODUCT RANGE
        </h2>
      </div>

      {/* Chess Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4">
        {products.map((product, index) => {
          const row = Math.floor(index / columns);
          const col = index % columns;
          const isDark = (row + col) % 2 === 0;

          return (
            <ProductCard
              key={product.id}
              product={product}
              variant={isDark ? "dark" : "light"}
            />
          );
        })}
      </div>
    </section>
  );
}

