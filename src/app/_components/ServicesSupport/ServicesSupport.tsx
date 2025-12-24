type ServiceItem = {
  title: string;
  description: string;
};

const servicesData: ServiceItem[] = [
  {
    title: "Product Warranty",
    description: "Manufacturer-backed warranty on all CHESS products.",
  },
  {
    title: "Delivery Support",
    description: "Safe and efficient delivery for large and small items.",
  },
  {
    title: "After-Sales Support",
    description:
      "Customer assistance for inquiries and product support. (Repair and service handled according to warranty terms.)",
  },
];

export default function ServicesSupport() {
  return (
    <section className="bg-black px-6 md:px-20 py-6 md:py-12 scroll-mt-20" id="services">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-6">
        <h2 className="text-3xl md:text-4xl tracking-widest text-[#fffbfb]">
          SERVICES & SUPPORT
        </h2>
        <p className="mt-4 text-white/60">
          CHESS supports its products with simple, reliable services
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="p-8 border border-white/20 bg-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">
              {service.title}
            </h3>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
