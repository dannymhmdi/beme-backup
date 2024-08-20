import Link from "next/link";
import React from "react";
import Images from "./images";
// import { ExprienceSection, LandigPart2, PolicySection } from ".";
import ExprienceSection from "./exprience-section";
import LandigPart2 from "./landig-second-part";
import PolicySection from "./policy-section";
import { BasePage } from "../base-page";
import { lazy } from "react";
import { Suspense } from "react";
const VideoTeaser = lazy(() => import('./VideoTeaser'))
const Landing = () => {
  return (
    <>
      <BasePage fixed={true}>
        <>
          <div className="size-full text-center">
            <h1 className="font-bold text-4xl md:text-5xl">
              با
              <span className="text-teal-400 px-2">BeMe</span>
              <span>هرکی میخوای باش</span>
            </h1>
          </div>

          <div className="text-start mt-5 mb-3">
            <h2 className="text-2xl md:text-3xl font-medium">
              زندگی متفاوتی را تجربه کنید.
            </h2>
          </div>

          <div className="text-start">
            <h2 className="text-2xl md:text-3xl font-medium">
              هر حرفه ای را برای چند ساعت با بازار تایید شده کارشناسان صنعت ما
              امتحان کنید.
            </h2>
          </div>

          <div className="text-center my-10">
            <p>
              <Link
                href={"./home"}
                className="text-base  font-bold md:text-2xl p-4 md:p-3 borders border-solid border-teal-400 rounded-full bg-teal-400 transition-all duration-200 ease-out hover:ease-in hover:bg-teal-300 hover:px-5"
              >
                راهنماتو انتخاب کن
              </Link>
            </p>
          </div>
          <Images />
          <LandigPart2 />
          {/* <video
            id="video_background"
            preload="auto"
            autoPlay={true}
            loop={true}
            muted
            width="100%"
            className="rounded-md my-6"
            // playsInline=""
          >
            <source src="./videos/promo.mp4" type="video/mp4" />
          </video> */}
          <Suspense fallback={'loading video'}>
          <VideoTeaser/>
          </Suspense>
        </>
      </BasePage>
      <ExprienceSection />
      <PolicySection />
    </>
  );
};

export default Landing;
