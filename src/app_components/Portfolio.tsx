import {
  Box,
  Stack,
  Text,
  Flex,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaListCheck } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import movie from "../assets/MovieXYZ - Google Chrome 8_20_2025 11_47_13 AM.png";
import local from "../assets/local.png";
import brick from "../assets/Screenshot (1).png";
import nitt from "../assets/Nitt.png";
import { useObserve } from "../hooks/Observe";
import useStoreQuery from "./Store";
import { useEffect } from "react";

const Portfolio = () => {
  const moviesStack = [
    "React",
    "TypeScript",
    "Chakra UI",
    "TMDB API",
    "Zustand",
  ];
  const localStack = [
    "NextJS",
    "TypeScript",
    "Chakra UI",
    "MySQL",
    "NextAuth",
    "Cloudinary",
  ];
  const brickStack = ["HTML Canvas 5", "JavaScript"];
  const nittStack = [
    "React",
    "TypeScript",
    "Chakra UI",
    "MongoDb",
    "NextAuth",
    "NestJs",
  ];

  const { componentRef, isInView } = useObserve();
  const setActive = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActive("Portfolio");
    }
  }, [isInView, setActive]);
  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={{ mdTo2xl: "3rem", mdDown: "1.5rem" }}
        id="portfolio"
      >
        <Stack alignItems={"flex-start"} gap={"1.5rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <FaListCheck size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              PORTFOLIO
            </Text>
          </Flex>

          <Flex flexDirection={"column"} gap={"2rem"} w={"100%"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
            >
              Personal{" "}
              <Heading
                fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
                fontWeight={"bold"}
                color={"#00BC91"}
              >
                Projects
              </Heading>
            </Heading>
            <Text
              color={"#999999"}
              fontSize={{ mdTo2xl: "1.1rem", mdDown: "1rem" }}
            >
              Explore my work and see how I have helped businesses and
              individuals bring their digital ideas to life. From web design to
              software development, my portfolio showcases a range of projects
              that highlight my skills and creativity.
            </Text>
          </Flex>
          <Flex
            justifyContent={{ mdTo2xl: "space-between", mdDown: "center" }}
            flexWrap={"wrap"}
            gap={"2rem"}
          >
            <Box
              py={"1rem"}
              w={{ smDown: "85%", lgDown: "85%", lgTo2xl: "45%" }}
              borderRadius={"1rem"}
              border={"#999999 1px solid"}
              _hover={{
                transform: "scale(1.03)",
                border: "1.5px solid #b8b6b6ff",
              }}
              transitionProperty={"transorm border"}
              transitionDuration={".3s"}
            >
              <Image border={"none"} src={movie} mb={"1rem"} />
              <Stack px={"1rem"}>
                <Text
                  px={".5rem"}
                  borderRadius={"2rem"}
                  display={"inline"}
                  alignSelf={"flex-start"}
                  fontWeight={"bold"}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  border={{
                    _light: "1px solid black",
                    _dark: "1px solid #e3e3e3",
                  }}
                >
                  Movie Recommendation Website
                </Text>
                <Heading fontSize={"2xl"} fontWeight={"bold"}>
                  MovieXYZ
                </Heading>
                <Text>
                  A movie recommendation site that provides you with the lastest
                  movies and series update and also allows you filter by genre,
                  search and fan rating.
                </Text>
                <Flex
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  gap={".4rem"}
                  my={".3rem"}
                >
                  {moviesStack.map((tech) => (
                    <Text
                      opacity={{ _light: ".7" }}
                      color={{ _dark: "black" }}
                      fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                      fontWeight={"semibold"}
                      bgColor={"#ebebebff"}
                      p={".2rem .7rem"}
                      borderRadius={"1rem"}
                    >
                      {tech}
                    </Text>
                  ))}
                </Flex>
                <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
                  <a href="https://moviessxyz.netlify.app/" target="_blank">
                    <IoLink size={"1.8rem"} />
                  </a>
                  <a
                    href="https://github.com/Ololade-U/MovieXYZ"
                    target="_blank"
                  >
                    <VscGithubAlt size={"1.8rem"} />
                  </a>
                </Flex>
              </Stack>
            </Box>
            <Box
              py={"1rem"}
              w={{ smDown: "85%", lgDown: "85%", lgTo2xl: "45%" }}
              borderRadius={"1rem"}
              border={"#999999 1px solid"}
              _hover={{
                transform: "scale(1.03)",
                border: "1.5px solid #b8b6b6ff",
              }}
              transitionProperty={"transorm border"}
              transitionDuration={".3s"}
            >
              <Image border={"none"} src={local} mb={"1rem"} />
              <Stack px={"1rem"}>
                <Text
                  px={".5rem"}
                  borderRadius={"2rem"}
                  display={"inline"}
                  alignSelf={"flex-start"}
                  fontWeight={"bold"}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  border={{
                    _light: "1px solid black",
                    _dark: "1px solid #e3e3e3",
                  }}
                >
                  E-commerce Website
                </Text>
                <Heading fontSize={"2xl"} fontWeight={"bold"}>
                  Fresh Harvest Hub
                </Heading>
                <Text>
                  An e-commerce platform that connects local farmers with
                  consumers eliminating third parties, providing fresh and
                  organic produce directly from the farm to your doorstep.
                </Text>
                <Flex
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  gap={".4rem"}
                  my={".3rem"}
                >
                  {localStack.map((tech) => (
                    <Text
                      opacity={{ _light: ".7" }}
                      color={{ _dark: "black" }}
                      fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                      fontWeight={"semibold"}
                      bgColor={"#ebebebff"}
                      p={".2rem .7rem"}
                      borderRadius={"1rem"}
                    >
                      {tech}
                    </Text>
                  ))}
                </Flex>
                <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
                  <a href="https://local-line.netlify.app/" target="_blank">
                    <IoLink size={"1.8rem"} />
                  </a>
                  <a href="https://github.com/Ololade-U/e-farm" target="_blank">
                    <VscGithubAlt size={"1.8rem"} />
                  </a>
                </Flex>
              </Stack>
            </Box>
            <Box
              py={"1rem"}
              w={{ smDown: "85%", lgDown: "85%", lgTo2xl: "45%" }}
              borderRadius={"1rem"}
              border={{
                _dark: "1.5px solid #f3f3f3ff",
                _light: "1.5px solid #e3e3e3",
              }}
              _hover={{
                _dark: {
                  transform: "scale(1.03)",
                  border: "1.5px solid #b8b6b6ff",
                },
                _light: {
                  transform: "scale(1.03)",
                  border: "1.5px solid black",
                },
              }}
              transitionProperty={"transorm border"}
              transitionDuration={".3s"}
            >
              <Image border={"none"} src={brick} mb={"1.5rem"} />
              <Stack px={"1rem"}>
                <Text
                  px={".5rem"}
                  borderRadius={"2rem"}
                  display={"inline"}
                  alignSelf={"flex-start"}
                  fontWeight={"bold"}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  border={"#999999 1px solid"}
                >
                  Brick Breaker Game
                </Text>
                <Heading fontSize={"2xl"} fontWeight={"bold"}>
                  Brick Breaker
                </Heading>
                <Text>Fun and games.</Text>
                <Flex
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  gap={".4rem"}
                  my={".3rem"}
                >
                  {brickStack.map((tech) => (
                    <Text
                      opacity={{ _light: ".7" }}
                      color={{ _dark: "black" }}
                      fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                      fontWeight={"semibold"}
                      bgColor={"#ebebebff"}
                      p={".2rem .7rem"}
                      borderRadius={"1rem"}
                    >
                      {tech}
                    </Text>
                  ))}
                </Flex>
                <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
                  <a
                    href="https://brick-breakerapp.netlify.app/"
                    target="_blank"
                  >
                    <IoLink size={"1.8rem"} />
                  </a>
                  <a
                    href="https://github.com/Ololade-U/Brick-breaker"
                    target="_blank"
                  >
                    <VscGithubAlt size={"1.8rem"} />
                  </a>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Stack>
        <Stack mt={"3rem"}>
          <Flex flexDirection={"column"} gap={"2rem"} w={"100%"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
            >
              Featured{" "}
              <Heading
                fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
                fontWeight={"bold"}
                color={"#00BC91"}
              >
                Projects
              </Heading>
            </Heading>
            <HStack justifyContent={{mdTo2xl : 'space-between', mdDown : 'center'}}>
              <Box
                py={"1rem"}
                w={{ smDown: "85%", lgDown: "75%", lgTo2xl: "45%" }}
                borderRadius={"1rem"}
                border={"#999999 1px solid"}
                _hover={{
                  transform: "scale(1.03)",
                  border: "1.5px solid #b8b6b6ff",
                }}
                transitionProperty={"transorm border"}
                transitionDuration={".3s"}
              >
                <Image border={"none"} src={nitt} mb={"1rem"} />
                <Stack px={"1rem"}>
                  <Text
                    px={".5rem"}
                    borderRadius={"2rem"}
                    display={"inline"}
                    alignSelf={"flex-start"}
                    fontWeight={"bold"}
                    fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                    border={{
                      _light: "1px solid black",
                      _dark: "1px solid #e3e3e3",
                    }}
                  >
                    Metrics and Data Management
                  </Text>
                  <Heading fontSize={"2xl"} fontWeight={"bold"}>
                    NITT
                  </Heading>
                  <Text>
                    I featured as a frontend developer in the development of
                    this metrics and data management platform for the National
                    institute of Transport Technology (NITT).
                  </Text>
                  <Flex
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    gap={".4rem"}
                    my={".3rem"}
                  >
                    {nittStack.map((tech) => (
                      <Text
                        opacity={{ _light: ".7" }}
                        color={{ _dark: "black" }}
                        fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                        fontWeight={"semibold"}
                        bgColor={"#ebebebff"}
                        p={".2rem .7rem"}
                        borderRadius={"1rem"}
                      >
                        {tech}
                      </Text>
                    ))}
                  </Flex>
                  <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
                    <a href="https://local-line.netlify.app/" target="_blank">
                      <IoLink size={"1.8rem"} />
                    </a>
                    <a
                      href="https://github.com/Ololade-U/e-farm"
                      target="_blank"
                    >
                      <VscGithubAlt size={"1.8rem"} />
                    </a>
                  </Flex>
                </Stack>
              </Box>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Portfolio;
