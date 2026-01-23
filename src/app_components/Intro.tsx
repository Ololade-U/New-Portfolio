import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import main from "../assets/main logo.webp";
import { FaCheckDouble } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import myPic from "../assets/Oscar.jpg";
import { useObserve } from "../hooks/Observe";
import useStoreQuery from "./Store";
import { useEffect } from "react";

const Intro = () => {
  const { componentRef, isInView } = useObserve();
  const setActive = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActive("Home");
    }
  }, [isInView, setActive]);

  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        // w={{mdDown : '93vw'}}
        // mx={{mdDown : '1rem'}}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={{mdTo2xl :"3rem", mdDown : '1.5rem'}}
        id="intro"
        position={'relative'}
      >
        <Stack alignItems={"flex-start"} gap={"1.5rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <IoHome size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              INTRODUCTION
            </Text>
          </Flex>
          <HStack
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} gap={"1.5rem"}>
              <Image src={main} w={"15rem"} />
              <Heading
                fontSize={"4xl"}
                fontWeight={"bold"}
                color={"white"}
                lineHeight={1}
              >
                Bringing Your <br />{" "}
                <Heading
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                  lineHeight={1}
                >
                  Dreams to Reality
                </Heading>{" "}
              </Heading>
              <Text color={"#999999"} maxW={{mdTo2xl : "40ch"}}>
                Welcome to the official website of Oscar Obiora, a
                multidisciplinary specialist in project management, strategic
                planning, entrepreneurship, business strategy and IT
                consultancy.
              </Text>
              <HStack gap={"2rem"}>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <FaCheckDouble fill="#00BC91" />
                  <Text color={"#999999"}>Available for work</Text>
                </Flex>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <FaCheckDouble fill="#00BC91" />
                  <Text color={"#999999"}>Full/Part Time Job</Text>
                </Flex>
              </HStack>
              <Button
                fontSize={{mdTo2xl : "1.1rem", mdDown : '.9rem'}}
                w={"50%"}
                bg={"#00BC91"}
                py={{mdTo2xl :"1.8rem", mdDown : '1.2rem'}}
                px={{mdTo2xl : '.5rem', mdDown : '1rem'}}
                borderRadius={"2rem"}
                color={'white'}
              >
                <FaTelegramPlane size={"1.3rem"} fill="white" />
                LET'S TALK
              </Button>
            </Flex>
            <Image
              hideBelow={"md"}
              borderRadius={"3rem"}
              w={"23vw"}
              src={myPic}
              h={"60vh"}
            />
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default Intro;
