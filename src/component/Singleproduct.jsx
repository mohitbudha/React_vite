import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MdStar } from "react-icons/md";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4"/>
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="mb-2 text-xl">${product.price}</p>
      <p className="mb-2">{product.description}</p>
      <p className="flex items-center"><MdStar className="text-amber-600 mr-1"/> {product.rating.rate}/5</p>
       <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent row click navigation
                    alert(`${product.title} added to cart!`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 mt-2 py-1 rounded-md transition "
                >
                  Add to Cart
                </button>
    </div>
  );
};

export default SingleProduct;
