import { Typography } from '@mui/material';
import React from 'react'
const ResumeTab = () => {
  const person = {
    userId: "Kshiti123",
    name: "Daniel",
    email: "dannymohammadi1377@gmail.com",
    phone: "09127275236",
    profession: "full-stack developer",
  };
  return (
    <div className="flex flex-row flex-wrap justify-between w-full py-2 animate-fadeRight">
      {(Object.entries(person) || []).map((info, index) => (
        <RowInfo key={index} {...{ info }} />
      ))}
    </div>
  );
}

export default ResumeTab


const RowInfo = ({ info }) => {
  return (
    <>
      <div className="w-full sm:w-6/12 break-words">
        <Typography variant="body1" sx={{ marginBottom: "8px" }} className="mb-1">
          {info[0]}
        </Typography>
      </div>
      <div className="w-full sm:w-6/12 text-sms break-words">
        <Typography
          variant="body2"
          className="text-teal-600 hover:text-teal-800 transition-all duration-100 ease-linear"
        >
          {info[1]}
        </Typography>
      </div>
    </>
  );
};