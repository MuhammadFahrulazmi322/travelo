import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-y-2 mb-8">
        <h3 className="text-heading-3 font-bold font-montserrat pt-14 text-white">
          Promo Liburan Populer
        </h3>
        <p className="text-white font-roboto">
          Paket terbaik yang sering dipilih pelanggan
        </p>
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row gap-x-8">
        <article className="w-[393px] h-auto bg-white rounded-[10px] flex flex-col gap-y-4 shadow-2xl">
          <Image
            src="/images/image-card.png"
            alt="card image"
            width={300}
            height={300}
            className="w-full rounded-tr-[10px] rounded-tl-[10px]"
          />
          <div className="flex flex-col gap-y-4 px-8 pt-4 mb-10 font-roboto">
            <div className="flex flex-row gap-x-2">
              <Star className="text-yellow-500" />
              <p>4.7(85 Review)</p>
            </div>
            <h3 className="text-heading-3 text-black font-bold">
              Nusa Penida, Bali
            </h3>
            <h5 className="text-heading-4 text-gray-70 font-bold">Indonesia</h5>
            <h3 className="text-heading-3 text-gray-70 font-bold">
              Rp.680.000
            </h3>
            <p className="text-gray-70 text-heading-5 font-medium">
              Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide,
              makan siang, makan malam, transportasi, travel dan snorkeling
            </p>

            <div className="flex flex-row gap-x-4 items-center justify-center">
              <Button
                variant="outlined"
                className="w-full font-bold text-heading-5"
              >
                Lihat Detail{" "}
              </Button>
              <Button
                variant="contained"
                className="w-full font-bold text-heading-5"
              >
                Pesan{" "}
              </Button>
            </div>
          </div>
        </article>
        <article className="w-[393px] h-auto bg-white rounded-[10px] flex flex-col gap-y-4 shadow-2xl">
          <Image
            src="/images/image-card.png"
            alt="card image"
            width={300}
            height={300}
            className="w-full rounded-tr-[10px] rounded-tl-[10px]"
          />
          <div className="flex flex-col gap-y-4 px-8 pt-4 mb-10 font-roboto">
            <div className="flex flex-row gap-x-2">
              <Star className="text-yellow-500" />
              <p>4.7(85 Review)</p>
            </div>
            <h3 className="text-heading-3 text-black font-bold">
              Nusa Penida, Bali
            </h3>
            <h5 className="text-heading-4 text-gray-70 font-bold">Indonesia</h5>
            <h3 className="text-heading-3 text-gray-70 font-bold">
              Rp.680.000
            </h3>
            <p className="text-gray-70 text-heading-5 font-medium">
              Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide,
              makan siang, makan malam, transportasi, travel dan snorkeling
            </p>

            <div className="flex flex-row gap-x-4 items-center justify-center">
              <Button
                variant="outlined"
                className="w-full font-bold text-heading-5"
              >
                Lihat Detail{" "}
              </Button>
              <Button
                variant="contained"
                className="w-full font-bold text-heading-5"
              >
                Pesan{" "}
              </Button>
            </div>
          </div>
        </article>
        <article className="w-[393px] h-auto bg-white rounded-[10px] flex flex-col gap-y-4 shadow-2xl">
          <Image
            src="/images/image-card.png"
            alt="card image"
            width={300}
            height={300}
            className="w-full rounded-tr-[10px] rounded-tl-[10px]"
          />
          <div className="flex flex-col gap-y-4 px-8 pt-4 mb-10 font-roboto">
            <div className="flex flex-row gap-x-2">
              <Star className="text-yellow-500" />
              <p>4.7(85 Review)</p>
            </div>
            <h3 className="text-heading-3 text-black font-bold">
              Nusa Penida, Bali
            </h3>
            <h5 className="text-heading-4 text-gray-70 font-bold">Indonesia</h5>
            <h3 className="text-heading-3 text-gray-70 font-bold">
              Rp.680.000
            </h3>
            <p className="text-gray-70 text-heading-5 font-medium">
              Untuk 2 Orang, tiket pesawat, penginapan 5 malam, tour guide,
              makan siang, makan malam, transportasi, travel dan snorkeling
            </p>

            <div className="flex flex-row gap-x-4 items-center justify-center">
              <Button
                variant="outlined"
                className="w-full font-bold text-heading-5"
              >
                Lihat Detail{" "}
              </Button>
              <Button
                variant="contained"
                className="w-full font-bold text-heading-5"
              >
                Pesan{" "}
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
