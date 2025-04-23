import React from "react";

const MySmartfrenSection = () => {
  return (
    <section className="py-16 px-4 bg-purple-50" id="mysmartfren">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">MySmartfren App</h2>
        <p className="text-gray-700 mb-8">
          Kelola semua layanan Smartfren kamu dalam satu aplikasi. Cek kuota, beli paket, cek tagihan, dan banyak lagi!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 shadow-md"
          >
            Download di Play Store
          </a>
          <a
            href="#"
            className="bg-white border border-purple-700 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-100 shadow-sm"
          >
            Download di App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default MySmartfrenSection;
