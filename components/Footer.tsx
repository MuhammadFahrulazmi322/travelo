import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-0 ">
      <div className="bg-primary-white text-gray-50 px-4 py-10 lg:px-20 lg:py-24 flex flex-col lg:flex-row gap-x-48 gap-y-8 items-start">
        <div className="flex-shrink-0">
          <Image
            src="/icons/Footer-logo.svg"
            alt="logo"
            width={70}
            height={48}
            className="lg:w-[100px] hidden lg:block"
          />
        </div>
        <div className="flex flex-wrap lg:flex-row gap-x-24 gap-y-4 ">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="text-heading-4  font-bold text-black ">Info</h1>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Tentang Kami
            </Link>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Testimonial
            </Link>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Kontak
            </Link>
          </div>

          <div className="flex flex-col gap-y-3 ">
            <h1 className="text-heading-4  font-bold text-black ">
              Perusahaan
            </h1>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Syarat & ketentuan
            </Link>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Blog
            </Link>
            <Link href="#" className="text-heading-6 lg:text-heading-5 ">
              Bantuan pelayanan
            </Link>
          </div>

          <div className="flex flex-col gap-y-3 ">
            <h1 className="text-heading-4  font-bold text-black ">Kontak</h1>
            <p className="text-heading-6 lg:text-heading-5 ">Jl. Dago No.14</p>
            <p className="text-heading-6 lg:text-heading-5 ">
              Bandung, Jawa Barat
            </p>
            <p className="text-heading-6 lg:text-heading-5 ">Indonesia</p>
            <p className="text-heading-6 lg:text-heading-5 ">(022)80808</p>
            <p className="text-heading-6 lg:text-heading-5 ">
              traveloContact@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary-blue text-white flex items-center justify-center py-2">
        <p className="text-sm">Copyright 2020 journey. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
