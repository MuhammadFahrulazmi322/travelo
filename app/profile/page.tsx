"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const { data }: any = useSession();
  const [activeTab, setActiveTab] = useState('Riwayat Perjalanan');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="relative">
        <Image
          src="/images/bg-profile.png"
          width={1920}
          height={600}
          alt="Hero Image"
          className="w-full h-72 object-cover"
        />
        <div className="relative inset-0 flex flex-col items-center transform -translate-y-20">
          <div className="container mx-auto px-4 py-8 text-center">
            {data && data.user.image && data.user.fullname && (
              <>
                <Image
                  src={data.user.image}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="mx-auto h-24 w-24 rounded-full border-4 border-white shadow-lg"
                />
                <h2 className="text-lg lg:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-4">
                  {data.user.fullname}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Bandung, Jawa Barat
                </p>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                  Saya sangat senang sekali traveling ke berbagai tempat apalagi
                  dengan tempat seperti pantai
                </p>
              </>
            )}
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Edit Profile
              </button>
              <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                Share
              </button>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-4">
            <div className="flex justify-center space-x-8 border-b">
              <button
                className={`py-2 px-4 ${
                  activeTab === 'Riwayat Perjalanan'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
                onClick={() => handleTabClick('Riwayat Perjalanan')}
              >
                Riwayat Perjalanan
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === 'Favorit'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
                onClick={() => handleTabClick('Favorit')}
              >
                Favorit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === 'Riwayat Perjalanan' && (
          <>
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x200"
                alt="Raja Ampat"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐ 4.7 (85 Review)</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                  Raja Ampat, West Papua
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">Indonesia</p>
                <div className="mt-4 flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Lihat Detail
                </button>
                <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                  Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://placehold.co/400x200"
              alt="Nusa Penida"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐ 4.7 (85 Review)</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                Nusa Penida, Bali
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">Indonesia</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Lihat Detail
                </button>
                <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                  Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://placehold.co/400x200"
              alt="Nusa Penida"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐ 4.7 (85 Review)</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                Nusa Penida, Bali
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">Indonesia</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Lihat Detail
                </button>
                <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                  Pesan
                </button>
              </div>
            </div>
          </div>
          </>
        )}

        {activeTab === 'Favorit' && (
          <>
            {/* Dummy favorite card 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x200"
                alt="Favorit 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐ 4.7 (85 Review)</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                  Favorit Destination 1
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">Location</p>
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Lihat Detail
                  </button>
                  <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                    Pesan
                  </button>
                </div>
              </div>
            </div>

            {/* Dummy favorite card 2 */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x200"
                alt="Favorit 
                Destination 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐ 4.7 (85 Review)</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                  Favorit Destination 2
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">Location</p>
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Lihat Detail
                  </button>
                  <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 px-4 py-2 rounded-lg">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
  
            {/* More favorite cards as needed */}
            </>
          )}
        </div>
      </section>
    );
  };
  
  export default Page;
  