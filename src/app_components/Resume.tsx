import { useObserve } from "../hooks/Observe";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Timeline,
  Tag,
  HStack,
} from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";
import useStoreQuery from "./Store";
import { useEffect } from "react";

interface IResumeItem {
  title: string;
  companyOrInstitution: string;
  dateRange: string;
  description?: string;
}

type IWorkExperience = IResumeItem;

const WorkExperienceData: IWorkExperience[] = [
  {
    title: "Frontend Dev and Asst. Project Manager",
    companyOrInstitution: "Arravo Technology Ltd",
    dateRange: "Jan 2026-Present",
    description:
      "Bridged the gap between technical execution and project delivery by serving as both a Frontend Developer and Project Manager. While architecting responsive, accessible interfaces using React and NextJs, I simultaneously managed project timelines, resource allocation, and stakeholder expectations",
  },
  {
    title: "Lecturer",
    companyOrInstitution: "EduPoint Limited",
    dateRange: "Jan 2026-Present",
    description:
      "Delivered lectures to aspiring developers by delivering comprehensive courses on Tech Foundations, covering critical topics such as web architecture, computational logic, and version control",
  },
  {
    title: "Fullstact Intern",
    companyOrInstitution: "Arravo Technology Ltd",
    dateRange: "Aug 2025 - Dec 2025",
    description:
      "Bridged the gap between technical execution and project delivery by serving as both a Frontend Developer and Project Manager. While architecting responsive, accessible interfaces using React and NextJs, I simultaneously managed project timelines, resource allocation, and stakeholder expectations",
  },
  {
    title: "Lecturer",
    companyOrInstitution: "Aptech Education",
    dateRange: "Aug 2024- March 2025",
    description:
      "Aptech Education is a multinational education-based organization that provides expert IT training and real-world skills to students accross the globe. Delivered Python, html, css and react lectures to student",
  },
  {
    title: "Frontend Dev Intern",
    companyOrInstitution: "Scutigen",
    dateRange: "Jan 2024 - Sep 2024",
    description:
      "An Innovative Tech community that inspires and develops aspiring developers giving tham platform and experience required via working hand in hand with top developers bring tech dreams to life. Learned to integrate real API endpoints, manage component state, and transform figma into production-ready UIs.",
  },
  {
    title: "Asst. Lecturer",
    companyOrInstitution: "NIIT",
    dateRange: "June 2023 - Dec 2023",
    description:
      "The National Institute of Information Technology is multinational education-oriented organization focus on inforamtion and computer technology where i served as an assistant lecturer delivering html, css and JavaScript lectures to students",
  },
];


const TimelineResumeItem: React.FC<IResumeItem> = ({
  title,
  companyOrInstitution,
  dateRange,
  description,
}) => (
  <Timeline.Root>
    <Flex justifyContent={"space-between"} p={'0 1rem'}>
      <Box
        display={"flex"}
        gap={".7rem"}
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Timeline.Title
          as="h4"
          color="white"
          fontSize={"md"}
          _dark={{ color: "gray.200" }}
        >
          {companyOrInstitution}
        </Timeline.Title>

        <Tag.Root
          size="sm"
          variant="solid"
          colorScheme="teal"
          borderRadius="full"
          px={3}
          mt={{ base: 2, sm: 0 }}
        >
          <Tag.Label>{dateRange}</Tag.Label>
        </Tag.Root>
      </Box>
      <Timeline.Item justifySelf={"flex-start"} alignSelf={"flex-start"}>
        <Timeline.Connector>
          <Timeline.Separator colorPalette={"white"} w={"2px"} />
          <Timeline.Indicator colorPalette="teal" />
        </Timeline.Connector>
        <Timeline.Content pb={8} pl={2}>
          <Text
            fontSize="lg"
            color="white"
            _dark={{ color: "gray.400" }}
            fontWeight="semibold"
            maxW={"28ch"}
          >
            {title}
          </Text>
          {description && (
            <Timeline.Description fontSize="sm" color="#999999" maxW={"60ch"}>
              {description}
            </Timeline.Description>
          )}
        </Timeline.Content>
      </Timeline.Item>
    </Flex>
  </Timeline.Root>
);

const Resume = () => {
  const { componentRef, isInView } = useObserve();
  const setActive = useStoreQuery((s) => s.setActiveNav);
  useEffect(() => {
    if (isInView) {
      setActive("Resume");
    }
  }, [isInView, setActive]);
  return (
    <>
      <Box
        ref={componentRef}
        p={"2rem .9rem"}
        // w={{ mdDown: "100vw" }}
        bg={"rgba(33, 34, 35, .95)"}
        borderRadius={"1.6rem"}
        mb={"3rem"}
        id="resume"
      >
        <Stack alignItems={"flex-start"} gap={"2rem"}>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            p={".5rem 1.2rem"}
            border={"1px solid #3d3d3dff"}
            borderRadius={"1.5rem"}
          >
            <FaFileAlt size={".7rem"} fill={"#00BC91"} />
            <Text color={"white"} fontSize={".7rem"}>
              RESUME
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"2rem"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
            >
              Work{" "}
              <Heading
                fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
                fontWeight={"bold"}
                color={"#00BC91"}
              >
                Experience
              </Heading>
            </Heading>
            <Text
              color={"#999999"}
              fontSize={{ mdTo2xl: "1.1rem", mdDown: ".9rem" }}
            >
              My professional journey has been shaped by a diverse range of
              roles and projects, each contributing to my expertise in design,
              development, and IT consultancy.
            </Text>
            {WorkExperienceData.map((item, index) => (
              <Box
                key={`work-${index}`}
                border={"1px solid rgba(62, 62, 62, 0.95)"}
                w={"100%"}
                p={"1rem .5rem"}
                borderRadius={".6rem"}
                display={'flex'}
                flexDirection={'column'}
                gap={'1rem'}
                hideFrom={'md'}
              >
                <HStack
                  fontSize={".9rem"}
                  justifyContent={"space-between"}
                >
                  <Text fontWeight={"bold"}>{item.companyOrInstitution}</Text>
                  <Text color={"#999999"}>{item.dateRange}</Text>
                </HStack>
                <Heading>{item.title}</Heading>
                <Text fontSize={'.9rem'} color={"#999999"}>{item.description}</Text>
              </Box>
            ))}
            <Timeline.Root hideBelow={"md"} colorPalette="teal" size="md">
              {WorkExperienceData.map((item, index) => (
                <TimelineResumeItem key={`work-${index}`} {...item} />
              ))}
            </Timeline.Root>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Resume;
