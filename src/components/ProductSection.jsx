import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-5">
        Produk Terbaru
      </h2>

      <div className="flex flex-wrap gap-5">
        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dengan desain nyaman."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat."
        />
      </div>
    </section>
  );
}