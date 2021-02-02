import pkg from 'apollo-server-express';
const { gql } = pkg;
export const typeDefs = gql`
    type Joke {
        value: String!
        id:ID!
        icon:String!
    }
    type Query {
        allJokeCategories:[String!]!
        randomJoke(category: String!):Joke
    }
`;
