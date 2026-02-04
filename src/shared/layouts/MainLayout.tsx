import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* React Router injects the child page here */}
        <Outlet /> 
      </main>
    </div>
  );
}