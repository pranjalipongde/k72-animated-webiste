import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[primaryFont] pt-3 text-center">
      <div className="text-[9.6vw] uppercase leading-[9vw]">L'étincelle</div>
      <div className="text-[9.6vw] uppercase leading-[9vw] flex items-center justify-center">
        qui
        <div className="h-[8vw] w-[16vw] -mt-4 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.6vw] uppercase leading-[9vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
