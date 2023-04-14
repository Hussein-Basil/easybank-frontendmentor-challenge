import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  Link,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

const styling = {
  textAlign: "center",
};

const HamburgerMenu = () => {
  return (
    <Menu closeOnSelect={false} style={styling}>
      <MenuButton as={Button} colorScheme="blue" variant="vibrant" px="12px">
        <AiOutlineMenu />
      </MenuButton>
      <MenuList minWidth="80vw">
        <MenuItemOption textAlign="center">
          <Link>Home</Link>
        </MenuItemOption>
        <MenuItemOption textAlign="center">
          <Link>About</Link>
        </MenuItemOption>
        <MenuItemOption textAlign="center">
          <Link>Contact</Link>
        </MenuItemOption>
        <MenuItemOption textAlign="center">
          <Link>Blog</Link>
        </MenuItemOption>
        <MenuItemOption textAlign="center">
          <Link>Careers</Link>
        </MenuItemOption>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
