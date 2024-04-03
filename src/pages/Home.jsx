import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Circle from "./components/Circle";
import Footer from "../components/Footer";
export default function Home() {
  let [scroll, setscroll] = React.useState(0);
  let [data, setdata] = React.useState([]);

  React.useEffect(() => {
    fetch(`.././db.json`)
      .then((res) => res.json())
      .then((res) =>
        setdata(res?.data?.cards[0]?.card?.card?.imageGridCards?.info)
      )
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <Box w={"80%"} margin={"auto"} className="mt-20 p-2   ">
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            What's on your mind?
          </Text>
          <Flex gap={5} justifyContent={"space-between"}>
            <FaRegArrowAltCircleLeft
              size={"25"}
              cursor={"pointer"}
              onClick={() => {
                setscroll(scroll + 300);
              }}
            />
            <FaRegArrowAltCircleRight
              size={"25"}
              cursor={"pointer"}
              onClick={() => {
                setscroll(scroll - 300);
              }}
            />
          </Flex>
        </Flex>
        <Box mt={10} id="scr" className="flex overflow-auto ">
          {data &&
            data.map((item) => {
              return <Circle val={scroll} key={item?.id} data={item} />;
            })}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
