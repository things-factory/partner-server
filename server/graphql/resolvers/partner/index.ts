import { partnerResolver } from './partner'
import { partnersResolver } from './partners'

import { updatePartner } from './update-partner'
import { updateMultiplePartner } from './update-multiple-partner'
import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { deletePartners } from './delete-partners'

export const Query = {
  ...partnersResolver,
  ...partnerResolver
}

export const Mutation = {
  ...updatePartner,
  ...updateMultiplePartner,
  ...createPartner,
  ...deletePartner,
  ...deletePartners
}
