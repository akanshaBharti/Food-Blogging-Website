import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import about from '../Images/about.png';

const About = () => {
    return(
        <>
        <Box display='flex' ml={200} mt={186}>
            <img src={about} alt='alt' style={{ width: '384px', height: '468px' }}/>
         <Box mt={107} mr={229} ml={200}>
         <Heading color='var(--primary, #0E2368)' textAlign='justify'>About us</Heading>
         <Text mt={4} fontSize='15px' textAlign='justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
         text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</Text>
         <Button mt={4} backgroundColor='#E23744' color='white' borderRadius='21px' display='flex'> Read more</Button>

         </Box>

        </Box>
        </>
    )
}

export default About;