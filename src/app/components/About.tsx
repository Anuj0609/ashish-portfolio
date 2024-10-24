import React from "react";

function About() {
  return (
    <div id="About" className="md:px-40 flex md:flex-row flex-col">
      <div className="text-5xl bg-[#f78da7] w-full items-center justify-center py-6 font-light flex md:items-center md:justify-center md:text-6xl">
        About
      </div>
      <div className="px-4 py-8 md:bg-white md:py-24 flex flex-col md:justify-center md:items-center">
        <div className="text-[#171321] font-light leading-loose md:w-3/4">
          I am a passionate graphic designer whose interest in design was
          sparked during my school years. Early exposure to art and creativity
          ignited my love for visual storytelling, and I’ve since dedicated
          myself to crafting designs that make an impact. Specializing in
          branding, digital media, and print design, I enjoy transforming ideas
          into compelling visuals that resonate with audiences.
        </div>
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="py-8 space-y-3">
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">Name:</div>
              <div className="text-[#3e3a51]">Ashish Yadav</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">CITY:</div>
              <div className="text-[#3e3a51]">Noida</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">BIRTHDAY:</div>
              <div className="text-[#3e3a51]">25. 02. 1995</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">INTEREST:</div>
              <div className="text-[#3e3a51]">Photo, Traveling</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">PHONE:</div>
              <div className="text-[#3e3a51]">+917838464051</div>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="font-bold text-[#171321]">EMAIL:</div>
              <div className="text-[#3e3a51]">ashishy08@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div>
              <img src="/icon-download-cv.png" alt="Download CV" />
            </div>
            <div className="space-x-3 text-black font-bold">
              <a
                href="/ashish_yadav_cv.pdf"
                download="Ashish_Yadav_CV.pdf"
                className="hover:text-gray-600"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
