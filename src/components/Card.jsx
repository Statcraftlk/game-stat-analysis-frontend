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

const Champion = (props) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: "100%", md: "300px" },
        height: 350,
        padding: 2,
        boxShadow:
          "0px 3px 5px -1px rgba(65, 128, 196, 0.4), 0px 6px 10px 0px rgba(65, 128, 196,0.44), 0px 1px 18px 0px rgba(65, 128, 196,0.44)",
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
        <Typography variant="body2" color="text.secondary">
          <ul>
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
