import React from "react";
import { BasePage } from "../base-page";
import GuestAccordion from './guest-accordion'
import BusinessPlan from './business-plan'
import GuidAccordion from './guid-accordion'
const HowItWorks = () => {
  return (
    <BasePage fixed={true} className={''}>
      <div className="w-full py-4 animate-fadeRight"><h1 className="md:text-4xl text-2xl">چگونه شبیه هرشخصی شویم ، قدم به قدم</h1></div>
      <BusinessPlan/>
      <GuestAccordion/>
      <GuidAccordion/>
    </BasePage>
  );
};

export default HowItWorks;
