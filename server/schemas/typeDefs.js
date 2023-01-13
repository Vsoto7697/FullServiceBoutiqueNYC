const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  }

  type Item {
    item_name: String
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    items(item_name: String): [Item]
    item(item_name: String): Item
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(item_name: String!, price: Float!): Auth
  }
`;

module.exports = typeDefs;
