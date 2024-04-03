import React from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { SiSwiggy } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
export default function Navbar() {
  return (
    <>
      <Box shadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"} className="w-1200 h-[80px] flex justify-between items-center  p-4 pl-24 pr-24 shrink-0 md:pl-4 md:pr-4 lg:pl-32 lg:pr-32 sm:pl-1 sm:pr-1 md:shrink-0 ">
        <Box className="w-48   flex justify-between items-center">
          <SiSwiggy size={"40"} color="red" />
          <Box className=" w-28   flex justify-between items-center">
            <Text>Search</Text>
            <IoIosArrowDown />
          </Box>
        </Box>

        {/* ------------------------------------------------------- */}

        <Box className="w-[550px]  flex justify-between items-center">
          <Flex className=" w-20 justify-between items-center ">
            <IoSearch size={"24"} />
            <Text fontWeight={"bold"}>Search</Text>
          </Flex>
          <Flex className=" w-20 justify-between items-center ">
            <BiSolidOffer size={"24"} />
            <Text fontWeight={"bold"}>Offers</Text>
          </Flex>
          <Flex className=" w-20 justify-between items-center ">
            <IoHelpBuoyOutline size={"24"} />
            <Text fontWeight={"bold"}>Help</Text>
          </Flex>
          <Flex className=" w-20 justify-between items-center ">
            <CiUser size={"24"} />
            <Text fontWeight={"bold"}>Sign in</Text>
          </Flex>
          <Flex className=" w-20 justify-between items-center ">
            <IoCartSharp size={"24"} />
            <Text fontWeight={"bold"}>Cart</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
