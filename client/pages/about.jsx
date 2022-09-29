import Layout from "./components/layout.js";
import { Box, Heading } from "@chakra-ui/core";
const About = () => {
  return (
    <Layout>
      <Box p={20}>
        <Heading mb={5}>
          Funny chucknorris jokes generator, pick a category, I dare you !
        </Heading>
        <p>
          All jokes curated from the hilarious 
          <span style={{ fontWeight: "bold" }}>
            <a href="http://api.chucknorris.io"> Chuck Norris API</a>
          </span>
        </p>
      </Box>
    </Layout>
  );
};

export default About;
