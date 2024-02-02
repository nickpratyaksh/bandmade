export function Band({ icon_url, name }: { icon_url: string; name: string }) {
  return (
    <div className="relative group">
      <div
        className="w-1 h-8 rounded-e-full bg-white absolute top-6 left-0
      scale-0 group-active:scale-100"
      ></div>
      <div className="sidebar-icon">
        <img src={icon_url} className="h-16 w-16 object-cover" />
      </div>
      <div className="sidebar-icon-name group-hover:scale-100">{name}</div>
    </div>
  );
}

export function Member({
  image_url,
  name,
}: {
  image_url: string;
  name: string;
}) {
  return (
    <div
      className="flex px-2 py-2 m-2 hover:bg-green-600 rounded-xl
    transition-all duration-200 ease-linear cursor-pointer hover:text-white"
    >
      <img src={image_url} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex flex-col justify-center px-5">{name}</div>
    </div>
  );
}
