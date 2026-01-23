import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  ProgressCircle,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import myImage from "../assets/Oscar passport.png";
import TextRotator from "./TextRotator";

const SideBar = () => {
  return (
    <>
      <Stack
        h={{mdTo2xl : "100%"}}
        alignItems={"center"}
        bg={"#212223"}
        p={{mdTo2xl : ".5rem 0", mdDown : "1.5rem 0"}}
        position={'relative'}
        top={{mdDown : '15vh'}}
        borderRadius={'1rem'}
        id="home"
      >
        <Flex
          mb={"1rem"}
          gap={"0"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            w={"9rem"}
            h={"9rem"}
            border={"5px solid #2F2F2F"}
            borderRadius={"50%"}
          >
            <Image w={"100%"} borderRadius={"50%"} h={"100%"} src={myImage} />
          </Box>
          <Heading color={"white"} fontWeight={"bolder"}>
            Oscar Obiora
          </Heading>
          <TextRotator />
        </Flex>
        <Separator borderColor={"#3d3d3dff"} w={"80%"} />
        <Box
          display={"flex"}
          mb={".9rem"}
          gap={".3rem"}
          flexDirection={"column"}
          w={"80%"}
        >
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Residence:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Nigeria
            </Text>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Location:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Lagos
            </Text>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={".9rem"} color={"white"}>
              Hobbies:
            </Text>
            <Text fontSize={".9rem"} color={"#999999"}>
              Reading, Movies
            </Text>
          </Flex>
        </Box>
        <Box
          p={{mdTo2xl : "1rem 0rem .2rem", mdDown : "1rem 0rem 1rem"}}
          w={"93%"}
          borderRadius={"1rem"}
          bg={"#2D2E2F"}
          h={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={'.5rem'}
        >
          <Heading pl={'1rem'} fontSize={"md"} color={"white"}>
            Skills
          </Heading>
          <HStack mb={{mdDown : '2rem'}} justifyContent={"space-between"} px={'.5rem'}>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={90}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text fontSize={'.9rem'} color={"white"}>Research</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={80}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text fontSize={'.9rem'} color={"white"}>Leadership</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={95}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text fontSize={'.9rem'} color={"white"}>Coaching</Text>
            </Stack>
            <Stack alignItems={"center"} gap={".5rem"}>
              <ProgressCircle.Root
                borderRadius={"50%"}
                w={"2.5rem"}
                color={"#e3e3e3"}
                fontWeight={"bolder"}
                position={"relative"}
                size={"md"}
                value={65}
                colorPalette={"green"}
              >
                <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <ProgressCircle.ValueText />
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text fontSize={'.9rem'} color={"white"}>Coding</Text>
            </Stack>
          </HStack>
          <Button
            mt={".2rem"}
            py={"1.3rem"}
            borderRadius={"2rem"}
            alignSelf={"center"}
            w={"90%"}
            bg={"#00BC91"}
            _hover={{bg : 'rgba(2, 116, 90, 1)'}}
          >
            VIEW/DOWNLOAD CV
          </Button>
          <Button
            mt={".2rem"}
            py={"1.3rem"}
            borderRadius={"2rem"}
            alignSelf={"center"}
            w={"90%"}
            bg={"none"}
            border={"1px solid #00BC91"}
            color={"#00BC91"}
            _hover={{ color: "white", bg: "#00BC91" }}
          >
            View LinkedIn Profile
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default SideBar;
