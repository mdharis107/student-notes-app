import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { products } from "../Components/Products";
import ProductCard from "../Components/ProductCard";
const HomePage = () => {
  return (
    <>
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          {products.map((ele) => {
            <ProductCard
              id={ele.id}
              desc={ele.description}
              img={ele.img}
              title={ele.id}
              price={ele.price}
            />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
