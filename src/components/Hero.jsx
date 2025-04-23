import React from "react";

const Hero = () => {
  return (
    <section className="h-[85vh] bg-gradient-to-br from-white via-purple-100 to-purple-200 flex items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 animate-fade-in">
          Selamat datang di Smartfren
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Temukan paket terbaik, promo menarik, bantuan lengkap, dan fitur MySmartfren di satu tempat!
        </p>
        <a
          href="#paket"
          className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Jelajahi Sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;
