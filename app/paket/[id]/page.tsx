import React from "react";

const DetailPaket = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto p-4">
        <nav className="text-sm text-zinc-500 mb-4">
          <a href="#" className="hover:underline">
            Beranda
          </a>{" "}
          /
          <a href="#" className="hover:underline">
            Paket
          </a>{" "}
          /
          <a href="#" className="hover:underline">
            Indonesia
          </a>{" "}
          /
          <a href="#" className="hover:underline">
            Bali
          </a>{" "}
          /
          <a href="#" className="text-blue-500 hover:underline">
            Nusa Penida
          </a>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://placehold.co/1200x800"
            alt="Main Image"
            className="rounded-lg w-full"
          />
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://placehold.co/600x400"
              alt="Image 1"
              className="rounded-lg w-full"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Image 2"
              className="rounded-lg w-full"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Image 3"
              className="rounded-lg w-full"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Image 4"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Nusa Penida, Bali</h1>
          <p className="text-zinc-600">Indonesia</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-500">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.381-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
            <span className="ml-1 text-zinc-700">4.7</span>
          </div>
          <span className="ml-1 text-zinc-500">(1.527 Review)</span>
          <div className="ml-auto flex space-x-4">
            <button className="flex items-center text-zinc-500 hover:text-zinc-700">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M15 8a3 3 0 00-3-3H8a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003-3V8z" />
                <path d="M10 12a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              <span className="ml-1">Bagikan</span>
            </button>
            <button className="flex items-center text-zinc-500 hover:text-zinc-700">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className="ml-1">Simpan</span>
            </button>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-2">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-zinc-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a1 1 0 00-1 1v1H7a1 1 0 00-1 1v1H5a1 1 0 00-1 1v2H3a1 1 0 00-1 1v2a1 1 0 001 1h1v2a1 1 0 001 1h1v1a1 1 0 001 1h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h2a1 1 0 001-1v-1h1a1 1 0 001-1v-2h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1V8a1 1 0 00-1-1h-1V6a1 1 0 00-1-1h-1V4a1 1 0 00-1-1h-2V2a1 1 0 00-1-1H10z" />
            </svg>
            <div>
              <h3 className="font-bold">Pesawat</h3>
              <p>
                Perjalanan penerbangan akan dilakukan dengan menaiki{" "}
                <strong>Pesawat Air</strong>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-zinc-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm0-1h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
              <path d="M10 7a1 1 0 00-1 1v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V8a1 1 0 00-1-1z" />
            </svg>
            <div>
              <h3 className="font-bold">Mobil Travel</h3>
              <p>
                Perjalanan darat menggunakan mobil <strong>travelku</strong>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-zinc-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a1 1 0 00-1 1v1H7a1 1 0 00-1 1v1H5a1 1 0 00-1 1v2H3a1 1 0 00-1 1v2a1 1 0 001 1h1v2a1 1 0 001 1h1v1a1 1 0 001 1h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h2a1 1 0 001-1v-1h1a1 1 0 001-1v-2h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1V8a1 1 0 00-1-1h-1V6a1 1 0 00-1-1h-1V4a1 1 0 00-1-1h-2V2a1 1 0 00-1-1H10z" />
            </svg>
            <div>
              <h3 className="font-bold">Penginapan</h3>
              <p>
                Penginapan di tempat{" "}
                <strong>Andika Hotel 3 Hari 2 Malam</strong>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-zinc-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a1 1 0 00-1 1v1H7a1 1 0 00-1 1v1H5a1 1 0 00-1 1v2H3a1 1 0 00-1 1v2a1 1 0 001 1h1v2a1 1 0 001 1h1v1a1 1 0 001 1h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h2a1 1 0 001-1v-1h1a1 1 0 001-1v-2h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1V8a1 1 0 00-1-1h-1V6a1 1 0 00-1-1h-1V4a1 1 0 00-1-1h-2V2a1 1 0 00-1-1H10z" />
            </svg>
            <div>
              <h3 className="font-bold">Info Tambahan</h3>
              <p>
                Tour guide
                <br />
                Makan siang dan malam
                <br />
                Tiket masuk hiburan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPaket;
