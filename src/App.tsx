import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./Components/Header";
import Body from "./Components/Body";


function App() {
  return (
    <>
      <Header />
      <Body/>
      <Box className="App" sx={{ display: "flex", flexDirection: "column" }}>
       
      </Box>
    </>
  );
}

export default App;
