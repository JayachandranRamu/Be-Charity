"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import AdminRoutes from "../Routes/AdminRoutes";
import { useEffect, useState } from "react";
import Dashboard from "../Pages/Dashboard";
import AdminUsers from "../Pages/AdminUsers";
import AdminCategories from "../Pages/AdminCategories";
import AdminEvents from "../Pages/AdminEvents";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AdminSettings from "../Pages/AdminSettings";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, link: "/admin/dashboard/" },
  { name: "Users", icon: FiTrendingUp, link: "/admin/users/" },
  {
    name: "Categories",
    icon: FiCompass,
    link: "/admin/category/",
  },
  { name: "Events", icon: FiStar, link: "/admin/events/" },
  { name: "Settings", icon: FiSettings, link: "/admin/settings/" },
];

const SidebarContent = ({ setSearchParams, setlink, onClose, ...rest }) => {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    //
    setSearchParams({ path: path });
    setlink(path);
  };
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {/* logo */}

          <img
            src="https://i.ibb.co/BndWRTs/betterlife.png"
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => setSearchParams({ path: "/admin" })}
          />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => handleButtonClick(link.link)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const [params, setSearchParams] = useSearchParams("" || { path: "/admin" });

  const handleNav = (link) => {
    console.log(link, children);
  };
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "green",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
        {/*  give appropriate click functionality and name */}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ setlink, onOpen, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <img
          src="https://i.ibb.co/BndWRTs/betterlife.png"
          style={{ height: "100px" }}
          alt=""
        />
        {/*  */}
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://media.istockphoto.com/id/508762656/vector/awesome-vector-design-element.jpg?s=612x612&w=0&k=20&c=iIuBEDZuV0rp2kBaT3KeGvNYyQJEQvh9YSmNbKC5eXI="
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Abhay</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={() => setlink("/admin/profile/")}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => setlink("/admin/settings/")}>
                Settings
              </MenuItem>
              {/* <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={() => navigate("/")}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const AdminNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Link, setLink] = useState("");
  const [params, setSearchParams] = useSearchParams("" || { path: "/admin" });
  console.log(params.get("path"), "i dont know bro");

  useEffect(() => {
    console.log(Link);
  }, [Link]);
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        setlink={setLink}
        setSearchParams={setSearchParams}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav setlink={setLink} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        {params.get("path") === "/admin" && <Dashboard />}
        {params.get("path") === "/admin/dashboard/" && <Dashboard />}
        {params.get("path") === "/admin/users/" && <AdminUsers />}
        {params.get("path") === "/admin/category/" && <AdminCategories />}
        {params.get("path") === "/admin/events/" && <AdminEvents />}
        {params.get("path") === "/admin/settings/" && <AdminSettings />}
        {/* <AdminRoutes /> */}
      </Box>
    </Box>
  );
};

export default AdminNavbar;