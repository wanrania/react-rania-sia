import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { 
    FaArrowLeft, 
    FaStar, 
    FaTag, 
    FaBoxOpen, 
    FaSpinner, 
    FaExclamationTriangle,
    FaStore,
    FaEdit,
    FaShareAlt,
    FaMoneyBillWave,
    FaPercentage,
    FaInfoCircle
} from "react-icons/fa";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.statusText);
                    setLoading(false);
                    return;
                }
                setProduct(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    // TAMPILAN ERROR (Dipercantik)
    if (error) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 text-center max-w-sm w-full">
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaExclamationTriangle size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-2">Oops! Error</h2>
                    <p className="text-slate-500 text-sm mb-6">{error}</p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium text-sm"
                    >
                        <FaArrowLeft /> Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // TAMPILAN LOADING (Dipercantik)
    if (loading || !product) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                    <FaSpinner className="text-indigo-600 text-4xl animate-spin mb-4" />
                    <p className="text-slate-500 font-medium text-sm tracking-wide animate-pulse">Fetching product details...</p>
                </div>
            </div>
        );
    }

    // Helper untuk status stok
    const isReadyStock = product.stock > 0;

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* TOP BAR: Navigasi & Aksi Cepat */}
                <div className="flex items-center justify-between gap-4">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors text-sm"
                    >
                        <FaArrowLeft className="text-xs" /> Back to Products List
                    </Link>

                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 transition-colors font-medium text-xs shadow-sm">
                            <FaShareAlt className="text-slate-400" /> Share
                        </button>
                        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-xs shadow-sm shadow-indigo-600/20">
                            <FaEdit /> Edit Product
                        </button>
                    </div>
                </div>

                {/* KARTU PRODUK UTAMA (SPLIT LAYOUT) */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    
                    {/* HEADER BANNER */}
                    <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 px-8 py-12 text-white relative">
                        {/* Kategori Badge */}
                        <div className="absolute top-6 right-6">
                             <span className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold border shadow-lg bg-white/95 text-indigo-700 border-indigo-200 backdrop-blur-sm tracking-wider uppercase">
                                 <FaTag className="text-[11px]" /> {product.category}
                             </span>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Thumbnail Produk (Ganti Avatar) */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-8 border-white/20 overflow-hidden shadow-2xl bg-white flex items-center justify-center shrink-0 p-2 group cursor-pointer relative">
                                {product.discountPercentage > 0 && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm z-10">
                                        -{Math.round(product.discountPercentage)}%
                                    </div>
                                )}
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title} 
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            
                            <div className="text-center md:text-left">
                                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1.5">Product Overview</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold mb-2.5 tracking-tighter leading-tight">{product.title}</h1>
                                
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-indigo-100 font-medium mt-3 bg-indigo-900/20 inline-flex p-2 px-3 rounded-lg backdrop-blur-sm">
                                    <span className="flex items-center gap-2">
                                        <FaStore className="text-indigo-300" /> {product.brand || "Generic Brand"}
                                    </span>
                                    <span className="text-indigo-400">|</span>
                                    <span className="flex items-center gap-2">
                                        <FaStar className="text-amber-400" /> {product.rating} / 5.0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ISI KARTU (SPLIT COLUMN) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        
                        {/* KOLOM KIRI (2/3 width) - Detail Produk */}
                        <div className="lg:col-span-2 p-8 md:p-10 space-y-10">
                            
                            {/* Seksi Deskripsi */}
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                                    Product Description
                                </h3>
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-slate-700 leading-relaxed text-sm shadow-inner">
                                    {product.description}
                                </div>
                            </div>

                            {/* Seksi Info Tambahan */}
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                                    Specifications & Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                                            <FaInfoCircle size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-500 mb-0.5">Product ID (SKU)</p>
                                            <p className="text-slate-900 font-semibold">PRD-{product.id.toString().padStart(4, '0')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                                            <FaTag size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-500 mb-0.5">Category</p>
                                            <p className="text-slate-900 font-semibold capitalize">{product.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* KOLOM KANAN (1/3 width) - Harga & Inventory */}
                        <div className="lg:col-span-1 bg-slate-50/50 p-8 md:p-10 space-y-8 flex flex-col">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                                    Pricing & Inventory
                                </h3>
                                
                                <div className="space-y-4">
                                    {/* Harga Stat */}
                                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-full -z-0"></div>
                                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full relative z-10">
                                            <FaMoneyBillWave size={18}/>
                                        </div>
                                        <div className="relative z-10">
                                            <p className="text-2xl font-black text-slate-900">
                                                Rp {(product.price * 1000).toLocaleString("id-ID")}
                                            </p>
                                            <p className="text-xs font-medium text-slate-500">Retail Price</p>
                                        </div>
                                    </div>

                                    {/* Diskon Stat (jika ada) */}
                                    {product.discountPercentage > 0 && (
                                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                            <div className="p-3 bg-red-50 text-red-500 rounded-full">
                                                <FaPercentage size={18}/>
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-red-600">{product.discountPercentage}% OFF</p>
                                                <p className="text-xs font-medium text-slate-500">Current Discount</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Stok Stat */}
                                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                        <div className={`p-3 rounded-full ${isReadyStock ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                                            <FaBoxOpen size={18}/>
                                        </div>
                                        <div>
                                            <p className={`text-xl font-bold ${isReadyStock ? "text-slate-900" : "text-red-600"}`}>
                                                {isReadyStock ? product.stock : "Out of Stock"}
                                            </p>
                                            <p className="text-xs font-medium text-slate-500">Units Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tombol Aksi Bawah */}
                            <div className="pt-8 border-t border-slate-200 mt-auto">
                                <button 
                                    disabled={!isReadyStock}
                                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                        isReadyStock 
                                        ? "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20" 
                                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                    }`}
                                >
                                    <FaBoxOpen /> {isReadyStock ? "Update Inventory" : "Restock Needed"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}