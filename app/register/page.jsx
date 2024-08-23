"use client";
import React from "react";
import { RegisterForm } from "@/components/register";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      {/* <RegisterForm />
       */}
      <div className="flex flex-row flex-wrap sm:justify-center items-center h-screen">
        <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full borders border-red-600s flex flex-col flex-wrap px-6 py-16 bg-white rounded-md">
          <div className="flex flex-wrap flex-row mb-8 border border-red-600">
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
          <div className="text-center mb-3 flex px-2">
            <hr className="w-6/12 mt-3 border-ys bg-gray-300 h-[2px]" />
            <span className="after:content-['-']s px-3">یا</span>
            <hr className="w-6/12 mt-3 border-ys bg-gray-300 h-[2px]" />
          </div>
          {/* <form
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
            </div>
            <div className="flex items-center mb-3">
              <Checkbox id="remember" className="ml-1 cursor-pointer" />
              <Label htmlFor="remember" className="cursor-pointer">
                مرا بخاطر بسپار
              </Label>
            </div>
          </form> */}
          <div className="flex justify-center mb-5">
            <button
              className="w-full md:w-5/12s bg-teal-400 rounded-md p-2 font-bold text-white relative"
              type="submit"
            >
              ورود با ایمیل
              <span className="absolute start-1s px-2 top-1/2 translate-y-[-50%] material-symbols-outlined text-white">
                mail
              </span>
            </button>
          </div>
          <div className="flex justify-center">
            <p >قبلا اکانت BeMe داشته‌اید؟</p>
            <Link href="/login" className="text-teal-400 font-bold px-1 mt-[-4px] text-lg ">ورود</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
