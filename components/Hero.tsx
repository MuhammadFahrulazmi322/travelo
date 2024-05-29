"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row items-center"
    >
      <div className="flex flex-col items-start px-8 lg:px-20  gap-y-6 order-2 lg:order-1">
        <h1 className="text-heading-3 xl:text-heading-2 font-bold">
          Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
        </h1>
        <p className="text-heading-5 xl:text-heading-4 leading-8 font-roboto text-gray-70">
          Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di
          Journey kamu akan dapatkan pelayanan terbaik untuk wisata liburanmu
          kemana saja dan kapan saja
        </p>

        <Button variant="contained" color="primary" className="mt-3 font-montserrat capitalize">
          Lihat Paket
        </Button>
      </div>
      <Image
        src="/images/Header Image.svg"
        alt="hero"
        width={600}
        height={600}
        className="order-1 lg:order-2 xl:w-[700px] xl:h-[700px]"
      />
    </motion.section>
  );
};

export default Hero;
