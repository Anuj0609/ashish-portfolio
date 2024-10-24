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
    <div className="bg-[#D3D3D3] md:w-2/3 md:py-20">
      {educationDetails.map((detail, index) => (
        <div key={index} className="p-4 rounded-md">
          <div className="flex items-start space-x-3">
            <div className="text-sm font-bold">{detail.year}</div>

            <div className="flex flex-col items-center">
              <div className="h-8 w-8 border-2 border-black rounded-full"></div>
              <div className="bg-black h-32 w-1"></div>{" "}
            </div>

            <div>
              <div className="font-bold">{detail.courseName}</div>
              <div className="text-lg mt-8">{detail.specialisedIn}</div>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
