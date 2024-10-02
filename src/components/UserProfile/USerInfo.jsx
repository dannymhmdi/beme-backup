import React from "react";
import InfoTab from "./Tabs/InfoTab";
import ResumeTab from "./Tabs/ResumeTab";

const USerInfo = ({ activeTab, setActiveTab }) => {
  return (
    <div
      className="w-full md:w-6/12 lg:w-8/12 px-2"
      // style={{ border: "2px solid" }}
    >
      {activeTab === "اطلاعات کاربر" && <InfoTab/>}
      {/* {activeTab === "اطلاعات کاربر" && "اطلاعات کاربر"} */}
      {/* {activeTab === "رزومه کاری" && "رزومه کاری"} */}
      {activeTab === "رزومه کاری" && <ResumeTab/>}
    </div>
  );
};

export default USerInfo;
