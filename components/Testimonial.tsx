"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlinedStar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

interface Testimonial {
  image: string;
  name: string;
  provincy: string;
  state: string;
  testimonial: string;
  starTestimonial: number;
  place : string;
  date : string;
}

const testimonialsData: Testimonial[] = [
  {
    image: "/images/testi1.png",
    name: "Putri Andini",
    provincy: "Jawa Barat",
    state: "Bandung",
    testimonial:
      "Nyari makanan halal gampang banget udah ada tour guidenya. tour guidenya juga ramah enak diajak ngobrol, dan penginapannya pun nyaman.",
    starTestimonial: 5,
    place : "Nusa penida, Bali",
    date : "17-10-2022"
  },
  {
    image: "/images/testi2.png",
    name: "Sinta Ariani",
    provincy: "Jawa Barat",
    state: "Cimahi",
    testimonial:
      "Perjalanannya nyaman banget ditambah dapet penginapan yang bagus tour tudenya juga baik banget dan ramah, ga nyesel pesen paket travel disini",
    starTestimonial: 4,
    place : "Nusa penida, Bali",
    date : "17-10-2022"
  },
  {
    image: "/images/testi3.png",
    name: "Bagas Syahputra",
    provincy: "Jawa Barat",
    state: "Bandung",
    testimonial:
      "Perjalannya asik ga perlu pusing pusing mikirin mau kulineran apa, udah ada tour guidenya. Mau kemana aja juga enak tinggal tanya tour guidenya",
    starTestimonial: 5,
    place : "Nusa penida, Bali",
    date : "17-10-2022"
  },
  {
    image: "/images/testi4.png",
    name: "Arif Hidayat",
    provincy: "Jawa Barat",
    state: "Pandalarang",
    testimonial:
      "Nyari makanan halal gampang banget udah ada tour guidenya. tour guidenya juga ramah enak diajak ngobrol, dan penginapannya pun nyaman.",
    starTestimonial: 5,
    place : "Nusa penida, Bali",
    date : "17-10-2022"
  },
];

const Testimonials: React.FC = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="px-12"
    >
        <div>
            <h1 className="font-bold text-heading-3">Testimoni Pelanggan</h1>
            <p>Pendapat pelanggan tentang kami</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] ">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className=" flex flex-col p-4 lg:p-[50px] gap-y-4  w-[288px]"
          >
            <div className="flex flex-row items-center gap-x-4 justify-between">
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="object-cover mb-3 rounded-full"
                />
                <div className="flex flex-col gap-x-4">
                  <h2 className="text-[18px] font-bold leading-[140%]">
                    {testimonial.name}
                  </h2>
                  <p className=" text-gray-50 text-[14px]">
                    {testimonial.state}, {testimonial.provincy}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={
                    i < testimonial.starTestimonial ? filledStar : outlinedStar
                  }
                  className="text-yellow-500"
                />
              ))}
            </div>
            <p className="font-normal text-[14px] leading-[140%]">
              {testimonial.testimonial}
            </p>
            <p className="font-bold text-[14px] leading-[140%]">{ testimonial.place}</p>
            <p className="font-normal text-[12px] text-gray-50 leading-[140%]">{ testimonial.date}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
