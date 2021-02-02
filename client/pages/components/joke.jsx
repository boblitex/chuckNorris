import {
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Button,
  ModalHeader,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Icon,
  Skeleton,
} from "@chakra-ui/core";
import { useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

//query random joke
const GET_JOKES = gql`
  query randomjoke($category: String!) {
    randomJoke(category: $category) {
      value
      id
    }
  }
`;
//query all categories
const GET_CATEGORIES = gql`
  query alljokecategories {
    allJokeCategories
  }
`;

const Joke = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jokeCategory, setJokeCategory] = useState("dev");

  //fetch random joke on button click trigger
  const [getJoke, { loading, data, error }] = useLazyQuery(GET_JOKES, {
    variables: { category: jokeCategory },
  });

  // fetch all categories on component mount
  const { data: datacat, loading: loadingCat, error: errorCat } = useQuery(
    GET_CATEGORIES
  );

  if (loadingCat) {
    return <p>loading...</p>;
  }
  if (errorCat) {
    return <p>oopsy</p>;
  }
  const openJoke = () => {
    onOpen();
    getJoke();
  };

  return (
    <Box
      border="5px solid #2F2E41"
      p={20}
      mb={20}
      d="flex"
      width="100%"
      flexDirection={{base:"column-reverse", md:"row"}}
      justifyContent="center"
      alignItems="center"
      boxShadow="10px 10px 20px"
    >
      <Button onClick={openJoke} variantColor="purple" mr={{lg:"10px",md:"10px"}}  mt={{base:"1em", lg:"0", md:"0"}} w={{base:"13em"}}>
        Get Joke
      </Button>
      <Menu>
        <MenuButton as={Button} variantColor="purple" marginLeft={{lg:"10px",md:"10px"}}  mb={{base:"1em",lg:"0",md:"0"}}>
          Select Joke Category
          <Icon name="arrow-up-down" size="18px" ml={2}></Icon>
        </MenuButton>
        <MenuList style={{ overflowY: "scroll", maxHeight: "15em" }}>
          <MenuGroup title="All Joke Categories">
            {datacat.allJokeCategories.map((cat) => (
              <MenuItem onClick={() => setJokeCategory(cat)} key={`1${cat}`}>
                {cat}
              </MenuItem>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >
            A Chuck Norris joke for category : {jokeCategory}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} size = {{base: "sm" }}>
            {loading ? (
              <div>
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
              </div>
            ) : data ? (
              <div>{data.randomJoke.value}</div>
            ) : error ? (
              <div>
                <Icon
                  name="warning"
                  size="18px"
                  mr={2}
                  mb={1}
                  color="#FF0000"
                ></Icon>
                Even chuck Norris couldn't fetch a joke this time
              </div>
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Joke;
