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
    <Card sx={{ maxWidth: 280, height: 350, padding: 2 }} elevation={6}>
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
            <li>Maxlevel : {props.maxlevel}</li>
            {props.evolevel ? (
              <li>Max evolution level : {props.evolevel}</li>
            ) : (
              ""
            )}
            <li>Elixr Cost: {props.elixr}</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Champion;
