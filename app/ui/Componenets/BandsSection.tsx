import { band_members, bands_list } from "@/app/lib/data";
import { useContext } from "react";
import { Context } from "@/app/lib/Context";
import { Band } from "../Components";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function BandSection() {
  let { current_theme, changeBand } = useContext(Context);
  let bandnameInPath = usePathname().slice(1);

  bandnameInPath =
    bandnameInPath.indexOf("/") != -1
      ? bandnameInPath.substring(0, bandnameInPath.indexOf("/"))
      : bandnameInPath;

  const createNewBand = async () => {
    try {
      const res = await axios.post("/lib/api/bands");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBand = async () => {
    try {
      const req = await axios.get("/lib/api/bands");
      console.log(req.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`w-fit m-0 h-lvh
              flex flex-col ${current_theme.secondary_dark} ${current_theme.text} shadow-lg`}
      >
        {bands_list.map((item, i) => {
          return (
            <Link href={`/${item.name}`} key={i}>
              <div onClick={() => changeBand(item.name)}>
                <Band
                  icon_url={item.icon_url}
                  name={item.name}
                  nameInPath={bandnameInPath}
                />
              </div>
            </Link>
          );
        })}
        {/* <button onClick={getBand}>button</button> */}
      </div>
    </>
  );
}
