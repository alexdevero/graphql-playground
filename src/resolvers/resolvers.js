const fakeDatabase = require('./../db/db')

const resolvers = {
  Query: {
    dragon: (parent, args, headers)  => ({
      name: 'Bazz',
      numberOfLegs: 4,
      alive: true,
      age: 523,
      canFly: true,
      type: 'fire'
    }),
    dragons: (parent, args, headers) => `Number of dragons in the forest: ${args.num}.`,
    dungeons: () => 'There will be dragons!',
    dungeon: (parent, args, headers) => ({
      size: 'large',
      location: 'Mordor',
      empty: false
    }),
    randomNumber: (parent, args, headers) => Math.floor(Math.random() * args.num),
    getDragon: (parent, args, headers) => fakeDatabase.filter(dragon => dragon.name === args.dragon.name),
    getDragons: () => fakeDatabase,
  },
  Mutation: {
    createDragon: (parent, args, headers) => {
      fakeDatabase.push(args.dragon)
      return {
        name: args.dragon.name,
        numberOfLegs: args.dragon.numberOfLegs,
        alive: args.dragon.alive,
        age: args.dragon.age,
        canFly: args.dragon.canFly,
        type: args.dragon.type,
      }
    },
  }
}

module.exports = resolvers
