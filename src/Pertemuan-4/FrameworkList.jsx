import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border-2 border-pink-200 p-6 mb-6 rounded-3xl shadow-[0_4px_15px_rgba(255,192,203,0.4)] bg-white hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(255,192,203,0.6)] transition-all duration-300"
        >
          {/* Judul dengan ikon bunga */}
          <h2 className="text-2xl font-extrabold text-pink-500 mb-2 flex items-center gap-2">
            🌸 {item.name}
          </h2>
          
          {/* Deskripsi */}
          <p className="text-pink-800 font-medium mb-4">
            {item.description}
          </p>
          
          {/* Detail Developer dengan background soft pink */}
          <p className="text-pink-700 text-sm mb-4 bg-pink-100 inline-block px-4 py-1.5 rounded-full border border-pink-200">
            🎀 Develop by:{" "}
            <span className="font-bold text-pink-600">
              {item.details.developer}
            </span>{" "}
            ({item.details.releaseYear})
          </p>
          
          <br />

          {/* Link dengan efek wavy (bergelombang) */}
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
          
          {/* Tags dengan desain gradasi kawaii */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-pink-200 to-pink-300 text-pink-900 px-3 py-1 text-xs font-bold rounded-full border border-pink-300 shadow-sm"
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