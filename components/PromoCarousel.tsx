"use client";

import { IconButton } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import "react-multi-carousel/lib/styles.css";

const PromoCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 20,

    },
    desktop: {
      breakpoint: { max: 3000, min: 720 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,

    },
  };

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
      onClick={onClick}
      className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
    >
      <ArrowRight />
    </IconButton>
  );

  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
      onClick={onClick}
      className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
    >
      <ArrowLeft />
    </IconButton>
  );

  return (
    <section className="px-8">
      <h3 className="text-heading-3 font-bold font-roboto pt-14 mb-4 text-white">
        Promo Liburan
      </h3>
      <Carousel
        className="py-5 gap-x-20"
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
        <article className="bg-white shadow-lg rounded-xl overflow-hidden px-8 w-[350px] h-[312px] flex">
          <p className="m-auto">Promo 1</p>
        </article>
        <article className="bg-white shadow-lg rounded-xl overflow-hidden px-4 w-[350px] h-[312px] flex">
          <p className="m-auto">Promo 2</p>
        </article>
        <article className="bg-white shadow-lg rounded-xl overflow-hidden px-4 w-[350px] h-[312px] flex">
          <p className="m-auto">Promo 3</p>
        </article>
        <article className="bg-white shadow-lg rounded-xl overflow-hidden px-4 w-[350px] h-[312px] flex">
          <p className="m-auto">Promo 4</p>
        </article>
        <article className="bg-white shadow-lg rounded-xl overflow-hidden px-4 w-[350px] h-[312px] flex">
          <p className="m-auto">Promo 5</p>
        </article>
      </Carousel>
    </section>
  );
};

export default PromoCarousel;
