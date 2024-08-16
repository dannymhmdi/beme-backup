"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./dialogButton.module.css";
import CategoriFilterBox from "../categori-filter-box/CategoriFilterBox";
import { Button } from "@mui/material";
const DialogButton = ({ sendFilteredRequestHandler , fields , setFields,setFilterApply ,setCurrentPage ,setIsLoading}) => {
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [showDateBox, setShowDateBox] = useState(false);
  const divRef = useRef(null);
  const divDate = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!divRef.current?.contains(event.target)) {
        // Clicked outside the div, perform your close action here
        setShowFilterBox(false);
        console.log("Clicked outside the div.");
        console.log("target", event.target);
        // Close the div or perform any other desired action
      }
      if (!divDate.current?.contains(event.target)) {
        setShowDateBox(false);
        console.log("divDate worked", divDate.current?.contains(event.target));
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {(showDateBox || showFilterBox) && (
        <div className="fixed bg-background-gray z-50 top-0 left-0 right-0 bottom-0"></div>
      )}
      <div className="border-2a flex flex-wrap justify-ends p-2 relative border-teal-800s">
        <div
          className={`overflow-y-auto  sm:h-[450px] sm:w-6/12 md:w-3/12 w-full bg-white py-5 px-2  sm:rounded-lg sm:absolute sm:top-full z-[100] fixed top-0 right-0 left-0 bottom-0 some-global-class${
            styles["dialog-box"]
          } transition-all duration-200 ease-in ${
            showDateBox
              ? `opacity-100 visible sm:mt-0`
              : "invisible opacity-0 sm:mt-4"
          }`}
          ref={divDate}
        >
          <div className="sm:hidden text-dark sm:mb-0 mt-10 sm:mt-0">
            <span
              className="material-symbols-outlined hover:bg-rose-600 p-3 hover:cursor-pointer hover:bg-gray-200"
              onClick={() => setShowDateBox(false)}
            >
              close
            </span>
          </div>
          <CategoriFilterBox {...{sendFilteredRequestHandler,setShowDateBox ,fields ,setFields ,setFilterApply ,setCurrentPage,setIsLoading}}/>

        </div>
        <div
          className={`overflow-y-auto sm:h-[450px] md:w-6/12 w-full bg-white text-dark py-5 px-2 sm:rounded-lg sm:absolute sm:top-full z-[100] fixed top-0 right-0 left-0 bottom-0  overflow-x-hidden${
            styles["dialog-box"]
          } transition-all duration-200 ease-in ${
            showFilterBox
              ? "opacity-100 visible sm:mt-0"
              : "invisible opacity-0 sm:mt-4"
          }`}
          ref={divRef}
        >
          <div className="sm:hidden text-dark sm:mb-0 mt-10 sm:mt-0">
            <span
              className="material-symbols-outlined hover:bg-rose-600  p-3 hover:cursor-pointer  hover:bg-gray-200"
              onClick={() => setShowFilterBox(false)}
            >
              close
            </span>
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, alias
          perferendis. Quod minus consectetur officia repellat maiores deleniti
          labore, eveniet voluptatum, eligendi quam quidem facilis magnam totam
          corporis quibusdam quis! filterBox
        </div>
        <button
          className="text-white bg-green-600 px-5 py-2 rounded-lg ms-2"
          onClick={() => {
            setShowDateBox(true);
            setShowFilterBox(false);
          }}
        >
          دسته بندی
        </button>
        <button
          className="text-white bg-green-600 px-5 py-2 rounded-lg ms-2"
          onClick={() => {
            setShowFilterBox(true);
            setShowDateBox(false);
          }}
        >
          اشخاص
        </button>
      </div>
    </>
  );
};

export default DialogButton;
