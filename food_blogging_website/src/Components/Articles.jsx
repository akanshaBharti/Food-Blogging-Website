import { Box, Heading, Card, CardBody, Image, Stack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import articlesData from './ArticlesData';

const Articles = () => {
    const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 3);

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
      };
  };
  const displayedCards = articlesData.slice(startIndex, startIndex + 3);
    return(
        <>
        <Box mt={158} ml={108} display='flex' >
            <Heading color='var(--primary, #0E2368)' fontSize='46px' fontWeight={600}>Latest Articles</Heading>
        </Box>
        <Box display='flex' justifyContent='center'>
        {/* <Card maxW='sm' mt={41} ml={108}>
  <CardBody>
    <Image
      src={grilledT}
      alt='grilled_tomatoes'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color='var(--primary, #0E2368)' fontSize='21px'>Grilled Tomatoes at Home</Heading>
      <Text textAlign='justify'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum totam non aliquam in itaque et explicabo ratione dicta animi! Quam!
      </Text>
      <Button borderRadius='21px' border='1px solid #424961' w={131} h={42}>
        Read More
      </Button>
    </Stack>
  </CardBody>
</Card> */}

{displayedCards.map((card) => (
        <Card key={card.id} maxW='sm' m={2}>
          <CardBody>
            <Image src={card.img} alt='grilled_tomatoes' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md' color='var(--primary, #0E2368)' fontSize='21px'>
                {card.title}
              </Heading>
              <Text textAlign='justify'>{card.description}</Text>
              <Button borderRadius='21px' border='1px solid #424961' w={131} h={42}>
                Read More
              </Button>
            </Stack>
          </CardBody>
        </Card>
      ))}

<Box display='flex' justifyContent='center' mt={4}>
        {/* <Button onClick={handlePrevClick} mr={2} isDisabled={startIndex === 0}>
          Previous
        </Button> */}
        <Button onClick={handleNextClick} ml={2} isDisabled={startIndex + 3 >= articlesData.length}>
          Next
        </Button>
      </Box>
        </Box>
        </>
    )
}

export default Articles;