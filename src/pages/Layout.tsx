import { Outlet } from "react-router-dom";
import { TopNavBar } from "../components/top-nav-bar/TopNavBar";

export const Layout = () => {
  return (
    <>
      <TopNavBar></TopNavBar>

      <Outlet />
    </>
  )
};