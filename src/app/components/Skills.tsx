import React from "react";

function Skills() {
  return (
    <div className="bg-[#D3D3D3]">
      <div className="text-5xl bg-[#512525] w-full text-center py-6 font-light">
        Skills
      </div>
      <div className="mt-8 mx-5 flex flex-row items-center">
        <div className="bg-[#512525] w-[70%] px-2 text-sm font-thin">
          Photoshop
        </div>
        <div className="bg-[#FFFFFF] w-[30%] h-2"></div>
      </div>
      <div className="mt-8 mx-5 flex flex-row items-center">
        <div className="bg-[#512525] w-[60%] px-2 text-sm font-thin">
          Illustrator
        </div>
        <div className="bg-[#FFFFFF] w-[40%] h-2"></div>
      </div>

      <div className="mt-8 mx-5 flex flex-row items-center">
        <div className="bg-[#512525] w-[65%] px-2 text-sm font-thin">
          After Effect
        </div>
        <div className="bg-[#FFFFFF] w-[35%] h-2"></div>
      </div>
      <div className="mt-8 mx-5 flex flex-row items-center">
        <div className="bg-[#512525] w-[50%] px-2 text-sm font-thin">
          After Effect
        </div>
        <div className="bg-[#FFFFFF] w-[50%] h-2"></div>
      </div>
      <div className="mt-8 mx-5 pb-8 flex flex-row items-center">
        <div className="bg-[#512525] w-[60%] px-2 text-sm font-thin">
          After Effect
        </div>
        <div className="bg-[#FFFFFF] w-[40%] h-2"></div>
      </div>
      <div className="bg-[#80587A] flex items-center justify-center py-10 flex-col">
        <img src="icon_1.png" alt="" />
        <div className="text-xs font-bold">PIXEL PRECISE</div>
      </div>

      <div className="bg-[#F591A4] flex items-center justify-center py-10 flex-col">
        <img src="icon_2.png" alt="" />
        <div className="text-xs font-bold">SECURE</div>
      </div>
      <div className="bg-[#382E46] flex items-center justify-center py-10 flex-col">
        <img src="icon_1.png" alt="" />
        <div className="text-xs font-bold">RESPONSIVE</div>
      </div>
    </div>
  );
}

export default Skills;
