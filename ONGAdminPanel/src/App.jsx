import ManageBlogs from "./components/ManageBlogs";
import OpenSourceCard from "./components/OpenSourceCard";
import BlogAdminCard from "./components/BlogAdminCard";
import { useState } from "react";


export default function App(){

  const [refresh,setRefresh] = useState(false);


  return(
    <div className="min-h-screen bg-[#0d1117] p-[50px]">

      <div className="flex flex-col gap-10">

        <OpenSourceCard />


        <BlogAdminCard
          onCreated={() => setRefresh(!refresh)}
        />


        <ManageBlogs
          key={refresh}
        />


      </div>

    </div>
  );
}