const { gql } = require('apollo-server-express')

const typeDefs = gql`
  input DragonInput {
    name: String
    numberOfLegs: Int!
    alive: Boolean!
    age: Int!
    canFly: Boolean!
    type: String!
  }

  type Dragon {
    name: String
    numberOfLegs: Int!
    alive: Boolean!
    age: Int!
    canFly: Boolean!
    type: String!
  }

  type Dungeon {
    size: String!
    location: String!
    empty: Boolean!
  }

  type Query {
    dungeons: String!
    dragons(num: Int): String!
    randomNumber(num: Int): Int!
    dragon: Dragon!
    dungeon: Dungeon!
    getDragons: [Dragon]!
    getDragon(name: String): Dragon!
  }

  type Mutation {
    createDragon(dragon: DragonInput): Dragon!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = typeDefs
