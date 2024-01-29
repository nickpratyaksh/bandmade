// "use client";

// import BandSection from "./ui/Componenets/BandsSection";
// import { useContext } from "react";
// import { Context } from "./data/Context";
// import { lightTheme, darkTheme } from "./ui/themes";
// import MembersSection from "./ui/Componenets/MembersSection";

// export default function Page() {
//   let { current_theme, changeTheme } = useContext(Context);
//   return (
//     <div className="flex">
//       <BandSection />
//       <div className="flex flex-col h-screen w-full">
//         <div
//           onClick={() => {
//             changeTheme(current_theme == lightTheme ? darkTheme : lightTheme);
//             localStorage.setItem(
//               "saved_theme",
//               JSON.stringify(
//                 current_theme == lightTheme ? darkTheme : lightTheme
//               )
//             );
//           }}
//           className={`${current_theme.highlight} h-8 text-white text-center
//         font-bold flex flex-col justify-center cursor-pointer`}
//         >
//           WishCord
//         </div>
//         <div className="flex h-full">
//           <MembersSection selected_band="nothing" />
//           <div
//             className={`${current_theme.text} ${current_theme.secondary_light} flex flex-col w-full`}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
export default function page() {
  return <Link href={"/bands"}>click to view bands</Link>;
}
