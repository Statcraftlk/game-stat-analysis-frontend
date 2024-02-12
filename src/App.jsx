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

import { BrowserRouter } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
export const SearchContext = createContext(); // Create a context to store the search input value
function App() {
  // Code for the theme setup start
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // Check if the user has set a dark mode preference using their OS settings
  const [mode, setMode] = useState(
    localStorage.getItem("darkMode") // Get the mode from local storage if it's available
      ? localStorage.getItem("darkMode") // If it's not available, use the prefersDarkMode value
      : prefersDarkMode
      ? "dark" // If the user has a dark mode preference, use the dark mode
      : "light" // If the user has no OS preference, use the light mode
  );
  useEffect(() => {
    localStorage.setItem("darkMode", mode); // Save the mode to local storage, will change the mode to the value of the mode state
  }, [mode]);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // Code for the theme setup end

  const [search, setSearch] = useState({ search: "" }); // Create a state to store the search input value

  const updateSearchInputs = (input, value) => {
    setSearch((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  }; // Create a function to update the search input value
  return (
    <>
      <SearchContext.Provider value={{ search, updateSearchInputs }}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                minHeight: "100vh", // Ensure the box takes up the full height of the viewport
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Navbar setMode={setMode} mode={mode} />
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={{ xs: 0, md: 2 }} // Add the spacing prop here
                flex="1"
              >
                <Sidebar setMode={setMode} mode={mode} />
                <ContentArea />
              </Stack>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </SearchContext.Provider>
    </>
  );
}

export default App;
