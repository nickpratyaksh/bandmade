import { useContext, useEffect } from "react";
import { Context } from "@/app/Context";
import { AddBandButton, BandIcon } from "../Components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBands } from "@/app/api/actions";

export default function BandSection() {
  let { current_theme, changeBand, bands, updateBands } = useContext(Context);
  let bandnameInPath = usePathname().slice(1);

  bandnameInPath =
    bandnameInPath.indexOf("/") != -1
      ? bandnameInPath.substring(0, bandnameInPath.indexOf("/"))
      : bandnameInPath;

  const getBandsData = async () => {
    try {
      const res = await getBands();
      updateBands(JSON.parse(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBandsData();
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
