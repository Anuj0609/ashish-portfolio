import React from "react";

function Intro() {
  return (
    <div
      id="home"
      className="space-y-8 px-5 py-7 bg-[#171321] mt-8 flex flex-col md:flex-row md:space-x-20 md:items-center md:px-40"
    >
      <img
        src="/profile-pic.png"
        alt="Profile-pic"
        className="w-full md:w-1/2 md:h-screen"
      />
      <div className="flex-1 md:space-y-8">
        <h1 className="text-5xl font-thin md:text-8xl">
          Hello
          <br />
          I&apos;m Ashish <br />
          Yadav
        </h1>

        <p className="leading-loose md:w-5/6">
          I&apos;m a graphic designer with expertise in Adobe Illustrator and
          Photoshop, focusing on branding, logo design, and illustration. I
          create logos, posters, ads, banners, and more, always delivering
          reliable and punctual work.
        </p>
      </div>
    </div>
  );
}

export default Intro;
