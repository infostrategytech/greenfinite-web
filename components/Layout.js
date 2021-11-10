import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      {/* header */}
      <Header />
      {children}
      {/* footer */}
      <Footer />
    </>
  );
}

export default AppLayout;
