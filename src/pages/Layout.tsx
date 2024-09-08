import { Outlet } from "react-router-dom";
import { TopNavbar } from "../components/TopNavbar/TopNavbar";

export const Layout = () => {
  return (
    <>
      <TopNavbar></TopNavbar>

      <Outlet />
    </>
  )
};