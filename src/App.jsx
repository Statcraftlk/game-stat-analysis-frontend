import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar setMode={setMode} mode={mode} />
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={{ xs: 0, md: 2 }} // Add the spacing prop here
            >
              <Sidebar setMode={setMode} mode={mode} />
              <ContentArea />
            </Stack>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
