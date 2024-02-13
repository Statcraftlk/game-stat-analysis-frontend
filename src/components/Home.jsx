/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"h4"}>Welcome to Game Stats API</Typography>
      <Typography variant={"h6"} fontWeight={300} pt={2}>
        Welcome to Game Stats API, your go-to hub for comprehensive game data!
        Whether you're a developer seeking to enhance your applications with
        detailed game statistics, or a gaming enthusiast hungry for in-depth
        insights into your favorite titles, you've landed in the right place.
        Our platform offers a vast collection of data from a wide range of
        games, covering everything from character details and item attributes to
        gameplay mechanics and more. With our user-friendly interface, exploring
        the world of gaming has never been easier. Dive in now and unlock a
        wealth of gaming knowledge at your fingertips with Game Stats API!
      </Typography>
    </Box>
  );
};

export default Home;
