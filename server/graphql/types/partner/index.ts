import { Partner } from './partner'
import { NewPartner } from './new-partner'
import { PartnerPatch } from './partner-patch'
import { PartnerList } from './partner-list'

export const Mutation = `
  createPartner (
    partner: NewPartner!
  ): Partner

  updatePartner (
    name: String!
    patch: PartnerPatch!
  ): Partner

  updateMultiplePartner (
    patches: [PartnerPatch]!
  ): [Partner]

  deletePartner (
    name: String!
  ): Boolean

  deletePartners (
    names: [String]!
  ): Boolean
`

export const Query = `
  partners(filters: [Filter], pagination: Pagination, sortings: [Sorting]): PartnerList
  partner(name: String!): Partner
`

export const Types = [Partner, NewPartner, PartnerPatch, PartnerList]
