import AllPaket from "@/components/AllPaket";
import Populer from "@/components/Populer";
import Card from "@/components/Populer";
import PromoCarousel from "@/components/PromoCarousel";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Paket = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/Gunung-bg-paket.png"
          width={1920}
          height={600}
          alt="Hero Image"
          className="w-full h-72 object-cover"
        />
        <div className="relative -translate-y-[50%] inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Cari Paket Terbaikmu Disini!
            </h2>
            <div className="flex space-x-4">
              <select className="border rounded px-4 py-2">
                <option>Semua Kategori</option>
              </select>
              <select className="border rounded px-4 py-2">
                <option>Lokasi Terdekat</option>
              </select>
              <Button variant="contained" className="font-montserrat">
                Cari Paket
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PromoCarousel style={"text-black"} />
      <div className="bg-card-section-paket bg-no-repeat bg-top h-full py-8 mt-20">
        <Populer />
        {/* Paket liburan  lainnya */}
        <AllPaket />
      </div>
    </div>
  );
};

export default Paket;
