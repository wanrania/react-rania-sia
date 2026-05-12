import { useParams, Link } from "react-router-dom";
import customersData from "../data/customers.json";
import { 
  FaEnvelope, 
  FaPhone, 
  FaIdBadge, 
  FaArrowLeft, 
  FaStar, 
  FaUserAltSlash, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaShoppingCart, 
  FaEdit
} from "react-icons/fa";

export default function CustomerDetail() {
  const { id } = useParams();

  // Memastikan tipe datanya sama saat dicocokkan (mencegah error jika id di json berupa number)
  const customer = customersData.find((c) => c.id.toString() === id);

  // Helper untuk mengambil inisial nama (Misal: "Budi Santoso" -> "BS")
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Helper untuk warna badge loyalty
  const getLoyaltyBadge = (loyalty) => {
    const level = loyalty?.toLowerCase() || "";
    if (level === "gold") return "bg-amber-100 text-amber-600 border-amber-200";
    if (level === "silver") return "bg-slate-200 text-slate-700 border-slate-300";
    if (level === "platinum") return "bg-indigo-100 text-indigo-600 border-indigo-200";
    return "bg-emerald-100 text-emerald-600 border-emerald-200"; // default/member biasa
  };

  // --- MOCK DATA FOR PLACEHOLDERS (Agar tampilan template terlihat keren & realistis) ---
  const joinedDate = "October 12, 2023"; // Placeholder
  const lastOrder = "3 days ago"; // Placeholder
  const totalOrders = 28; // Placeholder
  const internalNotes = "Pelanggan setia, sering memesan produk elektronik kategori High-End. Preferensi pengiriman pagi hari."; // Placeholder
  const fullAddress = "Jl. Sudirman No. 45, Lantai 10, Jakarta Selatan, DKI Jakarta, 12190"; // Placeholder
  // -------------------------------------------------------------------------------------

  // Tampilan jika data tidak ditemukan
  if (!customer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUserAltSlash size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Customer Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">The customer you are looking for does not exist or has been removed.</p>
          <Link
            to="/customers"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium text-sm"
          >
            <FaArrowLeft /> Back to Customers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP BAR: Navigasi & Aksi Cepat */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/customers" // Sesuaikan dengan route list customer kamu
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors text-sm"
          >
            <FaArrowLeft className="text-xs" /> Back to Customers List
          </Link>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 transition-colors font-medium text-xs shadow-sm">
              <FaEdit className="text-slate-400" /> Edit Profile
            </button>
            <a href={`mailto:${customer.email}`} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-xs shadow-sm shadow-indigo-600/20">
              <FaEnvelope /> Send Email
            </a>
          </div>
        </div>

        {/* KARTU PROFIL UTAMA (SPLIT LAYOUT) */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* HEADER BANNER */}
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 px-8 py-12 text-white relative">
            {/* Loyalty Badge */}
            <div className="absolute top-6 right-6">
               <span className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold border shadow-lg ${getLoyaltyBadge(customer.loyalty)} bg-white/95 backdrop-blur-sm tracking-wider`}>
                 <FaStar className="text-[11px]" /> {customer.loyalty?.toUpperCase() || "MEMBER"}
               </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar Inisial */}
              <div className="w-28 h-28 rounded-full border-8 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl font-black tracking-tighter text-white/90 shrink-0">
                {getInitials(customer.name)}
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1.5">Customer Profile</p>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2.5 tracking-tighter leading-tight">{customer.name}</h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-indigo-100 font-medium mt-3 bg-indigo-900/20 inline-flex p-2 px-3 rounded-lg backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <FaIdBadge className="text-indigo-300" /> ID: {customer.id}
                  </span>
                  <span className="text-indigo-400">|</span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-indigo-300" /> Joined: {joinedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ISI KARTU (SPLIT COLUMN) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* KOLOM KIRI (2/3 width) - Informasi Utama */}
            <div className="lg:col-span-2 p-8 md:p-10 space-y-10">
              
              {/* Seksi Kontak */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kolom Email */}
                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl transition-all hover:border-indigo-100 hover:bg-white hover:shadow-lg hover:shadow-indigo-50">
                    <div className="p-3.5 bg-white text-indigo-600 rounded-xl border border-slate-100 shadow-inner">
                      <FaEnvelope size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-medium text-slate-500 mb-0.5">Email Address</p>
                      <a href={`mailto:${customer.email}`} className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors truncate block">
                        {customer.email}
                      </a>
                    </div>
                  </div>

                  {/* Kolom Telepon */}
                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl transition-all hover:border-indigo-100 hover:bg-white hover:shadow-lg hover:shadow-indigo-50">
                    <div className="p-3.5 bg-white text-indigo-600 rounded-xl border border-slate-100 shadow-inner">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 mb-0.5">Phone Number</p>
                      <a href={`tel:${customer.phone}`} className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors block">
                        {customer.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seksi Alamat */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                  Primary Address
                </h3>
                <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                    <div className="p-3.5 bg-white text-emerald-600 rounded-xl border border-slate-100 shadow-inner mt-1">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                        <p className="text-slate-800 font-medium leading-relaxed">
                            {fullAddress}
                        </p>
                    </div>
                </div>
              </div>

              {/* Seksi Catatan */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                  Internal Notes
                </h3>
                <div className="bg-amber-50 text-amber-900 p-6 rounded-2xl border border-amber-100 text-sm leading-relaxed shadow-inner">
                    {internalNotes}
                </div>
              </div>
              
            </div>

            {/* KOLOM KANAN (1/3 width) - Ringkasan Aktivitas */}
            <div className="lg:col-span-1 bg-slate-50/50 p-8 md:p-10 space-y-8">
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                        Activity Summary
                    </h3>
                    
                    <div className="space-y-4">
                        {/* Stat 1 */}
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full">
                                <FaShoppingCart size={18}/>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">{totalOrders}</p>
                                <p className="text-xs font-medium text-slate-500">Total Orders</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full">
                                <FaCalendarAlt size={18}/>
                            </div>
                            <div>
                                <p className="text-base font-semibold text-slate-800">{lastOrder}</p>
                                <p className="text-xs font-medium text-slate-500">Last Active Order</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seksi Tambahan (Misal: Segmentasi) */}
                <div className="pt-8 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Customer Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-white text-xs font-medium text-slate-600 px-3 py-1 rounded-full border border-slate-200 shadow-sm">Electronics</span>
                        <span className="bg-white text-xs font-medium text-slate-600 px-3 py-1 rounded-full border border-slate-200 shadow-sm">High-Spender</span>
                        <span className="bg-white text-xs font-medium text-slate-600 px-3 py-1 rounded-full border border-slate-200 shadow-sm">Repeat Buyer</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}