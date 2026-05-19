import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";

export default function Components() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];
  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Components" breadcrumb={["Dashboard", "Components"]} />

      {/* Basic Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Basic Components</h2>

        {/* Button */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Button</h3>

          <div className="flex space-x-3">
            <Button type="success">Simpan</Button>
            <Button type="danger">Hapus</Button>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Badge</h3>

          <div className="flex space-x-3">
            <Badge type="primary">Baru</Badge>
            <Badge type="success">Aktif</Badge>
            <Badge type="warning">Pending</Badge>
            <Badge type="danger">Ditolak</Badge>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <h3 className="font-semibold mb-3">Avatar</h3>

          <div className="flex space-x-3">
            <Avatar name="Budi" />
            <Avatar name="Siti" />
            <Avatar name="Andi" />
          </div>
        </div>
      </div>

      {/* Layout Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Layout Components</h2>

        {/* Container */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Container</h3>

          <Container className="bg-gray-100 rounded-xl">
            <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>

            <p className="text-gray-600">
              Berikut adalah daftar produk terbaru.
            </p>
          </Container>
        </div>

        {/* Footer */}
        <div>
          <h3 className="font-semibold mb-3">Footer</h3>

          <Footer />
        </div>
      </div>

      {/* Data Display Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Data Display Components</h2>

        {/* Card */}
        <div>
          <h3 className="font-semibold mb-3">Card</h3>

          <Card>
            <h2 className="text-xl font-bold">Judul Card</h2>

            <p className="text-gray-600 mt-2">Ini adalah isi dari card.</p>
          </Card>
        </div>

        {/* Product Card */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Product Card</h3>

          <div className="flex gap-5 flex-wrap">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan."
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat dan kamera jernih."
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Table</h3>

          <Table headers={headers}>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{index + 1}</td>

                <td className="border px-4 py-3">{product.name}</td>

                <td className="border px-4 py-3">{product.category}</td>

                <td className="border px-4 py-3">{product.price}</td>

                <td className="border px-4 py-3">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>

      {/* Form Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Form Components</h2>

        <div className="grid gap-5">
          {/* Input Field */}
          <InputField label="Nama Produk" placeholder="Masukkan nama produk" />

          {/* Text Area */}
          <TextArea label="Deskripsi" placeholder="Masukkan deskripsi produk" />

          {/* Select Field */}
          <SelectField
            label="Kategori"
            options={["Elektronik", "Fashion", "Aksesoris"]}
          />
        </div>
      </div>

      {/* Feedback Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Feedback Components</h2>

        <div className="space-y-5">
          {/* Alert */}
          <div>
            <h3 className="font-semibold mb-3">Alert</h3>

            <div className="space-y-3">
              <Alert type="success">Data berhasil disimpan</Alert>

              <Alert type="danger">Data gagal dihapus</Alert>

              <Alert type="warning">Periksa kembali input anda</Alert>
            </div>
          </div>

          {/* Loading */}
          <div>
            <h3 className="font-semibold mb-3">Loading</h3>

            <Loading />
          </div>

          {/* Modal */}
          <div>
            <h3 className="font-semibold mb-3">Modal</h3>

            <div className="relative h-72 border rounded-xl overflow-hidden">
              <Modal title="Konfirmasi">
                Apakah anda yakin ingin menghapus data?
              </Modal>
            </div>
          </div>
        </div>
      </div>

      {/* Section Components */}
      <div className="bg-white p-5 rounded-xl shadow mt-5">
        <h2 className="text-xl font-bold mb-6">Section Components</h2>

        <div className="space-y-10">
          {/* Hero Section */}
          <div>
            <h3 className="font-semibold mb-3">Hero Section</h3>

            <HeroSection />
          </div>

          {/* Feature Section */}
          <div>
            <h3 className="font-semibold mb-3">Feature Section</h3>

            <FeatureSection />
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-semibold mb-3">Product Section</h3>

            <ProductSection />
          </div>
        </div>
      </div>
    </div>
  );
}
