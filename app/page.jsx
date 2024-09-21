"use client";
import Image from "next/image";
import Landing from "../src/components/landing/landing.jsx";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    fetch(`http://localhost:3000/api/users`)
      .then((res) => res.json())
      .then((res) => console.log("res in home", res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Landing />
    </>
  );
};
export default Home;
