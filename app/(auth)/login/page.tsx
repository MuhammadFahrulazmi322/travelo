
"use client";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <motion.main
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row lg:pt-[4rem] xl:pt-[2rem] gap-y-8"

    >
        <div className="lg:w-[60%]">
          {/* Gambar untuk mobile */}
          <Image
            src="/images/image_login_mobile.svg"
            alt="hero"
            width={600}
            height={600}
            className="block lg:hidden h-[300px] object-cover object-top"
          />
          {/* Gambar untuk desktop */}
          <Image
            src="/images/image_login.svg"
            alt="hero"
            width={600}
            height={600}
            className="hidden lg:block xl:w-auto xl:h-[700px] object-cover"
          />
        </div>

        <div className="flex flex-col lg:items-start justify-center px-8 gap-y-12 pt-30 pb-20 lg:pb-0">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-heading-3 font-bold">Masuk</h1>
                <p className="text-heading-5 font-montserrat text-gray-50">
                    Belum punya akun? <Link href="/register" className="text-normal text-blue-100">Daftar Sini</Link>
                </p>
            </div>

            <form className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-3">
                    <label className="text-heading-6 font-bold font-montserrat">Email</label>
                    <input
                    type="text"
                    placeholder="Masukkan alamat email"
                    className="border-2 border-gray-70 rounded-md py-2 px-4 lg:w-[393px]"
                    />
                </div>
                <div className="flex flex-col gap-y-3">
                    <label className="text-heading-6 font-bold font-montserrat">Password</label>
                    <input
                    type="password"
                    placeholder="Masukkan kata sandi"
                    className="border-2 border-gray-70 rounded-md py-2 px-4 lg:w-[393px]"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                <p className="text-heading-5 font-roboto text-blue-100">Lupa kata sandi?</p>
                
                <Button variant="contained" className="mt-3 font-montserrat capitalize bg-primary-blue font-bold">
                    Masuk
                </Button>
                </div>
            </form>
            <div className="flex flex-col gap-y-4 w-full">
                <p className="text-heading-5 font-roboto">Atau masuk dengan</p>
                <Button variant="contained" className="font-montserrat capitalize rounded-full bg-white text-black font-bold gap-x-2 py-2">
                    {/* Icon Google */}
                    <Image src="/icons/Google.svg" alt="google" width={20} height={20} />
                    Masuk dengan Google
                </Button>
                <Button variant="contained" className="font-montserrat capitalize rounded-full bg-[#4267B2] text-white font-bold gap-x-2 py-2">
                    {/* Icon Facebook */}
                    <Image src="/icons/fb.svg" alt="facebook" width={20} height={20} />
                    Masuk dengan Facebook
                </Button>
            </div>
        </div>
    </motion.main>
  )
}

export default Login