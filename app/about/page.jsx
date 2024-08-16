"use client";
import { useState } from "react";
import {
  FirstTextContent,
  PageContainer,
} from "@/components/about-us";

export default function About() {
  return (
    <>
      <PageContainer>
        <FirstTextContent />
        <section>warning box</section>
        <div>our team box</div>
      </PageContainer>
    </>
  );
}
