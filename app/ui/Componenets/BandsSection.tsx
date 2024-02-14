import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/app/Context";
import { AddBandButton, BandIcon } from "../Components";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";
import { BsPlus } from "react-icons/bs";

export default function BandSection() {
  let { current_theme, changeBand } = useContext(Context);
  let bandnameInPath = usePathname().slice(1);
  const [bands, updateBands] = useState<{ name: string; icon_url: string }[]>(
    []
  );

  bandnameInPath =
    bandnameInPath.indexOf("/") != -1
      ? bandnameInPath.substring(0, bandnameInPath.indexOf("/"))
      : bandnameInPath;

  const getBands = async () => {
    try {
      const res = await axios.get("/api/bands");
      updateBands(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <>
      <div
        className={`w-24 m-0 h-lvh transition-all duration-200 ease-linear
              flex flex-col ${current_theme.secondary_dark} ${current_theme.text} shadow-lg`}
      >
        {bands.map((item: { name: string; icon_url: string }, i: number) => (
          <Link href={`/${item.name}`} key={i}>
            <div onClick={() => changeBand(item.name)}>
              <BandIcon
                icon_url={item.icon_url}
                name={item.name}
                nameInPath={bandnameInPath}
              />
            </div>
          </Link>
        ))}
        <div>
          <AddBandButton props={current_theme} />
        </div>
      </div>
    </>
  );
}
