import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardMedia, Rating } from "@mui/material";
import CardType from "../Types/CardType";

const Card: React.FC<CardType> = ({
  id,
  picture,
  description,
  price,
  subText,
  raiting,
}) => {
  return (
    <Box
      sx={{
        maxWidth: "259px",
        minWidth: "110px",
        maxHeight: "472px",
        margin: "20px",
        padding: "15px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={picture}
          alt={"Product"+ id}
          sx={{ margin: "5px" }}
        />
        <Typography
          sx={{
            color: "#19191D",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "2.5%",
            margin: "5px",
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "36px",
            margin: "5px",
          }}
        >
          {price}
        </Typography>
        <Typography
          sx={{
            color: "#787885",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "1.8%",
            margin: "5px",
          }}
        >
          {subText}
        </Typography>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="simple-controlled"
            value={raiting}
            onChange={(event, newValue) => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
