import { useState } from "react";

export default function CreateBlog({ onCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    text: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.message);
      }


      setMessage("Blog created successfully!");

      setFormData({
        title: "",
        author: "",
        text: "",
      });


      onCreated();

    } catch(error) {
      setMessage(error.message);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-[#161b22] border border-white/10 rounded-3xl p-8">

      <h2 className="
      text-3xl font-bold mb-6
      bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400
      bg-clip-text text-transparent
      ">
        Create Blog
      </h2>


      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog title"
          className="bg-[#0d1117] border border-white/10 rounded-xl p-4 text-white"
        />


        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="bg-[#0d1117] border border-white/10 rounded-xl p-4 text-white"
        />


        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Blog content"
          rows="6"
          className="bg-[#0d1117] border border-white/10 rounded-xl p-4 text-white"
        />


        <button
          disabled={loading}
          className="
          bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500
          rounded-xl py-3 text-white font-semibold
          "
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>

      </form>


      {message && (
        <p className="text-slate-300 mt-5">
          {message}
        </p>
      )}

    </div>
  );
}