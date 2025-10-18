import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const ProductTable = () => {
  const {theme}= useContext (ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Fetch products
  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Pagination logic
  const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };
  const handlePageClick = (page) => setCurrentPage(page);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-6 overflow-x-auto" >
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
        />
      </div>

      {/* Table */}
      <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden"
       style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff ",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}>
        <thead className="border">
          <tr>
            <th className="px-4 py-3 text-left">S.N</th>
            <th className="px-4 py-3 text-left">Image</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Price ($)</th>
            <th className="px-4 py-3 text-left">Rating</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, i) => (
            <tr
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className={`border-b hover:bg-blue-50 transition cursor-pointer ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
               style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
         }}
            >
              <td className="px-4 py-3">{startIndex + i + 1}</td>
              <td className="px-4 py-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 object-contain"
                />
              </td>
              <td className="px-4 py-3 font-medium ">
                {product.title}
              </td>
              <td className="px-4 py-3  line-clamp-2 max-w-md">
                {product.description}
              </td>
              <td className="px-4 py-3 font-semibold text-blue-600">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-4 py-3 flex items-center gap-1">
                <IoIosStar className="text-yellow-400" />
                {product.rating.rate} ({product.rating.count})
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent row click navigation
                    alert(`${product.title} added to cart!`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700  px-3 py-1 rounded-md transition"
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={handlePrev}
            className={`px-4 py-2 rounded-full border ${
              currentPage === 1
                ? "  cursor-not-allowed"
                : "hover:bg-blue-400  "
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-full border font-medium ${
                  currentPage === page
                    ? "bg-blue-600 "
                    : "hover:bg-blue-400  "
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-full border ${
              currentPage === totalPage
                ? "  cursor-not-allowed"
                : " hover:bg-blue-400 "
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
