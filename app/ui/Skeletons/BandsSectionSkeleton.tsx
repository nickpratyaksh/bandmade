import { useContext } from "react";
import { Context } from "@/app/Context";

export default function BandSectionSkeleton() {
  let { current_theme } = useContext(Context);

  return (
    <>
      <div
        className={`w-24 m-0 h-lvh
              flex flex-col ${current_theme.secondary_dark} ${current_theme.text} shadow-lg`}
      >
        <div className="sidebar-icon bg-gray-500"></div>
        <div className="sidebar-icon bg-gray-500"></div>
        <div className="sidebar-icon bg-gray-500"></div>
        <div className="sidebar-icon bg-gray-500"></div>
      </div>
    </>
  );
}
