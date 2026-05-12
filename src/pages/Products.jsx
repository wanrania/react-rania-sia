import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [products, setProducts] = useState(productsData);

  const [form, setForm] = useState({
    tittle: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });

  // Filter Search
  const filtered = products.filter(
    (p) =>
      p.tittle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Add Product
  const handleAdd = () => {
    const newProduct = {
      id: products.length + 1,
      ...form,
    };

    setProducts([...products, newProduct]);

    setForm({
      tittle: "",
      code: "",
      category: "",
      brand: "",
      price: "",
      stock: "",
    });

    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Products" breadcrumb={["Dashboard", "Products"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all shadow-sm hover:shadow active:scale-95"
          >
            <FaPlus className="text-sm" /> Add Product
          </button>
        </PageHeader>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* SEARCH */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by Product Name or Code..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-sm bg-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Brand</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-center">Stock</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                {filtered.length > 0 ? (
                  filtered.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {p.code}
                      </td>

                      <td className="px-6 py-4">
                        <Link
                          to={`/products/${p.id}`}
                          className="text-emerald-500 hover:text-emerald-700 font-medium transition-colors"
                        >
                          {p.tittle}
                        </Link>
                      </td>

                      <td className="px-6 py-4">{p.category}</td>

                      <td className="px-6 py-4">{p.brand}</td>

                      <td className="px-6 py-4">
                        Rp {Number(p.price).toLocaleString("id-ID")}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                          {p.stock}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No products found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* MODAL CONTENT */}
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Add New Product
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              {/* TITLE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Title
                </label>

                <input
                  placeholder="e.g. Laptop Asus"
                  value={form.tittle}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                  onChange={(e) => setForm({ ...form, tittle: e.target.value })}
                />
              </div>

              {/* CODE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Code
                </label>

                <input
                  placeholder="e.g. PRD031"
                  value={form.code}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                  onChange={(e) => setForm({ ...form, code: e.target.value })}
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>

                <input
                  placeholder="e.g. Laptop"
                  value={form.category}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />
              </div>

              {/* BRAND */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>

                <input
                  placeholder="e.g. Asus"
                  value={form.brand}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                />
              </div>

              {/* PRICE & STOCK */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>

                  <input
                    type="number"
                    placeholder="8500000"
                    value={form.price}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                  </label>

                  <input
                    type="number"
                    placeholder="10"
                    value={form.stock}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, stock: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="w-full bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-all active:scale-95 shadow-sm"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
