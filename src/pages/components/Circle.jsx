import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Circle({ val, data }) {

  
  return (
    <Box
      minW={"144px"}
      minH={"180px"}
      transform={`translateX(${val}px)`}
      transition={"all 0.5s ease-in-out"}
    >
      <Image
        src={
           `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${data.imageId}`
        }
        alt={"swiggy"}
        w={"144px"}
        h={"180px"}
      />
    </Box>
  );
}
