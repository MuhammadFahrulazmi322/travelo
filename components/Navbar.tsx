"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomizedInputBase from "./SearchInput";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

function Nav() {
  const { data }: any = useSession();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Kontak",
      link: "/kontak",
    },
    {
      name: "Paket",
      link: "/paket",
    },
    {
      name: "Testimonial",
      link: "#testimonial",
    },
  ];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(link);
    }
  };

  return (
    <header className="px-4 lg:px-12 md:py-4 fixed z-20 bg-white w-full max-w-[1440px] m-0">
      <nav className="flex items-center gap-6 justify-between">
        <Link href="/">
          <Image
            src="/icons/Journey.svg"
            alt="Journey"
            width={120}
            height={148}
          />
        </Link>
        <CustomizedInputBase />
        <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden text-gray-70 ">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`text-sm 2xl-text-base capitalize font-bold ${
                  activeSection === item.link ? "text-black" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.link);
                  handleLinkClick(item.link);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* When user login */}
        {data && data.user.image && (
          <Image
            width={32}
            height={32}
            src={data.user.image}
            alt={data.user.fullname}
            className="rounded-full cursor-pointer"
            onClick={() => router.push("/profile")}
          />
        )}
        <div className="lg:flex hidden flex-row items-center gap-6">
          {data ? (
            <Button
              variant="contained"
              className="bg-primary text-heading-5 capitalize font-montserrat text-white font-bold"
              onClick={() => signOut()}
            >
              Keluar
            </Button>
          ) : (
            <Button
              variant="contained"
              className="bg-primary text-heading-5 capitalize font-montserrat text-white font-bold"
              onClick={() => {
                setActiveSection("");
                router.push("/auth/login");
              }}
            >
              Masuk
            </Button>
          )}
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
                {links
                  .concat([
                    {
                      name: "Masuk",
                      link: "/auth/login",
                    },
                  ])
                  .map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.name === "Beranda" ? "/" : `${item.link}`}
                        className={`text-sm 2xl-text-base capitalize font-bold ${
                          activeSection === item.link ? "text-black" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(item.link);
                          handleLinkClick(item.link);
                        }}
                      >
                        {item.name}
                      </a>
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
