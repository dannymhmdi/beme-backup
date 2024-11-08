"use client";
import React, { useEffect, useState } from "react";
import { BasePage } from "../base-page";
import { MuiTheme } from "../mui-theme";
import PersonsCard from "./PersonsCard";
import DialogButton from "../dialog-button/dialogButton";
import { Paginator } from "@/components/pagination/paginator";
import Loading from "app/loading";
import ToastAlert from "../snackbar/ToastAlert";
import CardMui from "../cardMui/Card";
import { useRouter } from "next/navigation";


const BecomeGuide = ({}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [alert, setAlert] = useState({ status: false, message: "" });
  const [filterApply, setFilterApply] = useState(false);
  const [fields, setFields] = useState([]);
 

  const sendFilteredRequestHandler = async () => {
    const params = fields.length ? { fields, currentPage } : { currentPage };
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/test-api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
        next: { revalidate: 3600 },
      });

      const data = await response.json();
      if (data.error) {
        setIsLoading(false);
        setAlert((prev) => {
          return { ...prev, status: true, message: data.error };
        });
        return;
      } else {
        setTotalItems(data["data-provider"].totalItems);
        // setUserData(data["data-provider"].apiData);
        setUserData(data["data-provider"]);
        setIsLoading(false);
      }
    } catch (error) {
      throw new Error("client error to test-api request");
    }
  };

  useEffect(() => {
    sendFilteredRequestHandler();
  }, [currentPage, filterApply]);

  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      {/* <BasePage fluid={"true"}  className={" bg-white px-0"}></BasePage> ------> fluid container */}
      {isLoading && <Loading />}
      <MuiTheme>
        <ToastAlert {...{ alert, setAlert }} />
        <DialogButton
          {...{
            sendFilteredRequestHandler,
            fields,
            setFields,
            setFilterApply,
            setCurrentPage,
          }}
        />
        <PersonsCard {...{ userData, alert }} />
        <Paginator
          {...{ currentPage, setCurrentPage, totalItems, setIsLoading }}
        />
        <CardMui {...{ userData, alert }} />
        <Paginator
          {...{ currentPage, setCurrentPage, totalItems, setIsLoading }}
        />
      </MuiTheme>
    </BasePage>
  );
};

export default BecomeGuide;
