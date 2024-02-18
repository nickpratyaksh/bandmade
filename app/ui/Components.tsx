import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Context } from "../Context";
import { Theme } from "./themes";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { createBand } from "../api/actions";

export function BandIcon({
  icon_url,
  name,
  nameInPath,
}: {
  icon_url: string;
  name: string;
  nameInPath: string;
}) {
  return (
    <div className="relative group">
      <div
        className={clsx(
          "scale-0 h-8 w-1 top-4 rounded-e-full bg-white absolute left-0 group-hover:scale-100 transition-all duration-200 ease-linear",
          { "scale-100 h-[3rem] top-[0.5rem]": nameInPath === name }
        )}
      ></div>
      <div
        className={clsx("sidebar-icon", {
          "rounded-xl": nameInPath === name,
        })}
      >
        <img src={icon_url} className="h-16 w-16 object-cover" />
      </div>
      <div className="sidebar-icon-name group-hover:scale-100">{name}</div>
    </div>
  );
}

export function MemberItem({
  image_url,
  name,
  nameInPath,
}: {
  image_url: string;
  name: string;
  nameInPath: string;
}) {
  return (
    <div
      className={clsx(
        "flex px-2 py-2 m-2 hover:bg-green-600 rounded-xl transition-all duration-200 ease-linear cursor-pointer hover:text-white",
        { "bg-green-600 text-white": nameInPath === name }
      )}
    >
      <img src={image_url} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex flex-col justify-center px-5">{name}</div>
    </div>
  );
}

export function AddBandButton(props: { props: Theme }) {
  let current_theme: Theme = props.props;
  const [selected, changeSelectedStatus] = useState<boolean>(false);
  return (
    <div className="relative ">
      <div
        className={clsx("absolute scale-0 left-20", {
          "scale-100": selected == true,
        })}
      >
        <AddBandBox props={current_theme} />
      </div>

      <div
        className={`sidebar-icon h-16 w-16 ${current_theme.secondary_light}
        `}
      >
        <BsPlus
          className={`m-auto h-full w-full text-green-600`}
          onClick={() => {
            changeSelectedStatus(!selected);
          }}
        />
      </div>
    </div>
  );
}

export function AddBandBox(props: { props: Theme }) {
  let current_theme: Theme = props.props;
  const input = useRef(null);
  return (
    <form
      action={createBand}
      className={`w-56 h-72 mx-4 ${current_theme.secondary_light} rounded-2xl outline`}
    >
      <div className="m-auto h-full w-fit flex flex-col justify-evenly items-center">
        <div
          className="shadow-lg w-20 h-20 overflow-hidden
                    rounded-full cursor-pointer"
        >
          <IoPeopleCircleSharp className="w-full h-full" />
        </div>
        <input
          name="name"
          className={`text-black w-36 ${current_theme.secondary_dark} py-1.5 px-4 
          rounded-lg ${current_theme.text} focus:outline-none`}
          placeholder="Band Name"
        ></input>
        <input
          name="icon_url"
          className={`text-black w-36 ${current_theme.secondary_dark} py-1.5 px-4 
          rounded-lg ${current_theme.text} focus:outline-none`}
          placeholder="Band Icon Url"
        ></input>
        <button
          onClick={() => window.location.reload()}
          className={`${current_theme.primary} px-4 py-2 rounded-lg`}
        >
          Add Band
        </button>
      </div>
    </form>
  );
}
