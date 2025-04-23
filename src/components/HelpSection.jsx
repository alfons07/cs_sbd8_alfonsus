import React from "react";

const HelpSection = () => {
  const helps = [
    {
      title: "Cara Aktivasi Kartu",
      desc: "Panduan lengkap aktivasi kartu Smartfren dengan cepat dan mudah.",
    },
    {
      title: "Cek Kuota & Masa Aktif",
      desc: "Informasi untuk cek kuota internet dan masa aktif kartu kamu.",
    },
    {
      title: "Hubungi Layanan Pelanggan",
      desc: "Butuh bantuan? Tim Smartfren siap membantu kamu 24/7.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" id="help">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Bantuan & Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helps.map((help, index) => (
            <div
              key={index}
              className="bg-purple-100 p-6 rounded-2xl shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{help.title}</h3>
              <p className="text-gray-700 text-sm">{help.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
