import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
  const [openModal, setOpenModal] = useState(false);

  const [customers, setCustomers] = useState(customersData);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleAdd = () => {
    const newCustomer = {
      id: `C${String(customers.length + 1).padStart(3, "0")}`,
      ...form,
    };

    setCustomers([...customers, newCustomer]);

    setForm({
      name: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });

    setOpenModal(false);
  };

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
                  <tr
                    key={c.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {c.id}
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/customers/${c.id}`}
                        className="text-emerald-500 hover:text-emerald-700 font-medium transition-colors"
                      >
                        {c.name}
                      </Link>
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {c.email}
                    </td>

                    <td className="px-6 py-4">{c.phone}</td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${getLoyaltyBadge(
                          c.loyalty
                        )}`}
                      >
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
          <div
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          ></div>

          <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Add New Customer
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Full Name"
                value={form.name}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                value={form.email}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <input
                placeholder="Phone"
                value={form.phone}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <select
                value={form.loyalty}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                onChange={(e) =>
                  setForm({ ...form, loyalty: e.target.value })
                }
              >
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="w-full bg-emerald-600 text-white px-4 py-2.5 rounded-lg"
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