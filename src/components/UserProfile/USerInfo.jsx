import React from "react";
import InfoTab from "./Tabs/InfoTab";
import ResumeTab from "./Tabs/ResumeTab";

const USerInfo = ({ activeTab,userData ,isEditActive, setIsEditActive }) => {
  return (
    <div
      className="w-full md:w-6/12 lg:w-8/12 px-2"
      // style={{ border: "2px solid" }}
    >
      {activeTab === "اطلاعات کاربر" && <InfoTab {...{userData ,isEditActive, setIsEditActive}}/>}
      {activeTab === "رزومه کاری" && <ResumeTab/>}
    </div>
  );
};

export default USerInfo;
