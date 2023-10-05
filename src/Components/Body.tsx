import * as React from "react";
import Card from "./Card";
import CardType from "../Types/CardType";
import productServices from "../Services/produt";
import { Box } from "@mui/material";

const Body = () => {
  const { data: allProducts, isFetching } = productServices.useGetAllProducts();

  return (
    <Box sx={{ display: "flex" }}>
      {!isFetching &&
        allProducts.map((product: CardType, index: number) => (
          <Card
            key={product.id + index}
            id={product.id}
            picture={product.picture}
            description={product.description}
            price={product.price}
            subText={product.subText}
            raiting={product.raiting}
            link={product.link}
          />
        ))}
    </Box>
  );
};

export default Body;
