import Footer  from "@/components/footer/footer";
import { HeaderV2 } from "@/components/header";
import Header from "@/components/header/header";
import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <>
      {/* <Header></Header> */}
      <HeaderV2></HeaderV2>
      <main className="mt-5">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LandingLayout;
