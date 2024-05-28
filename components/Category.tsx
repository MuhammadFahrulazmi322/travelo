import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories = [
  {
    name: 'Gunung',
    image: '/images/gunung.png',
    href: '/category/gunung'
  },
  {
    name: 'Pantai',
    image: '/images/pantai.png',
    href: '/category/pantai'
  },
  {
    name: 'Tebing',
    image: '/images/tebing.png',
    href: '/category/tebing'
  },
  {
    name: 'Asia',
    image: '/images/asia_temple.png',
    href: '/category/asia'
  },
  {
    name: 'Eropa',
    image: '/images/menara_eifell.png',
    href: '/category/eropa'
  },
  {
    name: 'Sejarah',
    image: '/images/colloseum.png',
    href: '/category/sejarah'
  },
];

const Category = () => {
  return (
    <section className='px-8 flex flex-col gap-y-8'>
      <h1 className='font-bold text-heading-3'>Kategori Tempat</h1>
      <div className='flex flex-row flex-wrap gap-8 justify-center items-center py-8'>
        {categories.map((category, index) => (
          <Link href={category.href} key={index} className='flex flex-col items-center gap-y-2'>
            <Image src={category.image} alt={category.name} width={200} height={200} className='rounded-xl object-cover w-44 h-32'/>
            <h1 className='text-heading-4 font-bold'>{category.name}</h1>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Category
