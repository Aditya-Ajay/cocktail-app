import React from "react";
import { Header, Slider, Main } from ".";
import { Box } from "@chakra-ui/react";
const Comp = () => {
  return (
    <div>
      <Box className="box">
        <Header />
        <Slider />
        <Main />
      </Box>
    </div>
  );
};

export default Comp;
