const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { buildSchema } = require('graphql')
const expressPlayground = require('graphql-playground-middleware-express').default
const typeDefs = require('./defs/typeDefs')
const resolvers = require('./resolvers/resolvers')

const PORT = 1337

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
const startServer = async () => {
  await server.start()
  server.applyMiddleware({ app })

  app.get(
    '/playground',
    expressPlayground({
      endpoint: '/graphql/</script><script>alert(1)</script><script>',
    }),
  )
  app.listen(PORT)

  console.log(
    `Serving the GraphQL Playground on http://localhost:${PORT}/playground`,
  )
}

startServer()
