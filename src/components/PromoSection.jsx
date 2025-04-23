import React from "react";

const PromoSection = () => {
  const promos = [
    {
      title: "Bonus Kuota 10GB",
      desc: "Dapatkan bonus kuota untuk setiap pembelian paket 30GB.",
    },
    {
      title: "Harga Spesial Akhir Pekan",
      desc: "Nikmati diskon hingga 50% untuk paket tertentu setiap Sabtu dan Minggu.",
    },
    {
      title: "Voucher Cashback",
      desc: "Dapatkan voucher cashback senilai Rp 5.000 untuk setiap transaksi di atas Rp 25.000.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-purple-50" id="promo">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Promo Spesial Untukmu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-purple-100"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{promo.title}</h3>
              <p className="text-gray-700 text-sm">{promo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
