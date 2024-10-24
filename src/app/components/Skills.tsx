import React from "react";

function Skills() {
  return (
    <div id="Skills" className=" md:px-40 flex flex-col">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="text-5xl bg-[#512525] w-full text-center py-6 font-light md:w-1/3 flex justify-center md:items-center">
          Skills
        </div>
        <div className="md:w-2/3 bg-[#D3D3D3] md:px-28 md:space-y-10 md:py-14">
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#80587A] flex items-center justify-center py-10 flex-col md:w-1/3 md:py-40">
          <img src="icon_1.png" alt="" />
          <div className="text-xs font-bold">PIXEL PRECISE</div>
        </div>

        <div className="bg-[#F591A4] flex items-center justify-center py-10 flex-col md:w-1/3">
          <img src="icon_2.png" alt="" />
          <div className="text-xs font-bold">SECURE</div>
        </div>
        <div className="bg-[#382E46] flex items-center justify-center py-10 flex-col md:w-1/3">
          <img src="icon_1.png" alt="" />
          <div className="text-xs font-bold">RESPONSIVE</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
