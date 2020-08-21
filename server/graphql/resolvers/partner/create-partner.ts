import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const createPartner = {
  async createPartner(_: any, { partner}, context: any) {
    return await getRepository(Partner).save({
      ...partner,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

