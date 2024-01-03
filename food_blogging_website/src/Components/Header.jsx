import React from "react";
import foodVan from "../Images/van.png";
import mainImg from "../Images/homeImage.png";
import { Box, Button, Heading, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
  const displayImage = useBreakpointValue({ base: "none", md: "block" });
  
  const displayStyles =  useBreakpointValue({
    base: {
      display : 'grid',
    }, 
    md: {
      display: 'flex',
    }
  })

  const contentStyles = useBreakpointValue({
    base: {
     width: '240px',
     height: '130px',
     flexShrink: '0px',
     textAlign: 'center',
     
    },

  });

  const svgStyles = useBreakpointValue({
    base:{
      width:'375px',
      height:'426px',
      
    },
    md: {
      width: '752px',
      height: '839px'
    }
  });

  const mainImgStyles =  useBreakpointValue({
    base: {
      width: '378px',
      height: '413px',
    },
    md: {
      width: '735px',
      height: '804px'
    }
  })


  return (
    <>
      <Box display="flex" {...displayStyles}>
        <Box>
          <Box pl={100} pt={33}>
            <img src={foodVan} alt="foodVan" style={{display: displayImage}}/>
          </Box>

          <Box >
            <Heading {...contentStyles} mt={111} mr={260} ml={100} color="var(--primary, #0E2368)" textAlign='justify' >
              Discover the{" "}
              <Text color="#E23744" as="span">
                {" "}
                Best
              </Text>
              {" "}
              Food and Drinks
            </Heading>
            <Text mr={260} ml={100} mt={4} {...contentStyles} fontSize="s" textAlign= "justify">
            Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              backgroundColor="#E23744"
              // mt={4}
              color="white"
              borderRadius="34px"
              display="flex"
              ml={100}
            >
              Explore Now!
            </Button>
          </Box>
        </Box>
        <Spacer />
{/* w={735} h={804}  */}

        <Box position="relative" >
          <img src={mainImg} {...mainImgStyles} alt="mainImg" style={{ width: "735px", height: "804px", flexShrink: '0' }} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
           {...svgStyles}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
            width="752"
            height="839"
            viewBox="0 0 752 839"
            fill="none"
          >
            <path
              d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
              fill="#E23744"
            />
          </svg>
          <Button
            backgroundColor="transparent"
            color="white"
            border="1px solid white"
            borderRadius="21px"
            position="absolute"
            top="20px"
            right="20px"
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
