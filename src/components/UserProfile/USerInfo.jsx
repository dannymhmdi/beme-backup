import React from "react";

const USerInfo = ({ activeTab, setActiveTab }) => {
  return (
    <div
      className="w-full md:w-6/12 lg:w-8/12 px-2"
      style={{ border: "2px solid" }}
    >
      {activeTab === "اطلاعات کاربر" && "اطلاعات کاربر"}
      {activeTab === "رزومه کاری" && "رزومه کاری"}
    </div>
  );
};

export default USerInfo;
