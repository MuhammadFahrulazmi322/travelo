import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPaket from "./CardPaket";

const paket = [
  {
    id: 1,
    title: "Senjoji Temple, Tokyo",
    location: "Japan",
    price: "Rp. 13.680.000",
    description:
      "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi, travel dan snorkeling",
    rating: 4.7,
    reviews: 85,
    image: "/images/senjojitemple.png",
  },
  {
    id: 2,
    title: "Gwanghwamun Gate, Seoul",
    location: "Korea",
    price: "Rp. 11.280.000",
    description:
      "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi, travel dan snorkeling",
    rating: 4.8,
    reviews: 95,
    image: "/images/Seoul.png",
  },
  {
    id: 3,
    title: "Gunung Bromo, Yogyakarta",
    location: "Indonesia",
    price: "Rp.5.480.000",
    description:
      "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi, travel dan snorkeling",
    rating: 4.9,
    reviews: 110,
    image: "/images/gunung.png",
  },
];

const AllPaket = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="text-heading-3 font-bold font-montserrat pt-14 text-white">
          Paket Lainnya
        </h3>
        <p className="text-white font-roboto">
          Cari paket liburan yang kamu inginkan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:flex-row gap-x-8 justify-center ">
        {paket.map((promo) => (
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

export default AllPaket;
