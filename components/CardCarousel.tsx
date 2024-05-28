import React from "react";

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      judul: "Promo Bali",
      lokasi: "Bali, Indonesia",
      hargaPromo: "Rp 2.000.000",
      hargaNormal: "Rp 3.500.000",
      deskripsi: "Nikmati liburan di Bali dengan harga spesial.",
      keberangkatan: "15 Juni 2024",
      image: "/images/candi.png" // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      judul: "Promo Lombok",
      lokasi: "Lombok, Indonesia",
      hargaPromo: "Rp 1.800.000",
      hargaNormal: "Rp 3.000.000",
      deskripsi: "Liburan tak terlupakan di Lombok.",
      keberangkatan: "20 Juni 2024",
      image: "/images/candi.png" // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      judul: "Promo Yogyakarta",
      lokasi: "Yogyakarta, Indonesia",
      hargaPromo: "Rp 1.500.000",
      hargaNormal: "Rp 2.500.000",
      deskripsi: "Jelajahi budaya dan sejarah Yogyakarta.",
      keberangkatan: "25 Juni 2024",
      image: "/images/candi.png" // Ganti dengan path gambar yang sesuai
    },
    {
      id: 4,
      judul: "Promo Bandung",
      lokasi: "Bandung, Indonesia",
      hargaPromo: "Rp 1.200.000",
      hargaNormal: "Rp 2.200.000",
      deskripsi: "Nikmati udara sejuk dan kuliner khas Bandung.",
      keberangkatan: "30 Juni 2024",
      image: "/images/candi.png" // Ganti dengan path gambar yang sesuai
    },
    {
      id: 5,
      judul: "Promo Surabaya",
      lokasi: "Surabaya, Indonesia",
      hargaPromo: "Rp 1.000.000",
      hargaNormal: "Rp 1.800.000",
      deskripsi: "Temukan pesona kota Pahlawan di Surabaya.",
      keberangkatan: "5 Juli 2024",
      image: "/images/candi.png" // Ganti dengan path gambar yang sesuai
    }
  ];

  return (
    <div className="flex flex-row w-full">
    {cards.map((card) => (
        <div key={card.id} className="p-4 w-[500px] bg-white rounded-lg shadow-lg">
          <img src={card.image} alt={card.judul} className="w-full h-32 object-cover rounded-md mb-2" />
          <h4 className="text-lg font-bold mb-2">{card.judul}</h4>
          <p className="text-sm text-gray-600">Lokasi: {card.lokasi}</p>
          <p className="text-sm text-gray-600">Harga Promo: {card.hargaPromo}</p>
          <p className="text-sm text-gray-600 line-through">Harga Normal: {card.hargaNormal}</p>
          <p className="text-sm text-gray-600">Deskripsi: {card.deskripsi}</p>
          <p className="text-sm text-gray-600">Keberangkatan: {card.keberangkatan}</p>
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
