import Link from "next/link";
import React from "react";
import styles from './loginStyle.module.css'
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div
      className={`flex flex-row flex-wrap justify-center items-center h-screen ${styles["login-container"]}`}
    >
   <LoginForm/>
    </div>
  );
};

export default Login;


<div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full flex flex-col flex-wrap px-6 py-12 bg-teal-50s shadow-2xl rounded-md bg-transparent">
<div className="flex flex-wrap flex-row mb-2 border border-red-600">
  <Link
    href={"#"}
    className="bg-login-btn text-white p-3 rounded-md w-full mb-2 text-center"
  >
    ورود با فیسبوک
  </Link>
  <Link
    href={"#"}
    className="border border-black p-3 rounded-md w-full text-center"
  >
    ورود با گوگل{" "}
  </Link>
</div>
<form
  action=""
  onSubmit={(e) => {
    console.log("form submited");
    e.preventDefault();
  }}
>
  <div className="flex flex-wrap flex-col mb-2 border border-red-600">
    <div className="relative mb-3">
      <span className="absolute start-1 top-1/2 translate-y-[-50%] material-symbols-outlined text-gray-600">
        mail
      </span>
      <input
        type="email"
        className="w-full rounded-md p-2"
        placeholder="آدرس ایمیل"
      />
    </div>
    <div className="relative mb-3">
      <span className="absolute start-1 top-1/2 translate-y-[-70%] material-symbols-outlined text-gray-600">
        lock
      </span>
      <input
        type="password"
        className="w-full mb-3 rounded-md p-2"
        placeholder="رمز عبور"
      />
    </div>
    {/* <video src=""></video> */}
  </div>
  <div className="flex items-center mb-3">
    <input
      type="checkbox"
      id="remember"
      className="ml-1 cursor-pointer rounded-sm outline-none border-gray-400"
    />
    <label htmlFor="remember" className="cursor-pointer">
      مرا بخاطر بسپار
    </label>
  </div>
  <div className="flex justify-center mb-3">
    <button
      className="w-6/12 md:w-5/12 bg-teal-400 rounded-md p-2 font-bold text-white"
      type="submit"
    >
      ورود
    </button>
  </div>
</form>
</div>