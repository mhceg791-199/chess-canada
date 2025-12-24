import Image from "next/image";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type Props = {
  product: Product;
  variant?: "light" | "dark";
};

export default function ProductCard({ product, variant = "dark" }: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={`
        relative group overflow-hidden
        border
        ${isDark ? "bg-black text-[#fffbfb] border-white" : "bg-[#fffbfb] text-black border-black"}
      `}
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-5 space-y-2">
        <p className="text-xs tracking-widest uppercase opacity-60">
          {product.category}
        </p>

        <h3 className="text-lg font-medium tracking-wide">
          {product.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${isDark ? "bg-black/80" : "bg-white/80"}
          opacity-0 group-hover:opacity-100 transition-opacity
        `}
      >
        <button
          className={`
            px-6 py-2 text-sm tracking-widest border transition
            ${isDark
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"}
          `}
        >
          View Product
        </button>
      </div>
    </div>
  );
}
