"use client";

import { IconButton } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";

const PromoCarousel = ({ style }: any) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1143 },
      items: 3,
      partialVisibilityGutter: -90, // this is needed to tell the amount of px that should be visible.
    },
    minidesktop: {
      breakpoint: { max: 1143, min: 1024 },
      items: 2,
      partialVisibilityGutter: -60, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60, // this is needed to tell the amount of px that should be visible.
    },
  };

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
      onClick={onClick}
      className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
    >
      <ArrowRight className="text-primary-blue w-8 h-8" />
    </IconButton>
  );

  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
      onClick={onClick}
      className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
    >
      <ArrowLeft className="text-primary-blue w-8 h-8" />
    </IconButton>
  );

  const cards = [
    {
      id: 1,
      judul: "Borobudur, Yogyakarta",
      lokasi: "Indonesia",
      hargaPromo: 2000000,
      hargaNormal: 3500000,
      deskripsi:
        "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam dan sebagainya",
      keberangkatan: "15 Juni 2024",
      image: "/images/candi.png", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      judul: "Colosseum, Roma",
      lokasi: "Italy",
      hargaPromo: 14130000,
      hargaNormal: 15700000,
      deskripsi:
        "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam dan sebagainya",
      keberangkatan: "27 Nov 2024",
      image: "/images/colloseum.png", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      judul: "Paris, France",
      lokasi: "France",
      hargaPromo: 20250000,
      hargaNormal: 22500000,
      deskripsi:
        "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam dan sebagainya",
      keberangkatan: "15 Juni 2024",
      image: "/images/menara_eifell.png", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 4,
      judul: "Borobudur, Yogyakarta",
      lokasi: "Indonesia",
      hargaPromo: 2000000,
      hargaNormal: 3500000,
      deskripsi:
        "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam dan sebagainya",
      keberangkatan: "15 Juni 2024",
      image: "/images/candi.png", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 5,
      judul: "Borobudur, Yogyakarta",
      lokasi: "Indonesia",
      hargaPromo: 2000000,
      hargaNormal: 3500000,
      deskripsi:
        "Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam dan sebagainya",
      keberangkatan: "15 Juni 2024",
      image: "/images/candi.png", // Ganti dengan path gambar yang sesuai
    },
  ];

  // Fungsi untuk menghitung persentase diskon
  const hitungDiskon = (hargaNormal: number, hargaPromo: number) => {
    const diskon = ((hargaNormal - hargaPromo) / hargaNormal) * 100;
    return diskon.toFixed(0); // Membulatkan hasil ke 2 desimal
  };

  return (
    <section className="px-8">
      <h3
        className={`text-heading-3 font-bold font-montserrat pt-14 mb-4  ${style}`}
      >
        Promo Liburan
      </h3>
      <Carousel
        className="py-5"
        containerClass="carousel-container"
        centerMode={false}
        arrows
        draggable
        swipeable
        partialVisbile
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
      >
        {cards.map((card) => (
          <Link href={`/paket/${card.id}`} key={card.id}>
          <div
            key={card.id}
            className="
              w-[250px] h-[400px] lg:w-[500px] lg:h-[300px]
              flex flex-col lg:flex-row bg-white rounded-xl shadow-xl 
              border border-gray-200 
              cursor-pointer "
          >
            <Image
              src={card.image}
              alt={card.judul}
              width={500}
              height={300}
              className="
                w-full lg:w-[200px] h-[150px] lg:h-full object-cover 
                rounded-t-xl lg:rounded-r-none lg:rounded-l-xl mb-4"
            />
            <div className="flex flex-col p-4 gap-y-4">
              <div className="flex flex-col gap-y-2">
                <h4 className="text-sm lg:text-xl font-montserrat font-bold">
                  {card.judul}
                </h4>
                <p className="text-xs lg:text-base text-gray-700">
                  {card.lokasi}
                </p>
              </div>
              <div className="flex flex-col gap-y-2 lg:mb-2">
                <div className="flex flex-row gap-x-2">
                  <p className="text-sm lg:text-base text-gray-700 line-through">
                    {`Rp ${card.hargaNormal.toLocaleString()}`}
                  </p>
                  <p className="text-sm lg:text-base text-red-500 font-bold">
                    {`${hitungDiskon(card.hargaNormal, card.hargaPromo)}%`}
                  </p>
                </div>
                <p className="text-sm lg:text-base text-gray-800 font-bold">
                  {`Rp ${card.hargaPromo.toLocaleString()}`}
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xs lg:text-sm text-gray-600 line-clamp-2 lg:line-clamp-3 overflow-hidden">
                  {card.deskripsi}
                </p>
                <p className="text-xs lg:text-sm text-gray-500">
                  Berangkat : {card.keberangkatan}
                </p>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default PromoCarousel;
