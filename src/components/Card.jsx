/* eslint-disable react/prop-types */
import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "@fontsource/poor-story";

const Champion = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 280,
        height: 350,
        padding: 2,
        boxShadow: props.imgEvo
          ? "0px 3px 5px -1px rgba(196, 65, 65, 0.4), 0px 6px 10px 0px rgba(196, 65, 65, 0.44), 0px 1px 18px 0px rgba(196, 65, 65, 0.44)"
          : "0px 3px 5px -1px rgba(65, 128, 196, 0.4), 0px 6px 10px 0px rgba(65, 128, 196, 0.44), 0px 1px 18px 0px rgba(65, 128, 196, 0.44)",
      }}
      elevation={6}
      className={props.evolevel ? "evo" : ""}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="avatar"
            src={props.icon}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={props.name}
        subheader={props.rarity.charAt(0).toUpperCase() + props.rarity.slice(1)}
      />
      <CardMedia
        component="img"
        height="40%"
        image={props.img}
        alt="Paella dish"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Poor Story, sans-serif",
            fontSize: "15px",
            fontWeight: "200",
            padding: 0,
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              textAlign: "center",
              marginLeft: "-40px",
              marginTop: "-5px",
            }}
          >
            <li>Name: {props.name}</li>
            <li>Maxlevel : {props.maxlevel}</li>
            {props.evolevel ? (
              <li>Max evolution level : {props.evolevel}</li>
            ) : (
              ""
            )}
            <li>Elixr Cost: {props.elixr}</li>
            <li>Evolution: {props.imgEvo ? "YES" : "NO"}</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Champion;
