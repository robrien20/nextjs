// / components/Layout.js
import React from "react";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import dynamic from "next/dynamic";

const BackgroundImage = dynamic(() => import("./BackgroundImage"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundImage />
      <Menu />
      <LoginForm />
      <main>{children}</main>
    </>
  );
};

export default Layout;
