import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrape="wrap" m="10" justifyContent="center" alignItems="center">
    <Image src={imageUrl} height={300} width={500} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        fontWeight="medium"
      >
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Box>
    
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex></Flex>
      <Banner 
      purpose="BUY A HOME"
      title1="Find, Buy and Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
       />
    </Box>
  );
}