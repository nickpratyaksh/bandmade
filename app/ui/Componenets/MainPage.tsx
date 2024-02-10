import { Context } from "@/app/Context";
import React, { useContext } from "react";

export default function MainPage() {
  let { current_theme } = useContext(Context);
  return (
    <div className={`${current_theme.text} m-24`}>
      <h1 className="font-bold text-5xl">To Do -</h1>
      <ul className="mx-10 my-5 text-3xl list-decimal list-inside">
        <li className="line-through">fix ui</li>
        <li className="line-through">make ui better </li>
        <li className="line-through">add database</li>
        <li>add "add bands" button also give functionality</li>
        <li>add "search bands" also give functionality</li>
        <li>add setting menu drawer</li>
        <li>add theme switcher</li>
        <li>
          fetch band member data from wikipedia using some api if possible
        </li>
        <li>make mobile responsive</li>
        <li>add authenticaion</li>
      </ul>
    </div>
  );
}
