import {
  Box,
  Button,
  Field,
  Fieldset,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { useObserve } from "../hooks/Observe";
import { useEffect } from "react";
import useStoreQuery from "./Store";

const Contact = () => {
  const { componentRef, isInView } = useObserve();
  const setActiveNav = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActiveNav("Contact");
    }
  }, [isInView, setActiveNav]);
  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem"}
        w={"100%"}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={"1.5rem"}
        id="contact"
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <IoIosMail size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              CONTACT
            </Text>
          </Flex>
          <Flex w={"100%"} flexDirection={"column"} gap={"2rem"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={"4xl"}
            >
              Contact{" "}
              <Heading fontSize={"4xl"} fontWeight={"bold"} color={"#00BC91"}>
                Me
              </Heading>
            </Heading>
            <Text color={"#999999"} fontSize={"1.1rem"}>
              Ready to take your project to the next level? Let's work together
              to create something amazing. Contact me today to discuss your
              needs and find out how I can help you achieve your goals.
            </Text>
            <Box
              mt={"2rem"}
              w={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={{ mdDown: "column" }}
              gap={"2rem"}
            >
              <Stack w={"100%"} gap={"2rem"}>
                <Flex alignItems={"center"} gap={"1rem"}>
                  <TfiLocationPin size={"3rem"} fill="#00BC91" />
                  <Stack gap={"0"}>
                    <Heading color={"white"}>Location</Heading>
                    <Text color={"#999999"} fontSize={".8rem"}>
                      Lagos
                    </Text>
                  </Stack>
                </Flex>
                <Flex alignItems={"center"} gap={"1rem"}>
                  <IoMailOpenOutline size={"3rem"} stroke="#00BC91" />
                  <Stack gap={"0"}>
                    <Heading color={"white"}>Email</Heading>
                    <Text color={"#999999"} fontSize={".8rem"}>
                      Oscarobiora@gmail.com
                    </Text>
                  </Stack>
                </Flex>
                <Flex alignItems={"center"} gap={"1rem"}>
                  <LuPhoneCall size={"3rem"} stroke="#00BC91" />
                  <Stack gap={"0"}>
                    <Heading color={"white"}>Phone</Heading>
                    <Text color={"#999999"} fontSize={".8rem"}>
                      +234 816 745 4539
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
              <Stack
                gap={{ mdTo2xl: "2rem", mdDown: "1rem" }}
                w={"100%"}
                justifyContent={"space-between"}
              >
                <Flex>
                  <Fieldset.Root size={"lg"} w={{ mdTo2xl: "30vw" }}>
                    <Fieldset.Content>
                      <Field.Root>
                        <Input
                          border={"1px solid #999999"}
                          color={"white"}
                          name="name"
                          placeholder="Name"
                          pl={".5rem"}
                        />
                      </Field.Root>
                    </Fieldset.Content>
                  </Fieldset.Root>
                </Flex>
                <Flex>
                  <Fieldset.Root size={"lg"} w={{ mdTo2xl: "30vw" }}>
                    <Fieldset.Content>
                      <Field.Root>
                        <Input
                          border={"1px solid #999999"}
                          color={"white"}
                          name="name"
                          placeholder="E-mail"
                          pl={".5rem"}
                        />
                      </Field.Root>
                    </Fieldset.Content>
                  </Fieldset.Root>
                </Flex>
                <Flex>
                  <Fieldset.Root size={"lg"} w={{ mdTo2xl: "30vw" }}>
                    <Fieldset.Content>
                      <Field.Root>
                        <Textarea
                          minH={"20vh"}
                          border={"1px solid #999999"}
                          color={"white"}
                          name="name"
                          placeholder="Message"
                          p={".5rem"}
                        />
                      </Field.Root>
                    </Fieldset.Content>
                  </Fieldset.Root>
                </Flex>
                <Button
                  p={{ mdTo2xl: "1.8rem 1.6rem", mdDown: "1rem 1.2rem" }}
                  fontSize={{ mdTo2xl: "1.2rem", mdDown: "1rem" }}
                  fontWeight={"initial"}
                  borderRadius={"2rem"}
                  bg={"#00BC91"}
                  w={"fit-content"}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={{ mdTo2xl: "1.1rem" }}
        mb={"1.5rem"}
        textWrap={"nowrap"}
        color={"#999999"}
      >
        &copy; 2026 Oscar Obiora. All rights reserved.
      </Text>
    </>
  );
};

export default Contact;
