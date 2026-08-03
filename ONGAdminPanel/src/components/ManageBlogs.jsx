import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function ManageBlogs() {

  const [blogs, setBlogs] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [image, setImage] = useState(null);


  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    text: "",
  });

  const [newImage, setNewImage] = useState(null);


  const [editData, setEditData] = useState({
    title: "",
    author: "",
    text: "",
    image_url: "",
  });



  const getBlogs = async () => {
    try {

      const response = await fetch(
        "http://localhost:3000/api/blogs"
      );

      const data = await response.json();

      setBlogs(data);

    } catch(error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getBlogs();
  }, []);




  const uploadImage = async (file) => {

    if (!file) return "";


    const extension = file.name.split(".").pop();

    const fileName = `${Date.now()}.${extension}`;


    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);


    if(error) {
      throw error;
    }


    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);


    return data.publicUrl;
  };





  const createBlog = async () => {

    try {

      const imageUrl = await uploadImage(newImage);


      const response = await fetch(
        "http://localhost:3000/api/blogs",
        {
          method: "POST",

          headers:{
            "Content-Type":"application/json",
          },

          body: JSON.stringify({
            ...newBlog,
            image_url:imageUrl,
          }),
        }
      );


      if(!response.ok){
        throw new Error("Failed creating blog");
      }


      setNewBlog({
        title:"",
        author:"",
        text:"",
      });


      setNewImage(null);


      getBlogs();


    } catch(error){
      console.log(error);
    }

  };





  const deleteBlog = async(id)=>{

    await fetch(
      `http://localhost:3000/api/blogs/${id}`,
      {
        method:"DELETE",
      }
    );


    getBlogs();

  };





  const startEdit = (blog)=>{

    setEditingId(blog.id);

    setImage(null);


    setEditData({
      title:blog.title,
      author:blog.author,
      text:blog.text,
      image_url:blog.image_url || "",
    });

  };





  const updateBlog = async(id)=>{

    try{

      let imageUrl = editData.image_url;


      if(image){
        imageUrl = await uploadImage(image);
      }



      const response = await fetch(
        `http://localhost:3000/api/blogs/${id}`,
        {
          method:"PUT",

          headers:{
            "Content-Type":"application/json",
          },

          body:JSON.stringify({
            ...editData,
            image_url:imageUrl,
          }),
        }
      );


      if(!response.ok){
        throw new Error("Failed updating");
      }


      setEditingId(null);

      setImage(null);

      getBlogs();


    }catch(error){

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


<h2 className="
text-4xl
font-bold
mb-8
text-center
text-white
">
Manage Blogs
</h2>



{/* CREATE BLOG */}

<div className="
bg-[#0d1117]
rounded-2xl
p-6
mb-8
">


<h3 className="text-2xl text-white mb-4">
Create Blog
</h3>


<input
placeholder="Title"
value={newBlog.title}
onChange={(e)=>setNewBlog({
...newBlog,
title:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mb-3
"
/>



<input
placeholder="Author"
value={newBlog.author}
onChange={(e)=>setNewBlog({
...newBlog,
author:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mb-3
"
/>



<input
type="file"
accept="image/*"
onChange={(e)=>setNewImage(e.target.files[0])}
/>



<textarea
placeholder="Text"
value={newBlog.text}
onChange={(e)=>setNewBlog({
...newBlog,
text:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mt-3
"
/>



<button
onClick={createBlog}
className="
bg-green-600
text-white
px-5
py-2
rounded-xl
mt-4
"
>
Create
</button>


</div>





{/* BLOG LIST */}


{
blogs.map(blog=>(

<div
key={blog.id}
className="
bg-[#0d1117]
rounded-2xl
p-6
mb-5
"
>


{
editingId===blog.id ? (

<div>


<input
value={editData.title}
onChange={(e)=>setEditData({
...editData,
title:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mb-3
"
/>


<input
value={editData.author}
onChange={(e)=>setEditData({
...editData,
author:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mb-3
"
/>



<input
type="file"
accept="image/*"
onChange={(e)=>setImage(e.target.files[0])}
/>



<textarea
value={editData.text}
onChange={(e)=>setEditData({
...editData,
text:e.target.value
})}
className="
bg-[#161b22]
p-3
rounded-xl
text-white
w-full
mt-3
"
/>



<button
onClick={()=>updateBlog(blog.id)}
className="
bg-green-600
text-white
px-5
py-2
rounded-xl
mt-3
"
>
Save
</button>


<button
onClick={()=>{
setEditingId(null);
setImage(null);
}}
className="
bg-gray-600
text-white
px-5
py-2
rounded-xl
ml-3
"
>
Cancel
</button>


</div>


) : (


<div>


{
blog.image_url &&

<img
src={blog.image_url}
alt={blog.title}
className="
rounded-xl
mb-4
max-h-96
object-cover
"
/>
}



<h3 className="
text-2xl
text-white
">
{blog.title}
</h3>


<p className="text-gray-400">
By {blog.author}
</p>


<p className="
text-gray-300
mt-4
">
{blog.text}
</p>



<button
onClick={()=>startEdit(blog)}
className="
bg-violet-600
text-white
px-5
py-2
rounded-xl
mt-5
"
>
Edit
</button>


<button
onClick={()=>deleteBlog(blog.id)}
className="
bg-red-600
text-white
px-5
py-2
rounded-xl
ml-3
"
>
Delete
</button>


</div>


)

}


</div>

))
}



</div>

  );
}