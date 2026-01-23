import {
  Box,
  Flex,
  Image,
  Stack,
  Menu,
  MenuTrigger,
  MenuContent,
  Link,
} from "@chakra-ui/react";
import logo from "../assets/port logo.webp";
import { IoHome } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { useRef, useState } from "react";
import { PiToolboxFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { Tooltip } from "../components/ui/tooltip";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import useStoreQuery from "./Store";

const NavBar = () => {
  // const [active, setActive] = useState("");

  const active = useStoreQuery((s) => s.activeNav);
  const setActive = useStoreQuery((s) => s.setActiveNav);

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const closeDelay = 150;

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, closeDelay);
  };

  const horizontalMenuItems = [
    {
      value: "Twitter",
      icon: <FaTwitter fill={active == "Twitter" ? "#00BC91" : "#686868ff"} />,
      link: "https://www.google.com",
    },
    {
      value: "LinkedIn",
      icon: (
        <FaLinkedinIn fill={active == "LinkedIn" ? "#00BC91" : "#686868ff"} />
      ),
      link: "https://www.google.com",
    },
  ];
  return (
    <Stack
      w={"90%"}
      h={"100%"}
      borderRadius={"3rem"}
      border={"1px solid #3d3d3dff"}
      alignItems={"center"}
      py={"1rem"}
      justifyContent={"space-between"}
    >
      <Box
        border={"1px solid #3d3d3dff"}
        w={"3.5rem"}
        h={"3.5rem"}
        borderRadius={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        p={".7rem"}
        cursor={"pointer"}
        _hover={{ bg: "rgba(250,250,250,.2)" }}
      >
        <Image src={logo} />
      </Box>
      <Flex gap={".5rem"} flexDirection={"column"}>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Home"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            bg={active === "Home" ? "rgba(250,250,250,.2)" : ""}
            onMouseEnter={() => setActive("Home")}
            onMouseLeave={() => setActive("")}
          >
            <IoHome
              size={"1.3rem"}
              fill={active === "Home" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="About"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            bg={active === "About" ? "rgba(250,250,250,.2)" : ""}
            onMouseEnter={() => setActive("About")}
            onMouseLeave={() => setActive("")}
          >
            <IoMdPerson
              size={"1.3rem"}
              fill={active === "About" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Service"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            bg={active === "Service" ? "rgba(250,250,250,.2)" : ""}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Service")}
            onMouseLeave={() => setActive("")}
          >
            <PiToolboxFill
              size={"1.3rem"}
              fill={active === "Service" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Skills"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            bg={active === "Skills" ? "rgba(250,250,250,.2)" : ""}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Skills")}
            onMouseLeave={() => setActive("")}
          >
            <FaGraduationCap
              size={"1.3rem"}
              fill={active === "Skills" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Resume"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            bg={active === "Resume" ? "rgba(250,250,250,.2)" : ""}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Resume")}
            onMouseLeave={() => setActive("")}
          >
            <FaFileAlt
              size={"1.3rem"}
              fill={active === "Resume" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Portfolio"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Portfolio")}
            onMouseLeave={() => setActive("")}
          >
            <FaListCheck
              size={"1.3rem"}
              fill={active === "Portfolio" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Testimonials"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Testimonial")}
            onMouseLeave={() => setActive("")}
          >
            <FaMessage
              size={"1.2rem"}
              fill={active === "Testimonial" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
        <Tooltip
          showArrow
          positioning={{ placement: "left" }}
          contentProps={{
            css: {
              "--tooltip-bg": "#212223",
              p: ".5rem 1rem",
              position: "relative",
              right: "-.2rem",
              color: "white",
            },
          }}
          content="Contact"
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={".5rem"}
            cursor={"pointer"}
            _hover={{ bg: "rgba(250,250,250,.2)" }}
            onMouseEnter={() => setActive("Contact")}
            onMouseLeave={() => setActive("")}
          >
            <IoIosMail
              size={"1.3rem"}
              fill={active === "Contact" ? "#00BC91" : "white"}
            />
          </Box>
        </Tooltip>
      </Flex>

      <Box pos={"relative"}>
        <Menu.Root
          open={open}
          onOpenChange={() => setOpen}
          positioning={{ placement: "left-start" }}
        >
          <MenuTrigger
            asChild
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              borderRadius={"50%"}
              border={"1px solid #3d3d3dff"}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              p={".5rem"}
              cursor={"pointer"}
              _hover={{ bg: "rgba(250,250,250,.2)" }}
            >
              <IoMdShare size={"1.3rem"} fill="white" />
            </Box>
          </MenuTrigger>

          <MenuContent
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            pos={"absolute"}
            left={"-350%"}
            top={"0"}
            display={"flex"}
            justifyContent={"space-around"}
            w={"4"}
            bg={"#212223"}
          >
            {horizontalMenuItems.map((item) => (
              <Link href={item.link} target="_blank" tabIndex={-1}>
                <Menu.Item
                  key={item.value}
                  value={item.value}
                  width="2rem"
                  cursor={"pointer"}
                  onMouseEnter={() => setActive(item.value)}
                  onMouseLeave={() => setActive("")}
                >
                  {item.icon}
                </Menu.Item>
              </Link>
            ))}
          </MenuContent>
        </Menu.Root>
      </Box>
    </Stack>
  );
};

export default NavBar;
