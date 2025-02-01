import { Outlet } from "react-router-dom";
import Navbar from "../partials/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl p-6 md:p-10 space-y-8 mt-16 md:mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
