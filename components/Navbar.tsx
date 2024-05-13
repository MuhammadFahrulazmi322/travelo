"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomizedInputBase from "./SearchInput";
import { Button } from "@mui/material";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = ["Beranda", "Kontak", "Paket", "Testimonial"];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 lg:px-12 md:py-4 w-full">
      <nav className="flex items-center gap-6 justify-between">
        <Image
          src="/icons/travelo.svg"
          alt="Travelo"
          width={100}
          height={148}
        />
        <CustomizedInputBase />
        <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden text-gray-70 ">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={
                  item === "Beranda"
                    ? "/"
                    : `/${item.replace(/\s+/g, "").toLowerCase()}`
                }
                className={`text-sm 2xl-text-base capitalize font-bold ${
                  activeSection === item.replace(/\s+/g, "").toLowerCase()
                    ? "text-black"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(item.replace(/\s+/g, "").toLowerCase())
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:block hidden">
          <Button
            variant="contained"
            className="bg-primary text-white font-bold"
          >
            Masuk
          </Button>
        </div>
        <div className="lg:hidden md:block ">
          <Image
            src="/icons/iconHumburger.svg"
            alt="ic_humburger"
            width={24}
            height={24}
            onClick={handleToggleMobileMenu}
            className="cursor-pointer pt-4"
          />
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 z-20"
          onClick={handleToggleMobileMenu}
        >
          <div className="flex items-center justify-center ">
            <ul
              id="mobileMenu"
              className=" mt-12 md:mt-20 w-[80%] bg-primary-blue px-4 py-4 flex flex-col gap-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col gap-6 border-b-2 border-gray py-4 px-4 items-center text-white ">
                {links.concat(["Masuk"]).map((item, index) => (
                  <li key={index}>
                    <Link
                      href={
                        item === "Beranda"
                          ? "/"
                          : `/${item.replace(/\s+/g, "").toLowerCase()}`
                      }
                      className={`text-sm 2xl-text-base capitalize font-bold ${
                        activeSection === item.replace(/\s+/g, "").toLowerCase()
                          ? "text-black"
                          : ""
                      }`}
                      onClick={() =>
                        setActiveSection(item.replace(/\s+/g, "").toLowerCase())
                      }
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
