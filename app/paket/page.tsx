import AllPaket from "@/components/AllPaket";
import Populer from "@/components/Populer";
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
        <div className="relative -translate-y-[20%] lg:-translate-y-[50%] inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Cari Paket Terbaikmu Disini!
            </h2>
            <div className="flex flex-col lg:flex-row gap-y-4 space-4 gap-x-4">
              <div className="relative">
                <select className="border rounded-lg px-4 py-2 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto" defaultValue={"Semua Kategori"}>
                  <option className="text-gray-700">Gunung</option>
                  <option className="text-gray-700">Pantai</option>
                  <option className="text-gray-700">Semua Kategori</option>
                </select>
              </div>
              <div className="relative">
                <select className="border rounded-lg px-4 py-2 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto" defaultValue={"Rekomendasi"}>
                  <option className="text-gray-700">Asia</option>
                  <option className="text-gray-700">Eropa</option>
                  <option className="text-gray-700">Rekomendasi</option>

                </select>
              </div>
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
