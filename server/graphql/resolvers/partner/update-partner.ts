import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const updatePartner = {
  async updatePartner(_: any, { name, patch }, context: any) {
    const repository = getRepository(Partner)
    const partner = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...partner,
      ...patch,
      updater: context.state.user
    })
  }
}