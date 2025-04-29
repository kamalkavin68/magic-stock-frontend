import SampleChart from "../charts/SampleChart";
import { Outlet } from "react-router";
import BreadCrumb from "../ui/BreadCrumb";

export default function AppMainArea() {
  return (
    <>
      <main className="flex-1 p-3 overflow-y-auto scrollbar-thin">
        <BreadCrumb></BreadCrumb>
        <Outlet />
      </main>
    </>
  );
}
