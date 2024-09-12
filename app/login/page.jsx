"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from '@/components/login/loginStyle.module.css'
import { Login } from "@/components/login";
const LoginPage = () => {
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <Login/>
  );
};
export default Login;
