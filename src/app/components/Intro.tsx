import React from "react";

function Intro() {
  return (
    <div className="space-y-8 px-5 py-7 bg-[#171321] mt-8">
      <img
        src="/profile-pic.png"
        alt="Profile-pic"
        className=" w-[250px] h-[250px]"
      />
      <h1 className="text-5xl font-thin">
        Hello
        <br />
        I&apos;m Ashish <br />
        Yadav
      </h1>

      <p className="leading-loose">
        I&apos;m a graphic designer with expertise in Adobe Illustrator and
        Photoshop, focusing on branding, logo design, and illustration. I create
        logos, posters, ads, banners, and more, always delivering reliable and
        punctual work.
      </p>
    </div>
  );
}

export default Intro;
