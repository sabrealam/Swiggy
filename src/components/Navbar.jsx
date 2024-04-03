import React from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { SiSwiggy } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/Login";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Using useDisclosure hook to control Drawer state

  const handleSignInClick = () => {
    onOpen(); // Open the Drawer when Sign in is clicked
  };

  return (
    <>
      <Box
        shadow={
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        }
        className="w-1200 h-[80px] flex justify-between items-center  p-4 pl-24 pr-24 shrink-0 md:pl-4 md:pr-4 lg:pl-32 lg:pr-32 sm:pl-1 sm:pr-1 md:shrink-0 "
      >
        <Box className="w-48   flex justify-between items-center">
          <SiSwiggy
            size={"40"}
            color="red"
            onClick={() => (location.href = "/")}
            style={{ cursor: "pointer" }}
          />
          <Box className=" w-28   flex justify-between items-center">
            <Text>Search</Text>
            <IoIosArrowDown />
          </Box>
        </Box>

        {/* ------------------------------------------------------- */}

        <Box className="w-[550px]  flex justify-between items-center">
          <Link to={"/search"}>
            <Flex className=" w-20 justify-between items-center ">
              <IoSearch size={"24"} />
              <Text fontWeight={"bold"}>Search</Text>
            </Flex>
          </Link>
          <Link to="/offers">
            <Flex className=" w-20 justify-between items-center ">
              <BiSolidOffer size={"24"} />
              <Text fontWeight={"bold"}>Offers</Text>
            </Flex>
          </Link>
          <Link to={"/help"}>
            <Flex className=" w-20 justify-between items-center ">
              <IoHelpBuoyOutline size={"24"} />
              <Text fontWeight={"bold"}>Help</Text>
            </Flex>
          </Link>
          <Link to="/login">
            <Flex
              className=" w-20 justify-between items-center "
              onClick={handleSignInClick}
            >
              <CiUser size={"24"} />
              <Text fontWeight={"bold"}>Sign in</Text>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex className=" w-20 justify-between items-center ">
              <IoCartSharp size={"24"} />
              <Text fontWeight={"bold"}>Cart</Text>
            </Flex>
          </Link>
        </Box>
      </Box>
      {/* ------------------------------------------------------------------------ */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent p={5}>
          {/* <DrawerCloseButton /> */}
          <RxCross2 size={"30"} cursor={"pointer"} onClick={onClose} />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <Login/>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
