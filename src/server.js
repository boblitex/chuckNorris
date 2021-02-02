import dotenv from "dotenv";
import pkg from "apollo-server-express";
import express from "express";
import { Jokenorris } from "./datasource.js";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";
import path from "path";
const { ApolloServer } = pkg;

const __dirname = path.resolve();

const app = express();

dotenv.config();

//creating instance of Apolloserver
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    reportSchema: true,
    variant: "current",
  },
  dataSources: () => ({
    jokeinstance: new Jokenorris(),
  }),
});

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, "/client/out/")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "out", "index.html"));
});

const port = process.env.PORT; // listening port set in .env file

// setting app to listen on port
app.listen(port, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
