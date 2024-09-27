"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import UserLabelCard from "../Generals/userLabelCard/userLabelCard";
import RegistorDialog from "@/components/registerDialog/RegistorDialog";
import DrawerContent from "./DrawerContent";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const routes = [
  { name: "ورود", route: "/login" },
  { name: "ثبت‌نام", route: "/register" },
  { name: "ساز و کار", route: "/how-it-works" },
  { name: "درباره ما", route: "/about" },
  { name: "پشتیبانی", route: "/support" },
  { name: "راهنما باش", route: "/become-guide" },
];

const HeaderV2 = ({ children }) => {
  const isUserLogin = useSelector((state) => state.checkLogin.isUserLogin);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const route = usePathname();
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const routeHandler = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  // const container = window !== undefined ? () => window().document.body : undefined;
  return (
    // <Box sx={{ display: 'flex' }} >
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ bgcolor: "#fff" }} className="shadow-lg">
        {route !== '/register' && <RegistorDialog {...{ openDialog, setOpenDialog }} />}
        <Toolbar
          className="justify-betweens border"
          sx={{ justifyContent: "space-between" }}
        >
          <IconButton
            color="#0f766e"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
         {isUserLogin && <UserLabelCard />} 
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map((page, index) => (
              <Link
                key={index}
                href={page.route === "/register" ? '#':page.route}
                onClick={page.route === "/register" && route !== "/register"? routeHandler : null}
                className={`text-lg inline-block py-2 px-3  hover:border-b transition-all duration-200 no-underline ${
                  page.route === route
                    ? "bg-teal-500 rounded-lg py-2 hover:text-dark text-white"
                    : "text-dark hover:text-teal-500"
                } ${!isUserLogin  ? 'inline-block':(page.route === '/login' || page.route === '/register')&&'hidden'}`}
                // sx={{ color: "rgba(0, 0, 0, 0.87)" }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            <Image
              src={logo}
              alt="logo"
              width={45}
              height={45}
              quality={100}
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // anchor='left'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              right: "0",
            },
          }}
        >
          <DrawerContent {...{handleDrawerToggle,routes}}/>
        </Drawer>
      </nav>
    </>
    // </Box>
  );
};

export default HeaderV2;
