"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Ubah import dari framer-motion ke react-intersection-observer

interface DataItem {
  value: number;
  label: string;
}

const data: DataItem[] = [
  { value: 30, label: 'Negara' },
  { value: 1500, label: 'Penginapan' },
  { value: 100, label: 'Tempat Wisata' },
  { value: 50000, label: 'Pelanggan' },
];

const Count: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
      }}
      className='flex flex-wrap lg:flex-row items-center justify-center gap-x-5 lg:gap-x-32 gap-y-4 px-8 py-12'>
      {data.map((item, index) => (
        <CountItem key={index} value={item.value} label={item.label} />
      ))}
    </motion.section>
  );
};

interface CountItemProps {
  value: number;
  label: string;
}

const CountItem: React.FC<CountItemProps> = ({ value, label }) => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true }); // Dapatkan ref dan inView langsung dari useInView

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  useEffect(() => {
    if (startCount) {
      const unsubscribe = roundedCount.onChange((latest) => {
        setDisplayCount(latest);
      });

      animate(count, value, { duration: 2 });

      return () => unsubscribe();
    }
  }, [startCount, count, value, roundedCount]);

  return (
    <div ref={ref} className='flex flex-col items-center gap-y-4'>
      <motion.h3 className='text-heading-3 lg:text-heading-2 font-bold '>
        +{displayCount}
      </motion.h3>
      <p className='text-heading-5 lg:text-heading-4 text-gray-70 font-roboto'>{label}</p>
    </div>
  );
};

export default Count;
