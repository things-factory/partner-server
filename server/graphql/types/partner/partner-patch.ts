import gql from 'graphql-tag'

export const PartnerPatch = gql`
  input PartnerPatch {
    id: String
    name: String
    description: String
    cuFlag: String
  }
`
