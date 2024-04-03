import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Center className="w-full h-[450px] bg-[#02060c] mt-64">
        <Box className="w-[80%]    grid grid-cols-4 md:grid-cols-4 midi:grid-cols-2 ">
          <Box>
            <Box className="p-10 text-white flex justify-center ">
              <SiSwiggy size={"50"} />
              <Text className="text-3xl font-bold mt-2">Swiggy</Text>
            </Box>
            `
            <Text className="text-lg mt-2 text-[#9a9b9e]">
              © 2024 Bundl Technologies Pvt. Ltd
            </Text>
          </Box>
          <Box className="p-10  text-white  ">
            <Text className="text-xl font-bold">Company</Text>
            <Link to="/about">
              <Text className="text-lg mt-2 text-[#9a9b9e]">About</Text>
            </Link>
            <Link to="/careers">
              <Text className="text-lg mt-2 text-[#9a9b9e]">Careers</Text>
            </Link>
            <Link to="/team">
              <Text className="text-lg mt-2 text-[#9a9b9e]">Team</Text>
            </Link>

            <Link to="/swiggy-one">
              <Text className="text-lg mt-2 text-[#9a9b9e]">Swiggy One</Text>
            </Link>
            <Link to="/swiggy-instmart">
              <Text className="text-lg mt-2 text-[#9a9b9e]">
                Swiggy Instmart
              </Text>
            </Link>
            <Link to="/swiggy-genie">
              <Text className="text-lg mt-2 text-[#9a9b9e]">Swiggy Genie</Text>
            </Link>
          </Box>
          <Box className="p-10   text-white  ">
            <Text className="text-xl font-bold">Contact Us</Text>
            <Link to={"help-and-support"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">
                Help & Support{" "}
              </Text>
            </Link>
            <Link to={"partner"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">
                Partener With Us
              </Text>
            </Link>
            <Link to={"ride"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">Ride With us</Text>
            </Link>
            <br />
            <Text className="text-xl font-bold">Legal</Text>
            <Link to={"/terms-and-condition"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">
                Terms & Condition
              </Text>
            </Link>
            <Link to={"/cookie-policy"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">Cookie Policy</Text>
            </Link>
            <Link to={"/privacy-policy"}>
              <Text className="text-lg mt-2 text-[#9a9b9e]">
                Privacy Policy
              </Text>
            </Link>
          </Box>
          <Box className="p-10 text-white  ">
            <Text className="text-xl font-bold">We Deliver to</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Delhi</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Mumbai</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Gurgaon</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Pune</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Lucknow</Text>
            <Text className="text-lg mt-2 text-[#9a9b9e]">Hyderabad</Text>
          </Box>
        </Box>
      </Center>
    </>
  );
}
