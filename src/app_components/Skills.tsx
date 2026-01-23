import {
  AbsoluteCenter,
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  ProgressCircle,
  ScrollArea,
} from "@chakra-ui/react";
import { useState, useRef, type RefObject, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  PiMicrosoftExcelLogoLight,
  PiMicrosoftWordLogoLight,
  PiMicrosoftTeamsLogoLight,
  PiMicrosoftPowerpointLogoLight,
} from "react-icons/pi";
import useStoreQuery from "./Store";
import { useObserve } from "../hooks/Observe";

interface SkillsProps {}

const skillData = [
  { name: "Excel", value: 90, icon: PiMicrosoftExcelLogoLight },
  { name: "Word", value: 90, icon: PiMicrosoftWordLogoLight },
  { name: "Ms Teams", value: 75, icon: PiMicrosoftTeamsLogoLight },
  { name: "Power Point", value: 90, icon: PiMicrosoftPowerpointLogoLight },
  { name: "CSS/HTML", value: 80, icon: PiMicrosoftPowerpointLogoLight },
  { name: "NodeJs", value: 80, icon: PiMicrosoftPowerpointLogoLight },
  { name: "NextJs", value: 80, icon: PiMicrosoftPowerpointLogoLight },
];
const TOTAL_SKILLS = skillData.length;

const Skills: React.FC<SkillsProps> = () => {
  const [leftActive, setLeftActive] = useState<boolean>(false);
  const [rightActive, setRightActive] = useState<boolean>(false);

  const [currentScrollIndex, setCurrentScrollIndex] = useState(1);
  const [maxScrollIndex, setMaxScrollIndex] = useState(TOTAL_SKILLS);

  const scrollViewportRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const skillItemRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  const scrollDistance: number = 310;

  useEffect(() => {
    if (scrollViewportRef.current && skillItemRef.current) {
      const viewportWidth = scrollViewportRef.current.offsetWidth;

      const skillItemWidth = skillItemRef.current.offsetWidth;

      const visibleCount = Math.floor(viewportWidth / skillItemWidth);

      const calculatedMaxScrolls = TOTAL_SKILLS - visibleCount + 1;

      setCurrentScrollIndex(1);
      setMaxScrollIndex(calculatedMaxScrolls);
    }
  }, []);

  const handleScrollRight = (): void => {
    if (scrollViewportRef.current) {
      if (currentScrollIndex < maxScrollIndex) {
        scrollViewportRef.current.scrollBy({
          left: scrollDistance,
          behavior: "smooth",
        });
        setCurrentScrollIndex(currentScrollIndex + 1);
      }
    }
  };

  const handleScrollLeft = (): void => {
    if (scrollViewportRef.current) {
      if (currentScrollIndex > 1) {
        scrollViewportRef.current.scrollBy({
          left: -scrollDistance,
          behavior: "smooth",
        });
        setCurrentScrollIndex(currentScrollIndex - 1);
      }
    }
  };

  const { componentRef, isInView } = useObserve();
  const setActiveNav = useStoreQuery((s) => s.setActiveNav);

  useEffect(() => {
    if (isInView) {
      setActiveNav("Skills");
    }
  }, [isInView, setActiveNav]);

  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        // w={{mdDown : '93vw'}}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={{mdTo2xl :"3rem", mdDown : '1.5rem'}}
        overflowX={"hidden"}
        id="skills"
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <FaGraduationCap size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              SKILLS
            </Text>
          </Flex>

          <Flex flexDirection={"column"} gap={"3rem"} w="100%">
            <HStack
              alignItems={"center"}
              justifyContent="space-between"
              w="100%"
            >
              <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
                <Heading
                  fontWeight={"bold"}
                  color={"white"}
                  display={"flex"}
                  gap={".4rem"}
                  fontSize={"4xl"}
                >
                  My{" "}
                  <Heading
                    fontSize={"4xl"}
                    fontWeight={"bold"}
                    color={"#00BC91"}
                  >
                    Skills
                  </Heading>
                </Heading>
                <Text color={"#999999"} fontSize={"1.1rem"}>
                  My diverse skill set spans across multiple disciplines,
                  allowing me to deliver comprehensive solutions that are both
                  innovative and effective.
                </Text>
              </Box>

              <Flex hideBelow={'md'} alignItems={"center"} gap={"1rem"}>
                <Box
                  border={"1px solid #999999"}
                  p={".7rem .9rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  cursor={currentScrollIndex > 1 ? "pointer" : "not-allowed"}
                  opacity={currentScrollIndex > 1 ? 1 : 0.5}
                  _hover={currentScrollIndex > 1 ? { bg: "#00BC91" } : {}}
                  onMouseEnter={() => setLeftActive(true)}
                  onMouseLeave={() => setLeftActive(false)}
                  onClick={handleScrollLeft}
                  transitionProperty={"background"}
                  transitionDuration={".2s"}
                >
                  <FaArrowLeftLong
                    fill={
                      leftActive && currentScrollIndex > 1 ? "white" : "#999999"
                    }
                    size={"1.1rem"}
                  />
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Text color={"#00BC91"} fontSize={".8rem"}>
                    {currentScrollIndex}
                  </Text>
                  <Text color={"white"} fontSize={".8rem"}>
                    /{maxScrollIndex}
                  </Text>
                </Box>

                <Box
                  border={"1px solid #999999"}
                  p={".7rem .9rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  cursor={
                    currentScrollIndex < maxScrollIndex
                      ? "pointer"
                      : "not-allowed"
                  }
                  opacity={currentScrollIndex < maxScrollIndex ? 1 : 0.5}
                  _hover={
                    currentScrollIndex < maxScrollIndex ? { bg: "#00BC91" } : {}
                  }
                  onMouseEnter={() => setRightActive(true)}
                  onMouseLeave={() => setRightActive(false)}
                  onClick={handleScrollRight}
                  transitionProperty={"background"}
                  transitionDuration={".2s"}
                >
                  <FaArrowRightLong
                    fill={
                      rightActive && currentScrollIndex < maxScrollIndex
                        ? "white"
                        : "#999999"
                    }
                    size={"1.1rem"}
                  />
                </Box>
              </Flex>
            </HStack>

            <ScrollArea.Root size={"lg"}>
              <ScrollArea.Viewport
                ref={scrollViewportRef}
                style={{ overflowX: "hidden" }}
              >
                <ScrollArea.Content py="4">
                  <HStack
                    mt={"2rem"}
                    width="max-content"
                    gap="10px"
                    justifyContent={'center'}
                  >
                    {skillData.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <Flex
                          ref={index === 0 ? skillItemRef : null}
                          key={skill.name}
                          minW={{mdTo2xl : "170px", mdDown : '300px'}}
                          flexDirection={"column"}
                          gap={"4rem"}
                          alignItems={"center"}
                        >
                          <IconComponent size={"4rem"} fill="white" />
                          <ProgressCircle.Root
                            size={"xl"}
                            color={"#e3e3e3"}
                            fontWeight={"bolder"}
                            value={skill.value}
                            colorPalette={"green"}
                          >
                            <ProgressCircle.Circle
                              scale={"2"}
                              css={{ "--thickness": "1px" }}
                            >
                              <ProgressCircle.Track />
                              <ProgressCircle.Range />
                            </ProgressCircle.Circle>
                            <AbsoluteCenter>
                              <ProgressCircle.ValueText fontSize={"2xl"} />
                            </AbsoluteCenter>
                          </ProgressCircle.Root>
                          <Text color={"white"} fontSize={"xl"}>
                            {skill.name}
                          </Text>
                        </Flex>
                      );
                    })}
                  </HStack>
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Corner />
            </ScrollArea.Root>

            <Flex hideFrom={'md'} justifyContent={'center'} alignItems={"center"} gap={"1rem"}>
                <Box
                  border={"1px solid #999999"}
                  p={".7rem .9rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  cursor={currentScrollIndex > 1 ? "pointer" : "not-allowed"}
                  opacity={currentScrollIndex > 1 ? 1 : 0.5}
                  _hover={currentScrollIndex > 1 ? { bg: "#00BC91" } : {}}
                  onMouseEnter={() => setLeftActive(true)}
                  onMouseLeave={() => setLeftActive(false)}
                  onClick={handleScrollLeft}
                  transitionProperty={"background"}
                  transitionDuration={".2s"}
                >
                  <FaArrowLeftLong
                    fill={
                      leftActive && currentScrollIndex > 1 ? "white" : "#999999"
                    }
                    size={"1.1rem"}
                  />
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Text color={"#00BC91"} fontSize={".8rem"}>
                    {currentScrollIndex}
                  </Text>
                  <Text color={"white"} fontSize={".8rem"}>
                    /{maxScrollIndex}
                  </Text>
                </Box>

                <Box
                  border={"1px solid #999999"}
                  p={".7rem .9rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  cursor={
                    currentScrollIndex < maxScrollIndex
                      ? "pointer"
                      : "not-allowed"
                  }
                  opacity={currentScrollIndex < maxScrollIndex ? 1 : 0.5}
                  _hover={
                    currentScrollIndex < maxScrollIndex ? { bg: "#00BC91" } : {}
                  }
                  onMouseEnter={() => setRightActive(true)}
                  onMouseLeave={() => setRightActive(false)}
                  onClick={handleScrollRight}
                  transitionProperty={"background"}
                  transitionDuration={".2s"}
                >
                  <FaArrowRightLong
                    fill={
                      rightActive && currentScrollIndex < maxScrollIndex
                        ? "white"
                        : "#999999"
                    }
                    size={"1.1rem"}
                  />
                </Box>
              </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Skills;
