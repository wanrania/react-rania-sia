export default function FeatureSection() {
  const features = [
    "Gratis Ongkir",
    "Produk Berkualitas",
    "Support 24 Jam",
  ];

  return (
    <section className="grid md:grid-cols-3 gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow border"
        >
          <h3 className="text-xl font-bold">
            {feature}
          </h3>

          <p className="text-gray-600 mt-2">
            Layanan terbaik untuk pelanggan.
          </p>
        </div>
      ))}
    </section>
  );
}