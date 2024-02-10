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
    <Card sx={{ maxWidth: 300, height: 650, padding: 2 }} elevation={6}>
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
        height="60%"
        image={props.img}
        alt="Paella dish"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Champion;
