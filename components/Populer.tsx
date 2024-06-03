import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPaket from "./CardPaket";

const promos = [
  {
    id: 1,
    title: "Nusa Penida, Bali",
    location: "Indonesia",
    price: "Rp.680.000",
    description:
      "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi, travel dan snorkeling",
    rating: 4.7,
    reviews: 85,
    image: "/images/image-card.png",
  },
  {
    id: 2,
    title: "Lombok, NTB",
    location: "Indonesia",
    price: "Rp.750.000",
    description: "Liburan eksotis di Lombok dengan fasilitas lengkap.",
    rating: 4.8,
    reviews: 95,
    image: "/images/image-card.png",
  },
  {
    id: 3,
    title: "Raja Ampat, Papua",
    location: "Indonesia",
    price: "Rp.1.200.000",
    description: "Menikmati keindahan bawah laut Raja Ampat.",
    rating: 4.9,
    reviews: 110,
    image: "/images/image-card.png",
  },
];

const Populer = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="text-heading-3 font-bold font-montserrat pt-14 text-white">
          Promo Liburan Populer
        </h3>
        <p className="text-white font-roboto">
          Paket terbaik yang sering dipilih pelanggan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:flex-row gap-x-8 justify-center ">
        {promos.map((promo) => (
          <CardPaket
            key={promo.id}
            id={promo.id}
            title={promo.title}
            location={promo.location}
            price={promo.price}
            description={promo.description}
            rating={promo.rating}
            reviews={promo.reviews}
            image={promo.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Populer;
