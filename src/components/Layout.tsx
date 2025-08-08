import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
