import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Show,
  Hide,
} from "@chakra-ui/react";

import HeroIllustration from "../images/bg-intro-desktop.svg";
import HeroMobileIllustration from "../images/bg-intro-mobile.svg";
import Mockups from "../images/image-mockups.png";

const Hero = () => (
  <Flex
    direction={{ base: "column", lg: "row-reverse" }}
    justify="space-between"
    pb="12.5em"
    bg="hsl(0, 0%, 98%)"
    maxWidth="100vw"
    overflowX="hidden"
  >
    <Flex w={{ base: "100vw", lg: "50%"}} position="relative">
      <Show above="lg">
        <Image
          src={HeroIllustration}
          position="absolute"
          top="-20vh"
          right="-10vw"
          w="120vh"
          objectFit="cover"
        />
      </Show>
      <Hide above="lg">
        <Image
          src={HeroMobileIllustration}
          position="absolute"
          top="0"
          right="0"
          w="100vw"
          maxH="30vh"
          objectFit="cover"
          
        />
      </Hide>

      <Image
        src={Mockups}
        position="absolute"
        top="-25vh"
        // top={{ base: "-4em", lg: "-2.5em" }}
        right={{ base: "50%", xl: "-10vw" }}
        transform={{ base: "translateX(50%)", xl: "unset" }}
        height={{ base: "540px", lg: "680px", xl: "100vh"}}
        objectFit="contain"
        
      />
    </Flex>
    <Flex
      direction="column"
      gap="2em"
      mt={{ base: "30em", lg: "10em" }}
      ml={{ base: "unset", lg: "10vw"}}
      align={{ base: "center", lg: "start" }}
      textAlign={{ base: "center", lg: "left" }}
    >
      <Heading fontSize="3em" fontWeight={400}>
        Next generation
        <br />
        digital banking
      </Heading>
      <Text w="400px" maxW="80vw" fontSize="16px">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </Text>
      <Button variant="vibrant">Request Invite</Button>
    </Flex>
  </Flex>
);

export default Hero;
