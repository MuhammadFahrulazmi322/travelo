import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const promos = [
  {
    id: 1,
    title: "Nusa Penida, Bali",
    location: "Indonesia",
    price: "Rp.680.000",
    description: "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi, travel dan snorkeling",
    rating: 4.7,
    reviews: 85,
    image: "/images/image-card.png"
  },
  {
    id: 2,
    title: "Lombok, NTB",
    location: "Indonesia",
    price: "Rp.750.000",
    description: "Liburan eksotis di Lombok dengan fasilitas lengkap.",
    rating: 4.8,
    reviews: 95,
    image: "/images/image-card.png"
  },
  {
    id: 3,
    title: "Raja Ampat, Papua",
    location: "Indonesia",
    price: "Rp.1.200.000",
    description: "Menikmati keindahan bawah laut Raja Ampat.",
    rating: 4.9,
    reviews: 110,
    image: "/images/image-card.png"
  }
];

const Card = () => {
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
          <article key={promo.id} className=" bg-white rounded-[10px] flex flex-col gap-y-4 shadow-2xl">
            <Image
              src={promo.image}
              alt="card image"
              width={300}
              height={300}
              className="w-full rounded-tr-[10px] rounded-tl-[10px]"
            />
            <div className="flex flex-col gap-y-4 px-8 pt-4 mb-10 font-roboto">
              <div className="flex flex-row gap-x-2">
                <Star className="text-yellow-500" />
                <p>{promo.rating}({promo.reviews} Review)</p>
              </div>
              <h3 className="text-heading-3 text-black font-bold">
                {promo.title}
              </h3>
              <h5 className="text-heading-4 text-gray-70 font-bold">{promo.location}</h5>
              <h3 className="text-heading-3 text-gray-70 font-bold">
                {promo.price}
              </h3>
              <p className="text-gray-70 text-heading-5 font-medium line-clamp-3 overflow-hidden">
                {promo.description}
              </p>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                <Button
                  variant="outlined"
                  className="w-full font-bold text-heading-5"
                >
                  Lihat Detail
                </Button>
                <Button
                  variant="contained"
                  className="w-full font-bold text-heading-5"
                >
                  Pesan
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Card;
