import { Button } from "@mui/material";
import React from "react";
// import  VideoSection  from "./video";

const LandigPart2 = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <Button className="text-base font-bold md:text-2xl p-4 md:px-4 borders border-solid border-teal-400 rounded-full bg-teal-400 transition-all duration-200 ease-out hover:ease-in hover:bg-teal-300 hover:px-6">
            راهنماهای بیشتر را کشف کنید
          </Button>
        </div>

        <div className="py-5">
          <h2 className="text-2xl md:text-4xl font-bold ">
            می خواهید تجربه خود را هدیه دهید؟
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold mt-5 lg:text-3xl">
            یک تجربه شغلی جدید را هدیه دهید.
          </h2>
        </div>

        <div className="text-center">
          <Button className="text-base font-bold md:text-2xl p-4 md:px-6 borders border-solid border-teal-400 rounded-full bg-teal-400 transition-all duration-200 ease-out hover:ease-in hover:bg-teal-300 md:hover:px-8 hover:px-5">
            گیفت کارت BeMe
          </Button>
        </div>
        {/* <VideoSection/> */}
      </div>
    </>
  );
};

export default LandigPart2;
