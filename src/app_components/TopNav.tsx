import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/port logo.webp";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import useStoreQuery from "./Store";

const TopNav = () => {
  const active = useStoreQuery((s) => s.activeNav);

  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Box position={"relative"} w={"100vw"}>
        <Box
          position={"fixed"}
          h={"12vh"}
          w={"100%"}
          zIndex={"5000"}
          hideFrom={"md"}
          mb={"1rem"}
          p={"1rem"}
          bg={"rgba(250,250,250,.2)"}
          backdropFilter={"blur(10px)"}
          boxShadow={"0 0 10px rgba(0,0,0,.3)"}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Flex alignItems={"center"} gap={".5rem"}>
              <Image src={logo} w={"1.5rem"} />
              <Heading>Oscar Obiora</Heading>
            </Flex>
            <Box
              p={".5rem"}
              bg={"rgba(0,0,0,.2)"}
              borderRadius={"50%"}
              cursor={"pointer"}
              onClick={() => {
                MenuOpen ? setMenuOpen(false) : setMenuOpen(true);
              }}
            >
              <TbMenuDeep size={"1.5rem"} />
            </Box>
          </HStack>
        </Box>

        <Box
          position={"fixed"}
          zIndex={"5000"}
          top={"12vh"}
          left={"-70vw"}
          height={"88vh"}
          width={"70vw"}
          bg={"#212223"}
          className={MenuOpen ? "openMenu" : ""}
          transitionProperty={"className"}
          transitionDuration={".3s"}
          hideFrom={"md"}
        >
          <Heading m={"1rem 2rem"}>Menu</Heading>
          <Stack alignItems={"center"} gap={".7rem"}>
            <HashLink smooth to={"#home"} onClick={() => setMenuOpen(false)}>
              <Text
                color={active === "Home" ? "white" : "#999999"}
                fontWeight={active === "Home" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Home
              </Text>
            </HashLink>
            <HashLink smooth to={"#about"} onClick={() => setMenuOpen(false)}>
              <Text
                color={active === "About" ? "white" : "#999999"}
                fontWeight={active === "About" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                About
              </Text>
            </HashLink>
            <HashLink
              smooth
              to={"#services"}
              onClick={() => setMenuOpen(false)}
            >
              <Text
                color={active === "Services" ? "white" : "#999999"}
                fontWeight={active === "Services" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Services
              </Text>
            </HashLink>
            <HashLink smooth to={"#skills"} onClick={() => setMenuOpen(false)}>
              <Text
                color={active === "Skills" ? "white" : "#999999"}
                fontWeight={active === "Skills" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Skills
              </Text>
            </HashLink>
            <HashLink smooth to={"#resume"} onClick={() => setMenuOpen(false)}>
              <Text
                color={active === "Resume" ? "white" : "#999999"}
                fontWeight={active === "Resume" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Resume
              </Text>
            </HashLink>
            <HashLink
              smooth
              to={"#portfolio"}
              onClick={() => setMenuOpen(false)}
            >
              <Text
                color={active === "Portfolio" ? "white" : "#999999"}
                fontWeight={active === "Portfolio" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Portfolio
              </Text>
            </HashLink>
            <HashLink
              smooth
              to={"#testimonials"}
              onClick={() => setMenuOpen(false)}
            >
              <Text
                color={active === "Testimonials" ? "white" : "#999999"}
                fontWeight={active === "Testimonials" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Testimonials
              </Text>
            </HashLink>
            <HashLink smooth to={"#contact"} onClick={() => setMenuOpen(false)}>
              <Text
                color={active === "Contact" ? "white" : "#999999"}
                fontWeight={active === "Contact" ? "bold" : "normal"}
                fontSize={"1.2rem"}
              >
                Contact
              </Text>
            </HashLink>
          </Stack>
        </Box>

        <Box
          position={"fixed"}
          top={"12vh"}
          w={"100vw"}
          h={"88vh"}
          bg={"rgba(0, 0, 0,.4)"}
          zIndex={"4000"}
          backdropFilter={"blur(10px)"}
          display={MenuOpen ? "block" : "none"}
          onClick={() => setMenuOpen(false)}
        ></Box>
      </Box>
    </>
  );
};

export default TopNav;
