import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

//Given default Avatar for better UI.
//Navbar is fully responsive.
//Given routes for change from Registration page to details page and vice versa.

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgGradient="linear(to-r, yellow.200,green.400)" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={"center"}> */}
          <HStack
            as={"nav"}
            spacing={10}
            display={{ base: "none", md: "flex" }}
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            bgGradient="linear(to-l, blue.500,red.600)"
            bgClip="text"
          >
            <Link to="/">Plan Your Trip</Link>
            <Link to="/details">Details</Link>
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"md"} src={"/Images/travelopia.png"} />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        {/* Responsible for responsiveness */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              fontSize={"xl"}
              fontWeight={"bold"}
              bgGradient="linear(to-l, blue.500,red.600)"
              bgClip="text"
            >
              <Link to="/">Plan Your Trip</Link>
              <Link to="/details">Details</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
