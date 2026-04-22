import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [openModal, setOpenModal] = useState(false);

  const [customers, setCustomers] = useState([
  { id: "C001", name: "Andi Saputra", email: "andi@mail.com", phone: "081234567001", loyalty: "Gold" },
  { id: "C002", name: "Budi Santoso", email: "budi@mail.com", phone: "081234567002", loyalty: "Silver" },
  { id: "C003", name: "Citra Lestari", email: "citra@mail.com", phone: "081234567003", loyalty: "Bronze" },
  { id: "C004", name: "Dewi Anggraini", email: "dewi@mail.com", phone: "081234567004", loyalty: "Gold" },
  { id: "C005", name: "Eko Prasetyo", email: "eko@mail.com", phone: "081234567005", loyalty: "Silver" },
  { id: "C006", name: "Fajar Hidayat", email: "fajar@mail.com", phone: "081234567006", loyalty: "Bronze" },
  { id: "C007", name: "Gina Marlina", email: "gina@mail.com", phone: "081234567007", loyalty: "Gold" },
  { id: "C008", name: "Hadi Wijaya", email: "hadi@mail.com", phone: "081234567008", loyalty: "Silver" },
  { id: "C009", name: "Indah Sari", email: "indah@mail.com", phone: "081234567009", loyalty: "Bronze" },
  { id: "C010", name: "Joko Susilo", email: "joko@mail.com", phone: "081234567010", loyalty: "Gold" },

  { id: "C011", name: "Kiki Amelia", email: "kiki@mail.com", phone: "081234567011", loyalty: "Silver" },
  { id: "C012", name: "Lukman Hakim", email: "lukman@mail.com", phone: "081234567012", loyalty: "Bronze" },
  { id: "C013", name: "Maya Putri", email: "maya@mail.com", phone: "081234567013", loyalty: "Gold" },
  { id: "C014", name: "Nanda Pratama", email: "nanda@mail.com", phone: "081234567014", loyalty: "Silver" },
  { id: "C015", name: "Oki Setiawan", email: "oki@mail.com", phone: "081234567015", loyalty: "Bronze" },
  { id: "C016", name: "Putri Ayu", email: "putri@mail.com", phone: "081234567016", loyalty: "Gold" },
  { id: "C017", name: "Qori Ahmad", email: "qori@mail.com", phone: "081234567017", loyalty: "Silver" },
  { id: "C018", name: "Rina Kurnia", email: "rina@mail.com", phone: "081234567018", loyalty: "Bronze" },
  { id: "C019", name: "Sandi Nugroho", email: "sandi@mail.com", phone: "081234567019", loyalty: "Gold" },
  { id: "C020", name: "Tina Yuliana", email: "tina@mail.com", phone: "081234567020", loyalty: "Silver" },

  { id: "C021", name: "Umar Faruq", email: "umar@mail.com", phone: "081234567021", loyalty: "Bronze" },
  { id: "C022", name: "Vina Melati", email: "vina@mail.com", phone: "081234567022", loyalty: "Gold" },
  { id: "C023", name: "Wahyu Hidayat", email: "wahyu@mail.com", phone: "081234567023", loyalty: "Silver" },
  { id: "C024", name: "Xena Putri", email: "xena@mail.com", phone: "081234567024", loyalty: "Bronze" },
  { id: "C025", name: "Yudi Santika", email: "yudi@mail.com", phone: "081234567025", loyalty: "Gold" },
  { id: "C026", name: "Zahra Nabila", email: "zahra@mail.com", phone: "081234567026", loyalty: "Silver" },
  { id: "C027", name: "Agus Salim", email: "agus@mail.com", phone: "081234567027", loyalty: "Bronze" },
  { id: "C028", name: "Bella Sari", email: "bella@mail.com", phone: "081234567028", loyalty: "Gold" },
  { id: "C029", name: "Chandra Wijaya", email: "chandra@mail.com", phone: "081234567029", loyalty: "Silver" },
  { id: "C030", name: "Dina Kartika", email: "dina@mail.com", phone: "081234567030", loyalty: "Bronze" }
]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  const handleAdd = () => {
    const newCustomer = {
      id: `C00${customers.length + 1}`,
      ...form
    };
    setCustomers([...customers, newCustomer]);
    setForm({ name: "", email: "", phone: "", loyalty: "Bronze" }); // Reset form
    setOpenModal(false);
  };

  // Fungsi untuk memberi warna badge sesuai level loyalty
  const getLoyaltyBadge = (level) => {
    switch (level) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Silver":
        return "bg-gray-200 text-gray-800 border-gray-300";
      case "Bronze":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="px-6 pt-6">
        <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all shadow-sm hover:shadow active:scale-95"
          >
            <FaPlus className="text-sm" /> Add Customer
          </button>
        </PageHeader>
      </div>

      <div className="p-6">
        {/* TABEL CARD */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4 text-center">Loyalty</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                {customers.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{c.id}</td>
                    <td className="px-6 py-4">{c.name}</td>
                    <td className="px-6 py-4 text-gray-500">{c.email}</td>
                    <td className="px-6 py-4">{c.phone}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getLoyaltyBadge(c.loyalty)}`}>
                        {c.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
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
              <h2 className="text-xl font-bold text-gray-800">Add New Customer</h2>
              <button 
                onClick={() => setOpenModal(false)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  placeholder="e.g. John Doe" 
                  value={form.name}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email"
                  placeholder="john@example.com" 
                  value={form.email}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  placeholder="0812xxxxxxxx" 
                  value={form.phone}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loyalty Tier</label>
                <select 
                  value={form.loyalty}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-700 bg-white"
                  onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
                >
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
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
                Save Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
