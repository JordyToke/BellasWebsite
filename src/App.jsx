import React, { useState } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div />
      <Footer />
    </>
  );
}

export default App;
