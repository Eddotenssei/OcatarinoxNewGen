import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="m-[50px] px-[50px] py-10 flex flex-col gap-5">
      {/* Page Container */}
      <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">
        {/* Title */}
        <h1
          className="text-5xl font-bold text-center mb-10 pb-2 leading-tight
  bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400
  bg-clip-text text-transparent"
        >
          Blogs
        </h1>

        {/* Blog Cards */}
        <div className="flex flex-col gap-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#0d1117] border border-white/10 rounded-2xl p-6"
            >
              {/* Title */}
              <h2 className="text-3xl font-semibold text-white">
                {blog.title}
              </h2>

              {/* Author */}
              <p className="text-slate-400 text-sm mt-2">By {blog.author}</p>

              {/* Text */}
              <p className="text-slate-300 text-lg leading-8 mt-6">
                {blog.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
