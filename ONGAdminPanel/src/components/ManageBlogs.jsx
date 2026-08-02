import { useEffect, useState } from "react";

export default function ManageBlogs() {

  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    author: "",
    text: "",
  });


  const getBlogs = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/blogs"
      );

      const data = await response.json();

      setBlogs(data);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getBlogs();
  }, []);



  const deleteBlog = async (id) => {

    await fetch(
      `http://localhost:3000/api/blogs/${id}`,
      {
        method: "DELETE",
      }
    );

    getBlogs();
  };



  const startEdit = (blog) => {

    setEditingId(blog.id);

    setEditData({
      title: blog.title,
      author: blog.author,
      text: blog.text,
    });

  };



  const handleChange = (e) => {

    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });

  };



  const updateBlog = async (id) => {

    try {

      const response = await fetch(
        `http://localhost:3000/api/blogs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editData),
        }
      );


      if (!response.ok) {
        throw new Error("Failed to update blog");
      }


      setEditingId(null);

      getBlogs();


    } catch(error) {

      console.log(error);

    }

  };



  return (

    <div className="
      bg-[#161b22]
      border border-white/10
      rounded-3xl
      p-10
    ">


      <h2
        className="
        text-4xl
        font-bold
        mb-8
        text-center
        bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400
        bg-clip-text
        text-transparent
        "
      >
        Manage Blogs
      </h2>



      <div className="flex flex-col gap-5">


        {blogs.map((blog) => (

          <div
            key={blog.id}
            className="
            bg-[#0d1117]
            border border-white/10
            rounded-2xl
            p-6
            "
          >


            {editingId === blog.id ? (

              <div className="flex flex-col gap-4">


                <input
                  name="title"
                  value={editData.title}
                  onChange={handleChange}
                  className="
                  bg-[#161b22]
                  border border-white/10
                  rounded-xl
                  p-3
                  text-white
                  "
                />


                <input
                  name="author"
                  value={editData.author}
                  onChange={handleChange}
                  className="
                  bg-[#161b22]
                  border border-white/10
                  rounded-xl
                  p-3
                  text-white
                  "
                />


                <textarea
                  name="text"
                  value={editData.text}
                  onChange={handleChange}
                  rows="5"
                  className="
                  bg-[#161b22]
                  border border-white/10
                  rounded-xl
                  p-3
                  text-white
                  resize-none
                  "
                />



                <div className="flex gap-4">


                  <button
                    onClick={() => updateBlog(blog.id)}
                    className="
                    bg-green-600
                    px-5
                    py-2
                    rounded-xl
                    text-white
                    "
                  >
                    Save
                  </button>


                  <button
                    onClick={() => setEditingId(null)}
                    className="
                    bg-slate-600
                    px-5
                    py-2
                    rounded-xl
                    text-white
                    "
                  >
                    Cancel
                  </button>


                </div>


              </div>


            ) : (


              <>


                <h3 className="
                  text-2xl
                  font-semibold
                  text-white
                ">
                  {blog.title}
                </h3>


                <p className="
                  text-slate-400
                  mt-1
                ">
                  By {blog.author}
                </p>


                <p className="
                  text-slate-300
                  mt-5
                  leading-7
                ">
                  {blog.text}
                </p>



                <div className="flex gap-4 mt-6">


                  <button
                    onClick={() => startEdit(blog)}
                    className="
                    bg-violet-600
                    px-5
                    py-2
                    rounded-xl
                    text-white
                    "
                  >
                    Edit
                  </button>



                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="
                    bg-red-600
                    px-5
                    py-2
                    rounded-xl
                    text-white
                    "
                  >
                    Delete
                  </button>


                </div>


              </>

            )}


          </div>

        ))}


      </div>


    </div>

  );
}