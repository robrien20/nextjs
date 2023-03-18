// components/Layout.js
import Menu from "./Menu";
import LoginForm from "./LoginForm";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <LoginForm />
      <main>{children}</main>
    </>
  );
};

export default Layout;
