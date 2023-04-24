// / components/Layout.js
import React from "react";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import dynamic from "next/dynamic";
import ScrollingMessage from "../components/ScrollingMessage";


const BackgroundImage = dynamic(() => import("./BackgroundImage"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundImage />
      <ScrollingMessage text="🛠️ ⚠️ 🚧 Website under construction 🚧 ⚠️ 🛠️ " />
      <Menu />
      <LoginForm />
      <main>{children}</main>
    </>
  );
};

export default Layout;
