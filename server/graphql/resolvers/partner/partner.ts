import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnerResolver = {
  async partner(_: any, { id }, context: any) {
    const repository = getRepository(Partner)

    return await getRepository(Partner).findOne({
      where: { id },
      relations: ['creator', 'updater']
    })
  }
}
