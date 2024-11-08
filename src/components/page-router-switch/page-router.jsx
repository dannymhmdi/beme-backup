"use client";
import { LandingLayout } from "@/layout/landing-layout";
import Login from "app/login/page";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastAlert from "../snackbar/ToastAlert";
import { setLogin, setLogout } from "@/redux/reducers/checkLoginSlice";
import Loading from "app/loading";

const PageRouter = ({ children }) => {
  const path = usePathname();
  const isUserLogin = useSelector((state) => state.checkLogin.isUserLogin);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:3000/api/athenticate-loggedin-user")
      .then((res) => res.json())
      .then((res) => {
        // setLoading(false)
        if (res.isUserLogin) {1
          // dispatch(setLogin(res.isUserLogin));
          dispatch(setLogin(res));
        } else {
          dispatch(setLogout(res.isUserLogin));
         path === '/become-guide' && setAlert((prev) => ({ ...prev, status: true, message: res.message }));
        }
        setLoading(false)
      })
      .catch((err) => {
                setAlert((prev) => ({
          ...prev,
          status: true,
          message: "مشکل در برقراری ارتباط با سرور",
        }))
      });
  }, [path]);

  if (loading) {
    return <Loading/>
  }
  return (
    <>
    {/* <button onClick={() => dispatch(setLogin(true))}>redux</button> */}
      {path === "/login" ? (
        <Login />
      ) : (
        <LandingLayout>{children}</LandingLayout>
      )}
    </>
  );
};

export default PageRouter;
