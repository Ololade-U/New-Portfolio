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
import { useEffect, useRef, useState } from "react";
import useStoreQuery from "./Store";
import emailjs from "@emailjs/browser";
import { toaster } from "../components/ui/toaster";

const Contact = () => {
  const { componentRef, isInView } = useObserve();
  const setActiveNav = useStoreQuery((s) => s.setActiveNav);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    if (isInView) {
      setActiveNav("Contact");
    }
  }, [isInView, setActiveNav]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      toaster.create({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you soon.",
        type: "success",
      });
      formRef.current.reset();
    } catch {
      toaster.create({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

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
                      uthmanadebayo852@gmail.com
                    </Text>
                  </Stack>
                </Flex>
                <Flex alignItems={"center"} gap={"1rem"}>
                  <LuPhoneCall size={"3rem"} stroke="#00BC91" />
                  <Stack gap={"0"}>
                    <Heading color={"white"}>Phone</Heading>
                    <Text color={"#999999"} fontSize={".8rem"}>
                      +234 906 846 4735
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
              <Stack
                as={"form"}
                ref={formRef}
                onSubmit={handleSubmit}
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
                          required
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
                          type="email"
                          border={"1px solid #999999"}
                          color={"white"}
                          name="email"
                          placeholder="E-mail"
                          pl={".5rem"}
                          required
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
                          name="message"
                          placeholder="Message"
                          p={".5rem"}
                          required
                        />
                      </Field.Root>
                    </Fieldset.Content>
                  </Fieldset.Root>
                </Flex>
                <Button
                  type="submit"
                  loading={isSending}
                  disabled={isSending}
                  p={{ mdTo2xl: "1.8rem 1.6rem", mdDown: "1rem 1.2rem" }}
                  fontSize={{ mdTo2xl: "1.2rem", mdDown: "1rem" }}
                  fontWeight={"initial"}
                  borderRadius={"2rem"}
                  bg={"#00BC91"}
                  w={"fit-content"}
                >
                  {isSending ? "Sending..." : "Send Message"}
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
        &copy; 2026 Adebayo Uthman. All rights reserved.
      </Text>
    </>
  );
};

export default Contact;
