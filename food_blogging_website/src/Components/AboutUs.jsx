import { Box, Button, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import about from "../Images/about.png";

const About = () => {
  const displayImage = useBreakpointValue({ base: "none", md: "block" });
  const contentStyles = useBreakpointValue({
    base: {
      width: '275px',
      height: '138px',
      flexShrink: '0px',
      color: "var(--body, #444957)",
      textAlign: "center",
    },
    md: {
      textAlign: "justify",
      lineHeight: "24px",
    },
  });
  return (
    <>
      <Box  mt={186}>
        <Box display="flex">

        
        <img
          src={about}
          alt="alt"
          style={{ width: "384px", height: "468px", flexShrink: '0px', marginLeft: '205px', display: displayImage}}
        />
        <Box  >
          <Heading color="var(--primary, #0E2368)" textAlign="justify" mt={107} mr={229} ml={200}>
            About us
          </Heading>
          <Text  {...contentStyles} ml={200} mr={204} mt={4} fontSize="15px" textAlign="justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>          
          <Button
            mt={27}
            mb={106}
            ml={200}
            backgroundColor="#E23744"
            color="white"
            borderRadius="21px"
            display="flex"
          >
            {" "}
            Read more
          </Button>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
