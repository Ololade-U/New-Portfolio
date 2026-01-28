import { useObserve } from "../hooks/Observe";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";
import { IoMdPerson } from "react-icons/io";
import useStoreQuery from "./Store";
import { useEffect } from "react";

const About = () => {
  const { componentRef, isInView } = useObserve();
  const setActive = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActive("About");
    }
  }, [isInView, setActive]);

  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        // w={{mdDown : '93vw'}}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={"3rem"}
        id="about"
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <IoMdPerson size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              ABOUT ME
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"2rem"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={"4xl"}
            >
              About{" "}
              <Heading fontSize={"4xl"} fontWeight={"bold"} color={"#00BC91"}>
                Me
              </Heading>
            </Heading>
            <Text
              color={"#999999"}
              fontSize={{ mdTo2xl: "1.1rem", mdDown: "1rem" }}
            >
              I'm a frontend developer with a keen eye for detail and an
              obsession with building user-friendly, performant, and accessible
              websites. I specialize in HTML, CSS, Tailwind CSS, JavaScript, and
              TypeScript, working primarily with React and Next.js.
            </Text>
            <HStack
              flexWrap={"wrap"}
              justifyContent={{ mdTo2xl: "space-between" }}
              color={"#999999"}
            >
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Web Design (95%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"UI/UX (90%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Project Mgt (80%)"}
              </Text>
              <Text
                border={"1px dashed #585858ff"}
                p={".2rem 1rem"}
                borderRadius={"1rem"}
              >
                {"Research (85%)"}
              </Text>
            </HStack>
            <HStack
              flexDirection={{ mdDown: "column" }}
              w={{ mdTo2xl: "75%", mdDown: "100%" }}
              gap={{ mdTo2xl: "5.5rem" }}
              // justifyContent={{ mdTo2xl: "center" }}
              alignItems={{ mdDown: "flex-start" }}
            >
              <Stack w={"100%"}>
                <Flex
                  w={{ mdTo2xl: "24vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".8rem" }}
                      color={"#999999"}
                    >
                      Phone
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={{ mdTo2xl: ".9rem", mdDown: ".7rem" }}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                    // minW={'22ch'}
                  >
                    {"+(234) 906 8464 735"}
                  </Text>
                </Flex>
                <Flex
                  w={{ mdTo2xl: "24vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".8rem" }}
                      color={"#999999"}
                    >
                      WhatsApp
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={{ mdTo2xl: ".9rem", mdDown: ".7rem" }}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    {"+(234) 906 8464 735"}
                  </Text>
                </Flex>
                <Flex
                  w={{ mdTo2xl: "24vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".8rem" }}
                      color={"#999999"}
                    >
                      Language
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    English, Arabic
                  </Text>
                </Flex>
              </Stack>
              <Stack w={{ mdDown: "100%" }}>
                <Flex
                  alignItems={"center"}
                  w={{ mdTo2xl: "25vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".8rem" }}
                      color={"#999999"}
                    >
                      Email
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Tooltip content="adebayouthman852@gmail.com">
                    <Text
                      cursor={"pointer"}
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".7rem" }}
                      w={"50%"}
                      textAlign={"left"}
                      color={"white"}
                      textWrap={"nowrap"}
                      textOverflow={"ellipsis"}
                      overflow={"hidden"}
                    >
                      adebayouthman852@gmail.com
                    </Text>
                  </Tooltip>
                </Flex>
                <Flex
                  w={{ mdTo2xl: "25vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".8rem" }}
                      color={"#999999"}
                    >
                      LinkedIn
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Tooltip content="linkedin.com/in/adebayo-uthman-38aaa1266/">
                    <Text
                      cursor={"pointer"}
                      fontSize={{ mdTo2xl: ".9rem", mdDown: ".7rem" }}
                      w={"50%"}
                      textAlign={"left"}
                      color={"white"}
                      textWrap={"nowrap"}
                      maxW={"45ch"}
                      textOverflow={"ellipsis"}
                      // bg={'red'}
                      overflow={"hidden"}
                    >
                      linkedin.com/in/adebayo-uthman-38aaa1266/
                    </Text>
                  </Tooltip>
                </Flex>
                <Flex
                  w={{ mdTo2xl: "25vw", mdDown: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    w={"40%"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={".9rem"} color={"#999999"}>
                      Portfolio
                    </Text>
                    <Text fontSize={".9rem"} color={"#999999"}>
                      :
                    </Text>
                  </Box>
                  <Text
                    fontSize={".9rem"}
                    w={"50%"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    ***********
                  </Text>
                </Flex>
              </Stack>
            </HStack>
            <HStack
              justifyContent={"space-between"}
              gap={"2rem"}
              flexWrap={"wrap"}
            >
              <Stack w={{ mdDown: "40%" }} gap={"0"}>
                <Heading
                  fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                >
                  10+
                </Heading>
                <Text color={"#999999"}>Years Of Experience</Text>
              </Stack>
              <Stack w={{ mdDown: "40%" }} gap={"0"}>
                <Heading
                  fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                >
                  30+
                </Heading>
                <Text color={"#999999"}>Handled Projects</Text>
              </Stack>
              <Stack w={{ mdDown: "40%" }} gap={"0"}>
                <Heading
                  fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                >
                  100+
                </Heading>
                <Text color={"#999999"}>People Trained</Text>
              </Stack>
              <Stack w={{ mdDown: "40%" }} gap={"0"}>
                <Heading
                  fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
                  fontWeight={"bold"}
                  color={"#00BC91"}
                >
                  20+
                </Heading>
                <Text color={"#999999"}>Consultancy Services</Text>
              </Stack>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default About;
