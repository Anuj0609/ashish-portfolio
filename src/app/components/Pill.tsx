const educationDetails = [
  {
    year: "2015 - 2018", 
    courseName: "B.F.A (BACHELOR IN FINE ARTS)",
    specialisedIn: "APPLIED ART, AMITY UNIVERSITY", 
  },
  {
    year: "2019 - 2021",
    courseName: "M.F.A (MASTER IN FINE ARTS)",
    specialisedIn: "APPLIED ART, AMITY UNIVERSITY",
  },
];

export const Pill = () => {
  return (
    <div className="bg-[#D3D3D3]">
      {educationDetails.map((detail, index) => (
        <div
          key={index}
          className="p-4 mb-4 rounded-md flex flex-row space-x-3 items-center"
        >
          <div className="text-sm font-bold">{detail.year}</div>
          <div className="h-8 w-8 border-2 border-black rounded-full"></div>
          <div className="font-bold">{detail.courseName}</div>
        </div>
      ))}
      
    </div>
  );
};
