import NextLink from "next/link";
import { Link, Box, Flex, Image, Text } from "@chakra-ui/core";
// import "./styles.css";

const NavLink = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);
const Navbar = () => {
  return (
    <div style ={{position:"fixed", width: "100%"}}>
      <Flex
        bg="#2F2E41"
        w="100%"
        px={3}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="chuck.png"
            size={30}
            ml ={{base:"12px"}}
          />
          <Text pl={3} color="white" visibility={{base:"hidden", md:"visible"}}>
            ChuckNorris
          </Text>
        </Flex>
        <Box marginRight = "10em">
          <NextLink href="/" passHref>
            <NavLink>Home</NavLink>
          </NextLink>
          <NextLink href="/about" passHref >
            <NavLink ml = "5em">About</NavLink>
          </NextLink>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
