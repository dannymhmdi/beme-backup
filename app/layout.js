// 'use client'
import localFont from "next/font/local";
import "./globals.css";
import "./global-icons.css";
// import { metaData } from "src/js-modules/metaData";
import { MuiTheme } from "@/components/mui-theme";
// import "tailwindcss/tailwind.css";
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
        id="#app-wrapper"
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
