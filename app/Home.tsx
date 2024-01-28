import { band_members } from "./data/data";
import { Member } from "./ui/Components";
import BandSection from "./ui/Componenets/BandsSection";
import { useContext } from "react";

export default function Home() {
  let { current_theme, switchTheme, selectBand } = useContext(ThemeContext);
  return (
    <main>
      <div className="flex">
        <BandSection />
        <div className="flex flex-col h-screen w-full">
          <div
            className={`bg-green-600 h-8 text-white text-center
            font-bold flex flex-col justify-center`}
          >
            WishCord
          </div>
          <div className="flex h-full">
            <div className={`bg-${theme.primary} text-${theme.text} w-56`}>
              {band_members.map((item, i) => {
                if (item.band == selected_band)
                  return <Member name={item.name} image_url={item.image_url} />;
              })}
            </div>
            <div
              className={`text-${theme.text} bg-${theme.secondary_light} flex flex-col w-full`}
            >
              Main Content
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
