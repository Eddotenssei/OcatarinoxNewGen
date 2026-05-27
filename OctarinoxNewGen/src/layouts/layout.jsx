import { Outlet } from "react-router";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";



export default function Layout() {
  

  return (
    <>
    <Navbar />
      <main>
        <Outlet />
      </main>
    <Footer />
    
    </>
  );
}