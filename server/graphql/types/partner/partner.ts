import gql from 'graphql-tag'

export const Partner = gql`
  type Partner {
    id: String
    name: String
    domain: Domain
    description: String
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
