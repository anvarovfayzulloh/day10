"use client";
import { useEffect, useState } from "react";
import { fetchDetailProducts } from "@/utils";
import { useParams } from "next/navigation";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchDetailProducts(id);
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {product ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-4">Цена: <span className="font-bold">${product.price}</span></p>
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Добавить в корзину
          </button>
        </div>
      ) : (
        <p className="text-center text-lg">No product found</p>
      )}
    </div>
  );
};

export default Details;
