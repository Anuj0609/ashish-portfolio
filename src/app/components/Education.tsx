import React from 'react'
import { Pill } from './Pill';

function Education() {
  return (
    <div id="Education" className="md:px-40 flex flex-col md:flex-row-reverse">
      <div className="text-5xl bg-[#E89191] text-center py-5 font-light flex items-center justify-center md:w-1/3">
        Education
      </div>
      <Pill></Pill>
    </div>
  );
}

export default Education