import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
}
const CardPaket = ({
  id,
  title,
  location,
  price,
  description,
  rating,
  reviews,
  image,
}: Props) => {
  return (
    <article
      key={id}
      className=" bg-white rounded-[10px] flex flex-col gap-y-4 shadow-2xl"
    >
      <Image
        src={image}
        alt="card image"
        width={300}
        height={300}
        className="w-full rounded-tr-[10px] rounded-tl-[10px]"
      />
      <div className="flex flex-col gap-y-4 px-8 pt-4 mb-10 font-roboto">
        <div className="flex flex-row gap-x-2">
          <Star className="text-yellow-500" />
          <p>
            {rating}({reviews} Review)
          </p>
        </div>
        <h3 className="text-heading-3 text-black font-bold">{title}</h3>
        <h5 className="text-heading-4 text-gray-70 font-bold">{location}</h5>
        <h3 className="text-heading-3 text-gray-70 font-bold">{price}</h3>
        <p className="text-gray-70 text-heading-5 font-medium line-clamp-3 overflow-hidden">
          {description}
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
  );
};

export default CardPaket;
