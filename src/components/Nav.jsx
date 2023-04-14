import React from "react";
import { Flex, Image, Link, Button, Show, Hide } from "@chakra-ui/react";

import logo from "../images/logo.svg";
import HamburgerMenu from './HamburgerMenu'

const Nav = () => {
  return (
    <Flex bg="white" py="2em" zIndex={10}>
        <Flex direction="row" justify="space-between" align="center"  w="80%" mx="auto" >
            <Image src={logo} w="fit-content" />
            <Show above="md">
                <Flex direction="row" gap="2em">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                    <Link>Careers</Link>
                </Flex>
            <Button variant="vibrant">Request Invite</Button>
            </Show>
            <Hide above="md">
                <HamburgerMenu />
            </Hide>
        </Flex>
    </Flex>
  );
};

export default Nav;
