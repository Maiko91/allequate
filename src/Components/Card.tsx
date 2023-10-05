import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CardMedia, Rating } from "@mui/material";
import CardType from "../Types/CardType";

const Card: React.FC<CardType> = ({
  id,
  picture,
  description,
  price,
  subText,
  raiting,
  link,
}) => {
  return (
    <Box sx={containerStyle}>
      <Box>
        <CardMedia
          component="img"
          image={picture}
          alt={"Product" + id}
          sx={imageStyle}
        />
        <Typography sx={descriptionStyle}>{description}</Typography>
        <Typography sx={priceStyle}>{price}</Typography>
        <Typography sx={subTextStyle}>{subText}</Typography>
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
          <Button variant="contained" href={link}>
            Go To Amazon
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "259px",
  minWidth: "110px",
  margin: "20px",
  padding: "15px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

const imageStyle = {
  margin: "5px",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  width: "auto",
  alignSelf: "center",
};

const descriptionStyle = {
  color: "#19191D",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "2.5%",
  margin: "5px",
};
const priceStyle = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "36px",
  margin: "5px",
};
const subTextStyle = {
  color: "#787885",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "1.8%",
  margin: "5px",
};

export default Card;
