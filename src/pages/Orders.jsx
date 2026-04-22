import { useState } from "react";
import { FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [orders, setOrders] = useState([
  { id: "#ORD001", customer: "Andi Saputra", total: "Rp 250.000", status: "pending", date: "2026-04-01" },
  { id: "#ORD002", customer: "Budi Santoso", total: "Rp 175.000", status: "processing", date: "2026-04-02" },
  { id: "#ORD003", customer: "Citra Lestari", total: "Rp 90.000", status: "cancelled", date: "2026-04-03" },
  { id: "#ORD004", customer: "Dewi Anggraini", total: "Rp 320.000", status: "delivered", date: "2026-04-04" },
  { id: "#ORD005", customer: "Eko Prasetyo", total: "Rp 210.000", status: "pending", date: "2026-04-05" },
  { id: "#ORD006", customer: "Fajar Hidayat", total: "Rp 150.000", status: "delivered", date: "2026-04-06" },
  { id: "#ORD007", customer: "Gina Marlina", total: "Rp 80.000", status: "cancelled", date: "2026-04-07" },
  { id: "#ORD008", customer: "Hadi Wijaya", total: "Rp 275.000", status: "delivered", date: "2026-04-08" },
  { id: "#ORD009", customer: "Indah Sari", total: "Rp 120.000", status: "pending", date: "2026-04-09" },
  { id: "#ORD010", customer: "Joko Susilo", total: "Rp 300.000", status: "delivered", date: "2026-04-10" },

  { id: "#ORD011", customer: "Kiki Amelia", total: "Rp 95.000", status: "cancelled", date: "2026-04-11" },
  { id: "#ORD012", customer: "Lukman Hakim", total: "Rp 180.000", status: "delivered", date: "2026-04-12" },
  { id: "#ORD013", customer: "Maya Putri", total: "Rp 220.000", status: "processing", date: "2026-04-13" },
  { id: "#ORD014", customer: "Nanda Pratama", total: "Rp 260.000", status: "delivered", date: "2026-04-14" },
  { id: "#ORD015", customer: "Oki Setiawan", total: "Rp 70.000", status: "cancelled", date: "2026-04-15" },
  { id: "#ORD016", customer: "Putri Ayu", total: "Rp 310.000", status: "delivered", date: "2026-04-16" },
  { id: "#ORD017", customer: "Qori Ahmad", total: "Rp 140.000", status: "pending", date: "2026-04-17" },
  { id: "#ORD018", customer: "Rina Kurnia", total: "Rp 200.000", status: "delivered", date: "2026-04-18" },
  { id: "#ORD019", customer: "Sandi Nugroho", total: "Rp 110.000", status: "cancelled", date: "2026-04-19" },
  { id: "#ORD020", customer: "Tina Yuliana", total: "Rp 230.000", status: "delivered", date: "2026-04-20" },

  { id: "#ORD021", customer: "Umar Faruq", total: "Rp 125.000", status: "processing", date: "2026-04-21" },
  { id: "#ORD022", customer: "Vina Melati", total: "Rp 280.000", status: "delivered", date: "2026-04-22" },
  { id: "#ORD023", customer: "Wahyu Hidayat", total: "Rp 95.000", status: "cancelled", date: "2026-04-23" },
  { id: "#ORD024", customer: "Xena Putri", total: "Rp 210.000", status: "delivered", date: "2026-04-24" },
  { id: "#ORD025", customer: "Yudi Santika", total: "Rp 170.000", status: "pending", date: "2026-04-25" },
  { id: "#ORD026", customer: "Zahra Nabila", total: "Rp 290.000", status: "delivered", date: "2026-04-26" },
  { id: "#ORD027", customer: "Agus Salim", total: "Rp 80.000", status: "cancelled", date: "2026-04-27" },
  { id: "#ORD028", customer: "Bella Sari", total: "Rp 260.000", status: "delivered", date: "2026-04-28" },
  { id: "#ORD029", customer: "Chandra Wijaya", total: "Rp 190.000", status: "processing", date: "2026-04-29" },
  { id: "#ORD030", customer: "Dina Kartika", total: "Rp 240.000", status: "delivered", date: "2026-04-30" }
]);

  const [form, setForm] = useState({
    customer: "",
    total: "",
    status: "pending",
    date: ""
  });

  const filtered = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    // Format ID agar selalu 3 digit angka, misal #ORD011
    const newIdNum = orders.length + 1;
    const formattedId = `#ORD${String(newIdNum).padStart(3, "0")}`;
    
    const newOrder = {
      id: formattedId,
      ...form
    };
    setOrders([...orders, newOrder]);
    setForm({ customer: "", total: "", status: "pending", date: "" }); // Reset form
    setOpenModal(false);
  };

  // Fungsi untuk memberi warna badge sesuai status pesanan
  const getStatusBadge = (status) => {
    switch (status) {
      case "delivered":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="px-6 pt-6">
        <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all shadow-sm hover:shadow active:scale-95"
          >
            <FaPlus className="text-sm" /> Add Order
          </button>
        </PageHeader>
      </div>

      <div className="p-6">
        {/* Kontrol Atas: Search Bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order ID or Customer..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-sm bg-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* TABEL CARD */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                {filtered.length > 0 ? (
                  filtered.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{o.id}</td>
                      <td className="px-6 py-4">{o.customer}</td>
                      <td className="px-6 py-4 text-gray-500">{o.date}</td>
                      <td className="px-6 py-4 font-medium">{o.total}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border uppercase tracking-wider ${getStatusBadge(o.status)}`}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                      No orders found matching "{searchTerm}"
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add New Order</h2>
              <button
                onClick={() => setOpenModal(false)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  placeholder="e.g. John Doe"
                  value={form.customer}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                  onChange={(e) => setForm({ ...form, customer: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount (Rp)</label>
                <input
                  placeholder="e.g. Rp 150.000"
                  value={form.total}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                  onChange={(e) => setForm({ ...form, total: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={form.status}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700 bg-white"
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={form.date}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="w-full bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-100 transition-all active:scale-95 shadow-sm"
              >
                Save Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
