"use client";
import { Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import InfoTabsInputs from "../InfoTabs-inputs/InfoTabsInputs";
import { reload } from "../Reload";
import { useParams } from "next/navigation";
import ToastAlert from "@/components/snackbar/ToastAlert";
import { submitChanges } from "../submitChanges";

const InfoTab = ({ userData, isEditActive, setIsEditActive }) => {
  const param = useParams();
  const userId = param.slug;
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(userData);
  const [alert, setAlert] = useState({ status: false, message: "" });
  const inputChangeHandler = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [natCodeRegex, telRegex] = [/^\d{10}$/, /^[1-9]\d{9}$/];
  const isNatCodeValid = natCodeRegex.test(inputData?.natcode)
    ? null
    : inputData?.natcode?.length
    ? "کدملی باید 10 رقم باشد"
    : null;
  const isTelValid = telRegex.test(inputData?.tel)
    ? null
    : inputData?.natcode?.length
    ? "شماره تلفن را درست وارد کنید"
    : null;
  console.log("inputData", inputData);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = { inputData, userId };
    submitChanges({ body, setLoading, setAlert, setIsEditActive });

    // try {
    //   const response = await fetch(`http://localhost:3000/api/userData`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ inputData, userId }),
    //     cache: "no-store",
    //   });
    //   const json = await response.json();
    //   setLoading(false);
    //   if (json.status) {
    //     setAlert((prev) => ({
    //       ...prev,
    //       status: true,
    //       message: json.message,
    //       success: json.success,
    //     }));
    //     setIsEditActive(false);
    //   } else {
    //     setAlert((prev) => ({
    //       ...prev,
    //       status: true,
    //       message: json.message,
    //     }));
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    const [data, status] = await reload(userId);
    setInputData(data);
  };
  return (
    <div className=" animate-fadeRight">
      <ToastAlert {...{ alert, setAlert }} />
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
                isTelValid,
              }}
            />
          </div>
        ))}
        <div className="w-full px-2">
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={
              natCodeRegex.test(inputData?.natcode) &&
              telRegex.test(inputData?.tel) &&
              isEditActive
                ? false
                : true
            }
            className="mt-2 bg-teal-600s hover:bg-teal-800s transition-all duration-150 ease-linear"
          >
            {loading ? (
              <CircularProgress color="primary" size="30px" />
            ) : (
              "ثبت تغییرات"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InfoTab;
