import React from "react"
import {
  Box,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Avatar,
  MenuDivider,
  Flex,
  Text,
  Button,
  IconButton,
  HStack,
  useDisclosure,
  useColorMode,
  Center,
  Container
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { BsFillKeyFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import Link from "next/link";
import { logout } from "../store/slice/user";

function Links() {
  let Links = [
    ["Blog", "/blog"],
    ["Social", "/social"],
    ["Services", "/services"]
  ]
  return Links
}

function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        EyeFind
      </Text>
    </Box>
  )
}

function Header(props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  return (
    <>
      <Box bg="eye.head" color="white" px={4}>
        <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme='eye.head'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            
            </HStack>
          </HStack>
          
          <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} colorScheme={colorMode === 'light' ? "blue" : "yellow"} mx="1rem">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
            {user.authenticated == true ? (
              <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList color={colorMode == "light" ? "black" : "white"} alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem _hover={{bg: "red", color: "white"}} bg="red" color="white" onClick={() => dispatch(logout())}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Menu>
                  <MenuButton
                    px={4}
                    py={3}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    bg="green"
                    borderColor="green"
                  >
                     <BsFillKeyFill></BsFillKeyFill>
                  </MenuButton>
                  <MenuList bg={colorMode == "light" ? "white" : "black"} color={colorMode == "light" ? "black" : "white"}>
                    <MenuItem>
                      <Link href="test">Login</Link>
                    </MenuItem>
                    <MenuItem> Register </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
            </Stack>
          </Box>
        ) : null}
        </Container>
      </Box>
    </>
  )
}

export default Header
