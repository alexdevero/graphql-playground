# Notes

Testing in GraphQL playground

```graphql
# Write your query or mutation here
# Write your query or mutation here
query GetAllData {
  dungeons
  dragons(num: 5)
  randomNumber(num: 50)
  dragon {
    canFly
    type
    numberOfLegs
    alive
    age
  }
  dungeon {
    size
    location
    empty
  }
  getDragons {
    name
  }
  getDragon(name: "Barr") {
    name
  }
}

mutation createDragon {
  createDragon(
    dragon: {
      name: "Bazz"
      numberOfLegs: 4
      alive: true
      age: 523
      canFly: true
      type: "fire"
    }
  ) {
    name
  }
}

query GetDragons {
  getDragons {
    name
    numberOfLegs
    age
    alive
    canFly
  }
}
```
