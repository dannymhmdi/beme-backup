import { Typography } from "@mui/material";
import React from "react";
import InfoTabsInputs from "../InfoTabs-inputs/InfoTabsInputs";

const InfoTab = ({ userData,isEditActive, setIsEditActive }) => {
  return (
    <div className="flex flex-row flex-wrap py-2 animate-fadeRight">
      {Object.entries(userData).map((field,index) => (
        <div className="w-full sm:w-6/12 xl:w-4/12 px-2" key={`${field[0]}-${index}`}>
        <InfoTabsInputs {...{field,isEditActive, setIsEditActive}}/>
      </div>
      ))}
    </div>
  );
};

export default InfoTab;

const RowInfo = ({ info }) => {
  return (
    <>
      <div className="w-full sm:w-6/12 break-words">
        <Typography
          variant="body1"
          sx={{ marginBottom: "8px" }}
          className="mb-1"
        >
          {info[0]}
        </Typography>
      </div>
      <div className="w-full sm:w-6/12 text-sms break-wordss">
        {/* <Typography
          variant="body2"
          className="text-teal-600 hover:text-teal-800 transition-all duration-100 ease-linear"
        >
          {info[1] ? info[1]: 'اطلاعاتی ثبت نشده است'}
        </Typography> */}
        <InfoTabsInputs />
      </div>
    </>
  );
};

//old version UI

// const InfoTab = ({userData}) => {
//   // const person = {
//   //   userId: "Kshiti123",
//   //   name: "Daniel",
//   //   email: "dannymohammadi1377@gmail.com",
//   //   phone: "09127275236",
//   //   profession: "full-stack developer",
//   // };
//   return (
//     <div className="flex flex-row flex-wrap justify-between sm:items-center w-full py-2">
//       {(Object.entries(userData) || []).map((info, index) => (
//         <RowInfo key={index} {...{ info }} />
//       ))}
//     </div>
//   );
// };

// export default InfoTab;

// const RowInfo = ({ info }) => {
//   return (
//     <>
//       <div className="w-full sm:w-6/12 break-words">
//         <Typography variant="body1" sx={{ marginBottom: "8px" }} className="mb-1">
//           {info[0]}
//         </Typography>
//       </div>
//       <div className="w-full sm:w-6/12 text-sms break-wordss">
//         {/* <Typography
//           variant="body2"
//           className="text-teal-600 hover:text-teal-800 transition-all duration-100 ease-linear"
//         >
//           {info[1] ? info[1]: 'اطلاعاتی ثبت نشده است'}
//         </Typography> */}
//         <InfoTabsInputs/>
//       </div>
//     </>
//   );
// };
