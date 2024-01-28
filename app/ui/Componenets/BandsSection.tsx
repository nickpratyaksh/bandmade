import { bands_list } from "@/app/data/data";
import { useContext } from "react";
import { Context } from "@/app/data/Context";
import { Band } from "../Components";
import Link from "next/link";

export default function BandSection() {
  let { current_theme, changeBand } = useContext(Context);

  return (
    <div
      className={`w-fit m-0 h-lvh
              flex flex-col ${current_theme.secondary_dark} ${current_theme.text} shadow-lg`}
    >
      {bands_list.map((item, i) => {
        return (
          <Link href={`/bands/${item.name}`}>
            <div onClick={() => changeBand(item.name)}>
              <Band icon_url={item.icon_url} name={item.name} key={i} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
