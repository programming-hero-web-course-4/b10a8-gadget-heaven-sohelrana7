import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Toaster></Toaster>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </div>
      <Heading
        title="Gadget Heaven"
        subtitle="Leading the way in cutting-edge technology and innovation."
      ></Heading>
      <hr className="mb-8 text-gray-200" />
      <Footer></Footer>
    </div>
  );
};

export default Root;
