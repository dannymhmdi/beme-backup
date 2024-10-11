'use client'
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import InfoTabsInputs from "../InfoTabs-inputs/InfoTabsInputs";
import { reload } from "../Reload";
import { useParams } from "next/navigation";
import ToastAlert from "@/components/snackbar/ToastAlert";

const InfoTab = ({ userData, isEditActive, setIsEditActive }) => {
  const param = useParams();
  const userId = param.slug;
  const [inputData, setInputData] = useState(userData);
  const [alert, setAlert] = useState({ status: false, message: "" });
  const inputChangeHandler = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [natCodeRegex,telRegex] = [/^\d{10}$/, /^[1-9]\d{9}$/]
  const isNatCodeValid = natCodeRegex.test(inputData.natcode)?null:inputData.natcode.length ? 'کدملی باید 10 رقم باشد':null;
  const isTelValid = telRegex.test(inputData.tel)?null:inputData.natcode.length ? 'شماره تلفن را درست وارد کنید':null;
  console.log('inputData',inputData)
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/userData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputData, userId }),
        cache: "no-store",
      });
      const json = await response.json()
      if (json.status) {
        setAlert((prev) => ({
          ...prev,
          status: true,
          message: json.message,
          success: json.success,
        }));
        setIsEditActive(false)
      }
      else{
        setAlert((prev) => ({
          ...prev,
          status: true,
          message: json.message,
        }));
      }
    } catch (error) {
      console.log(error)
    }
    const [data, status] = await reload(userId);
    setInputData(data);
  };
  return (
    <div className=" animate-fadeRight">
      <ToastAlert {...{alert,setAlert}}/>
      <form
        action=""
        method="POST"
        className="w-full flex flex-row flex-wrap py-2"
        onSubmit={submitHandler}
      >
        {Object.entries(inputData || {}).map((field, index) => (
          <div
            className="w-full sm:w-6/12 xl:w-4/12 px-2"
            key={`${field[0]}-${index}`}
          >
            <InfoTabsInputs
              {...{
                field,
                isEditActive,
                setIsEditActive,
                userData,
                inputData,
                setInputData,
                inputChangeHandler,
                isNatCodeValid,
                isTelValid
              }}
            />
          </div>
        ))}
        <div className="w-full px-2">
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={!(natCodeRegex.test(inputData.natcode) && telRegex.test(inputData.tel))}
            className="mt-2 bg-teal-600s hover:bg-teal-800s transition-all duration-150 ease-linear"
          >
            ثبت تغییرات
          </Button>
        </div>
      </form>
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
