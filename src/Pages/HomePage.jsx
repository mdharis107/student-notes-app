import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { products } from "../Components/Products";
import ProductCard from "../Components/ProductCard";
const HomePage = () => {
  return (
    <>
      <Box>
        <Grid
          p={{ base: 25, sm: 50, md: 100 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: "8", sm: "8", md: "16" }}
        >
          {products.map((ele) => {
            return (
              <Box key={ele.id}>
                <ProductCard
                  // id={ele.id}
                  desc={ele.description}
                  img={ele.image}
                  title={ele.title}
                  price={ele.price}
                />
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
