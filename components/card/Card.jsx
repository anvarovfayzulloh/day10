"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Card = ({ product }) => {
  return (
    <Link href={`/details/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs hover:scale-105 transition-transform duration-300 m-4 w-[300px]">
      <Image 
        src={product.image} 
        alt={product.title}
        width={332} 
        height={192} 
        className="h-48 object-contain" 
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600">Цена: ${product.price}</p>
      </div>
    </Link>
  );
};

export default Card;
