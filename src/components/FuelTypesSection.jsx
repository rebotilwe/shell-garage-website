export default function FuelTypesSection() {
  const fuels = [
    {
      name: "Shell V-Power",
      desc: "Premium performance fuel designed for maximum efficiency and engine protection.",
    },
    {
      name: "FuelSave 93",
      desc: "High-quality unleaded fuel for everyday driving and reliability.",
    },
    {
      name: "FuelSave 95",
      desc: "Enhanced fuel efficiency with improved engine performance.",
    },
    {
      name: "Diesel",
      desc: "Clean and efficient diesel for all diesel-powered vehicles.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#DD1D21] text-xs font-bold tracking-[3px] uppercase">
            Fuel Options
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mt-3">
            Quality Fuel You Can Trust
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a full range of Shell fuels to keep your vehicle running
            smoothly and efficiently.
          </p>
        </div>

        {/* Fuel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fuels.map((fuel, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3 text-[#FBCE07]">
                {fuel.name}
              </h3>
              <p className="text-white/60 text-sm">{fuel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}