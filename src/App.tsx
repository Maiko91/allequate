import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Body />
        <Box
          className="App"
          sx={{ display: "flex", flexDirection: "column" }}
        ></Box>
      </>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
