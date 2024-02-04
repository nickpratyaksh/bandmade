import clsx from "clsx";

export function Band({
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
          "scale-0 h-8 w-1 top-4 rounded-e-full bg-white absolute left-0  group-hover:scale-100 transition-all duration-200 ease-linear",
          { "scale-100 h-[3rem] top-[0.5rem]": nameInPath === name }
        )}
      ></div>
      <div
        className={clsx("sidebar-icon", { "rounded-xl": nameInPath === name })}
      >
        <img src={icon_url} className="h-16 w-16 object-cover" />
      </div>
      <div className="sidebar-icon-name group-hover:scale-100">{name}</div>
    </div>
  );
}

export function Member({
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
