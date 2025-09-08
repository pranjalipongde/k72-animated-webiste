import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="">
      <div className="font-[secondaryFont] uppercase flex justify-center items-center gap-2 ">
        <div className="border-3 border-white h-[86px] rounded-full pt-3 px-6 leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
          <Link to="/projects" className="text-[6vw] mt-6">
            Projects
          </Link>
        </div>

        <div className="border-3 border-white h-[86px] rounded-full pt-3 px-6 leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
          <Link to="/agence" className="text-[6vw] mt-6">
            Agence
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomText;
