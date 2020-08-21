import { getRepository, In } from 'typeorm'
import { Partner } from '../../../entities'

export const deletePartners = {
  async deletePartners(_: any, { ids }, context: any) {
    await getRepository(Partner).delete({
      id: In(ids)
    })
    return true
  }
}
