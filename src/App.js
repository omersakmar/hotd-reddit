import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  return (
    <>
      <Navbar />

      <AppRoutes />
    </>
  );
};

export default App;
