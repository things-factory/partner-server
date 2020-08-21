import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const deletePartner = {
  async deletePartner(_: any, { id }, context: any) {
    await getRepository(Partner).delete({ id })
    return true
  }
}
