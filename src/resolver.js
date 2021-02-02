export  const resolvers = {
  Query: {
    allJokeCategories: (_, __, { dataSources }) =>
      dataSources.jokeinstance.getAllCategories(),
      randomJoke: (_, {category}, {dataSources})=>
      dataSources.jokeinstance.getRandomJoke({category:category})
  },
};
