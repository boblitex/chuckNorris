import { Box, Text, Image, Flex } from "@chakra-ui/core";

const Landing = () => {
  return (
    <div>
      <Flex
        direction={{ base: "column", md: "column", lg:"row-reverse" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          size={{ base: "lg", md: "2xl" }}
          mt="2em"
          height={{ base: "100%" }}
          width="100%"
        >
          <Image src="bg.png" alt="undraw image" pt={"1em"}/>
        </Box>
        <Box
          ml={{ md: "1em", base: "0" }}
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="sans-serif"
          color="#6C63FF"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text w="100%" px=".5em">
            Wanna see a <br />
            Chuck Norris joke?
          </Text>
          <p style={{ fontSize: "18px", color: "#2F2E41", margin: "1em" }}>
            The sickest jokes are here! Select a category to start
          </p>
        </Box>
      </Flex>
    </div>
  );
};

export default Landing;
