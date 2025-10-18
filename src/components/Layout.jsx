import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}
    >
      <Navbar />

      {/* Main content fills remaining space */}
      <main className="flex-1 p-4">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
