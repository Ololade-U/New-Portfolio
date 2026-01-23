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
type IEducation = IResumeItem;

const WorkExperienceData: IWorkExperience[] = [
  {
    title: "Senior Business Manager and Head of Arravo Academy",
    companyOrInstitution: "Arravo Technologies",
    dateRange: "Aug,2024-Present",
    description:
      "Business development, strategy and planning, operational management, financial Management as well as customer focus and compliance and risk management.",
  },
  {
    title: "CEO / Co-Founder",
    companyOrInstitution: "Edupoint Limited",
    dateRange: "Feb,2018-Present",
    description:
      "Led business development and marketing strategies, achieving a 40% increase in sales within a year. Onboarded over 35,000 learners and secured B2B partneships (Private-Private Partnerships and Private-Public Partnerships)",
  },
  {
    title: "CEO / Co-Founder",
    companyOrInstitution: "The AgroBarn Limited",
    dateRange: "Jul,2016-2024",
    description:
      "Managed over 10+ employees in the agribusiness operations. Achieved 95% of sales targets, steering the company from startup to a profitable venture within two years.",
  },
  {
    title: "Co-Founder / Managing Partner",
    companyOrInstitution: "Growth Capital Group",
    dateRange: "Jan,2020-2024",
    description:
      "Driving the vision and strategy of Growth Capital Group with a focus on connecting western technologies to emerging markets, using SaaS models.",
  },
];

const EducationData: IEducation[] = [
  {
    title: "Business Administration and Management",
    companyOrInstitution: "Trinity University",
    dateRange: "2020-2022",
    description: "MBA",
  },
  {
    title: "Business Administration and Management",
    companyOrInstitution: "Alibaba Business School",
    dateRange: "2020-2020",
    description: "Mini-MBA Program",
  },
  {
    title: "Animal and Environmental Biology",
    companyOrInstitution: "University of Benin",
    dateRange: "2011-2015",
    description: "Bachelor's Degree",
  },
];

const TimelineResumeItem: React.FC<IResumeItem> = ({
  title,
  companyOrInstitution,
  dateRange,
  description,
}) => (
  <Timeline.Root>
    <Flex justifyContent={"space-between"}>
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
          <Flex flexDirection={"column"} gap={"2rem"}>
            <Heading
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
              gap={".4rem"}
              fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
            >
              My{" "}
              <Heading
                fontSize={{ mdTo2xl: "4xl", mdDown: "3xl" }}
                fontWeight={"bold"}
                color={"#00BC91"}
              >
                Education
              </Heading>
            </Heading>
            <Text
              color={"#999999"}
              fontSize={{ mdTo2xl: "1.1rem", mdDown: ".9rem" }}
            >
              A good educational foundation has been instrumental in shaping my
              expertise and driving my career forward.
            </Text>
            {EducationData.map((item, index) => (
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
              {EducationData.map((item, index) => (
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
