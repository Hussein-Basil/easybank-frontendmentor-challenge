import React from "react";
import { Flex, Grid, Image, Heading, Text } from "@chakra-ui/react";

import OnlineBanking from '../images/icon-online.svg'
import Budgeting from '../images/icon-budgeting.svg'
import Boarding from '../images/icon-onboarding.svg'
import API from '../images/icon-api.svg'

const Features = () => {
  return (
    <Flex direction="column" gap="1em" px="10vw" bg="hsl(220, 16%, 96%)" py="10em" textAlign={{ base: "center", lg: "left"}}>
      <Heading fontWeight="400" fontSize="3em" >Why choose Easybank?</Heading>
      <Text>
        We leverage Open Banking to turn your bank account into your financial
        hub. <br/>Control your finances like never before.
      </Text>

      <Grid gap="4em" mt="3em" gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr"}} textAlign={{ base: "center", lg: "left"}} >
        <Flex direction="column" gap="1em" justify={{ base: "center", lg: "left"}}>
          <Image src={OnlineBanking} w="100px" h="100px" mx={{ base: "auto", lg: 0}} />
          <Heading fontWeight="400" fontSize="28px">Online Banking</Heading>
          <Text>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </Text>
        </Flex>

        <Flex direction="column" gap="1em" justify={{ base: "center", lg: "left"}}>
          <Image src={Budgeting} w="100px" h="100px" mx={{ base: "auto", lg: 0}}/>
          <Heading fontWeight="400" fontSize="28px">Simple Budgeting</Heading>
          <Text>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </Text>
        </Flex>

        <Flex direction="column" gap="1em" justify={{ base: "center", lg: "left"}} >
          <Image src={Boarding} w="100px" h="100px" mx={{ base: "auto", lg: 0}}/>
          <Heading fontWeight="400" fontSize="28px">Fast Onboarding</Heading>
          <Text>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </Text>
        </Flex>

        <Flex direction="column" gap="1em" justify={{ base: "center", lg: "left"}}>
          <Image src={API} w="100px" h="100px" mx={{ base: "auto", lg: 0}}/>
          <Heading fontWeight="400" fontSize="28px">Open API</Heading>
          <Text>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Features;
