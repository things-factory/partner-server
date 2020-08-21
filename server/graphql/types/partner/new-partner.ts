import gql from 'graphql-tag'

export const NewPartner = gql`
  input NewPartner {
    name: String!
    description: String
  }
`
