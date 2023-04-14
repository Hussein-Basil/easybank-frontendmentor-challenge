import React from "react";
import { Flex, Image, Link, Icon, Text, Button } from "@chakra-ui/react";

import Logo from '../images/logo-white.svg'

import FacebookIcon from '../images/icon-facebook.svg'
import TwitterIcon from '../images/icon-twitter.svg'
import YoutubeIcon from '../images/icon-youtube.svg'
import PinterestIcon from '../images/icon-pinterest.svg'
import InstagramIcon from '../images/icon-instagram.svg'

const Footer = () => {
  const footerStyling = {
    background: "hsl(233, 26%, 24%)",
    minW: "100%",
    color: "white",
  };
  return (
    <Flex style={footerStyling} px="10vw" py="3em" justify="space-between" direction={{ base: "column", lg: "row"}} gap={{ base: "2em", lg: "unset"}}>
      <Flex gap={{ base: "1em", lg: "10em"}} direction={{ base: "column", lg: "row"}} align={{ base: "center", lg: "unset"}}>
        <Flex direction="column" gap={{ base: "1.5em", lg: "3em"}} align={{ base: "center", lg: "unset"}} mb={{ base: '1em', lg: '0'}}>
            <Image src={Logo} w="150px" />
            <Flex direction="row" gap="1em">
                <Image src={FacebookIcon} h="32px" />
                <Image src={TwitterIcon} h="32px" />
                <Image src={YoutubeIcon} h="32px" />
                <Image src={PinterestIcon} h="32px" />
                <Image src={InstagramIcon} h="32px" />
            </Flex>
        </Flex>
        <Flex direction="column" gap="1em" align={{ base: "center", lg: "unset"}}>
            <Link>About Us</Link>
            <Link>Contact</Link>
            <Link>Blog</Link>
        </Flex>
        <Flex direction="column" gap="1em" align={{ base: "center", lg: "unset"}}>
            <Link>Careers</Link>
            <Link>Support</Link>
            <Link>Privacy Policy</Link>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1em" align={{ base: "center", lg: "end"}} textAlign={{ base: "center", lg: "right"}}>
        <Button variant="vibrant">Request Invite</Button>
        <Text color="hsl(233, 8%, 62%)">© Easybank. All Rights Reserved</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
