import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PiToolboxFill } from "react-icons/pi";
import { SlRocket } from "react-icons/sl";
import { PiStrategyThin } from "react-icons/pi";
import { MdOutlineFolderShared } from "react-icons/md";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import { useObserve } from "../hooks/Observe";
import useStoreQuery from "./Store";

const Services = () => {
  const [active, setActive] = useState(0);
  const { componentRef, isInView } = useObserve();
  const setActiveNav = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActiveNav("Service");
    }
  }, [isInView, setActiveNav]);
  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem 1rem"}
        w={{ mdDown: "93vw" }}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={{ mdTo2xl: "3rem", mdDown: "1.5rem" }}
        id="services"
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <PiToolboxFill size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              SERVICES
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
              My{" "}
              <Heading fontSize={"4xl"} fontWeight={"bold"} color={"#00BC91"}>
                Services
              </Heading>
            </Heading>
            <Text
              color={"#999999"}
              fontSize={{ mdTo2xl: "1.1rem", mdDown: "1rem" }}
            >
              Your business deserves solutions that are as unique and dynamic as
              your vision. I offer a wide range of services designed to meet the
              diverse needs of my clients, from creative design to technical
              development and strategic consultancy.
            </Text>
            <HStack
              w={"100%"}
              justifyContent={{ mdTo2xl: "space-between", mdDown: "center" }}
              alignItems={'stretch'}
              flexWrap={"wrap"}
              gap={"2rem"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"2rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(1)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 1 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    01
                  </Heading>
                  <SlRocket
                    className={active == 1 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  Website Design
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  From concept to launch, I create responsive, user-friendly
                  websites that stand out. My designs are not only visually
                  appealing but also optimized for performance and user
                  experience
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(2)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 2 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    02
                  </Heading>
                  <PiMicrosoftExcelLogoThin
                    className={active == 2 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  UI/UX
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  I specialize in creating intuitive and engaging user
                  interfaces that not only look great but also enhance the
                  overall user experience. By focusing on the needs and
                  behaviours of your users, I design seamless, interactive
                  experiences that drive engagement and satisfaction.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(3)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 3 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    03
                  </Heading>
                  <PiStrategyThin
                    className={active == 3 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  Software Development
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  I develop robust, scalable applications that meet your
                  business needs. With expertise in both front-end and back-end
                  development, I ensure seamless functionality across all
                  platforms.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(4)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 4 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    04
                  </Heading>
                  <MdOutlineFolderShared
                    className={active == 4 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  Project Management
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  I offer IT project management services that keep your projects
                  on track, within budget, and aligned with your strategic
                  goals. From planning to execution, I manage every aspect with
                  attention to detail.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(5)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 5 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    05
                  </Heading>
                  <SlRocket
                    className={active == 5 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  IT Consultancy
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  I provide expert advice to help you optimize your IT
                  infrastructure, improve efficiency, and stay ahead of the
                  competition. My consultancy services are tailored to meet the
                  unique challenges of your business.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                border={"1px solid #3d3d3dff"}
                w={{ mdTo2xl: "47%" }}
                p={"2rem 1.6rem"}
                borderRadius={"1rem"}
                transitionProperty={"border"}
                transitionDuration={".2s"}
                _hover={{ border: "1px solid #00BC91" }}
                onMouseEnter={() => setActive(6)}
                onMouseLeave={() => setActive(0)}
              >
                <Flex
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={"1.5rem"}
                >
                  <Heading
                    color={"transparent"}
                    transitionProperty={"-webkit-text-stroke"}
                    transitionDuration={".2s"}
                    WebkitTextStroke={
                      active == 6 ? "1.5px white" : "1.5px #606060ff"
                    }
                    fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
                  >
                    06
                  </Heading>
                  <PiStrategyThin
                    className={active == 6 ? "rotate" : "reverse"}
                    size={"1.7rem"}
                    fill="#00BC91"
                  />
                </Flex>
                <Heading
                  color={"white"}
                  fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
                >
                  Collaborations
                </Heading>
                <Text color={"#999999"} fontSize={"17px"}>
                  I offer IT project management services that keep your projects
                  on track, within budget, and aligned with your strategic
                  goals. From planning to execution, I manage every aspect with
                  attention to detail.
                </Text>
              </Box>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Services;
