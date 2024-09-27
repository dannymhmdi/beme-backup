// 'use client'
import { LandingLayout } from "@/layout/landing-layout";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import "./globals.css";
import "./global-icons.css";
import { usePathname } from "next/navigation";
import Login from "./login/page";
// import { metaData } from "src/js-modules/metaData";
import { MuiTheme } from "@/components/mui-theme";
import PageRouter from "@/components/page-router-switch/page-router";
import StoreProvider from "@/redux/StoreProvider";
// const lexend = Lexend({ subsets: ["latin"] });
// const meta = metaData
const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export const metaData = {
  title: "BeMe",
  description: "BeMe",
};

export default function RootLayout({ children }) {
  // const path = usePathname()
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${vazirFont.className}`}
        // style={{ backgroundColor: "#EFEFEF" }}
      >
        <StoreProvider>
          <MuiTheme>
            {/* {
          path === '/login' ? <Login/>: <LandingLayout>{children}</LandingLayout>
        } */}
            {/* <LandingLayout>{children}</LandingLayout> */}
            <PageRouter>{children}</PageRouter>
          </MuiTheme>
        </StoreProvider>
      </body>
    </html>
  );
}
