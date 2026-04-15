import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  /* 1. INISIALISASI STATE DI PALING ATAS */
  // Cukup gunakan dataForm saja agar lebih rapi, hapus state yang terpisah
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /* 2. HANDLE PERUBAHAN INPUT */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* 3. LOGIKA FILTERING */
  // Sekarang dataForm sudah aman untuk dipanggil! ✨
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toLowerCase();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag
      ? framework.tags.some(tag => tag.toLowerCase() === _selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /* 4. MENGAMBIL UNIQUE TAGS */
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      
      {/* --- BAGIAN SEARCH & FILTER KAWAII --- */}
      <div className="mb-8 space-y-4 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            name="searchTerm"
            value={dataForm.searchTerm}
            placeholder="🔎 Search Framework ✨"
            className="w-full px-6 py-3 border-2 border-pink-200 rounded-full bg-white text-pink-700 placeholder-pink-300 shadow-sm focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 hover:border-pink-300 hover:shadow-[0_4px_15px_rgba(255,192,203,0.3)]"
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            className="w-full px-6 py-3 border-2 border-pink-200 rounded-full bg-white text-pink-700 shadow-sm focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 hover:border-pink-300 hover:shadow-[0_4px_15px_rgba(255,192,203,0.3)] appearance-none cursor-pointer"
            onChange={handleChange}
          >
            <option value="">🎀 All Tags 🎀</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                🌸 {tag}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-pink-400 text-sm">
            💖
          </div>
        </div>
      </div>
      {/* ------------------------------------- */}

      {/* --- LIST FRAMEWORK --- */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border-2 border-pink-200 p-6 mb-6 rounded-3xl shadow-[0_4px_15px_rgba(255,192,203,0.4)] bg-white hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(255,192,203,0.6)] transition-all duration-300"
        >
          <h2 className="text-2xl font-extrabold text-pink-500 mb-2 flex items-center gap-2">
            🌸 {item.name}
          </h2>

          <p className="text-pink-800 font-medium mb-4">{item.description}</p>

          <p className="text-pink-700 text-sm mb-4 bg-pink-100 inline-block px-4 py-1.5 rounded-full border border-pink-200">
            🎀 Develop by:{" "}
            <span className="font-bold text-pink-600">
              {item.details.developer}
            </span>{" "}
            ({item.details.releaseYear})
          </p>

          <br />

          <div className="mb-5 mt-1">
            <a
              href={item.details.officialWebsite}
              className="text-pink-500 hover:text-pink-400 font-bold underline decoration-pink-300 decoration-wavy underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              ✨ Visit Website ✨
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-linear-to-r from-pink-200 to-pink-300 text-pink-900 px-3 py-1 text-xs font-bold rounded-full border border-pink-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}