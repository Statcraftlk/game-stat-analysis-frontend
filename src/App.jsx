import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : prefersDarkMode
      ? "dark"
      : "light"
  );
  console.log(localStorage.getItem("darkMode"));
  console.log(mode);
  useEffect(() => {
    localStorage.setItem("darkMode", mode);
  }, [mode]);
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
