import { Container, Input, Text, Box } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <>
      <Container maxW={"container.lg"} p={10} gap={5}>
        <Input
          placeholder="Search for restaurant, and Food"
          w={"full"}
          h={"60px"}
          borderColor={"gray.600"}
        />
        <Box mt={10}>
          <Text fontWeight={"bold"} textAlign={"left"} fontSize={"25px"}>
            Popular Cuisines
          </Text>
        </Box>
      </Container>
    </>
  );
}
