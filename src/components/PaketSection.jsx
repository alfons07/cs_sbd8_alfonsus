import React from "react";

const PaketSection = () => {
  const paketList = [
    { name: "Internet 30GB", price: "Rp 20.000", benefit: "Masa aktif 30 hari" },
    { name: "Internet 15GB", price: "Rp 10.000", benefit: "Masa aktif 15 hari" },
    { name: "Unlimited Harian", price: "Rp 5.000", benefit: "FUP 1GB per hari" },
  ];

  return (
    <section className="py-16 px-4 bg-white" id="paket">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Pilih Paket Internet Kamu</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {paketList.map((paket, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{paket.name}</h3>
              <p className="text-lg font-bold text-gray-900">{paket.price}</p>
              <p className="text-sm text-gray-600 mt-1">{paket.benefit}</p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaketSection;
