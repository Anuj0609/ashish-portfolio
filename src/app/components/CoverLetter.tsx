import React from 'react'

function CoverLetter() {
  return (
    <div id="cover-letter" className="md:px-40 flex flex-col md:flex-row">
      <div className="bg-[#A19D9C] text-center text-4xl py-4 font-light md:w-1/3 flex justify-center items-center">
        Cover
        <br />
        Letter
      </div>
      <p className="text-black px-4 py-8 font-light leading-loose md:w-2/3 bg-white md:py-20">
        I am excited to apply for the Graphic Designer position. With a Master
        of Fine Arts (M.F.A.) in Graphic Design from Amity University and have
        over 6 Years of experience in the industry. My work has spanned various
        projects, from branding and marketing materials to web design and social
        media graphics.
        <br />
        <br /> In addition to my technical skills, I am a strong collaborator
        and communicator. I enjoy working closely with clients and team members
        to understand their needs and translate their ideas into effective
        design solutions. <br />
        <br /> I thrive in fast-paced environments and am always eager to tackle
        new challenges.
      </p>
    </div>
  );
}

export default CoverLetter