import axios from "axios";
import React, { useEffect, useState } from "react";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      setPosts(res.data.posts); // ✅ correct access
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((val, i) => (
        <div
          key={i}
          className="max-w-sm bg-white dark:bg-gray-800 border rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold mb-2">{val.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{val.body}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {val.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between text-gray-700 dark:text-gray-400 text-sm">
            <p>👁️ {val.views}</p>
            <p>👍 {val.reactions.likes}</p>
            <p>👎 {val.reactions.dislikes}</p>
            <p>🧑 {val.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
