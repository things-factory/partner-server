import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Partner } from '../entities'

const SEED = [
  {
    name: 'craftiviti',
    slug: 'craftivity',
    website: 'https://www.craftiviti.com/',
    address1: '',
    address2: '',
    city: '',
    country: '',
    zipcode: '',
    jobtitle: '',
    contact: '',
    email: ''
  }
]

export class SeedPartner1597964678400 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Partner)

    return Promise.all(
      SEED.map(async partner => {
        await repository.save({
          ...partner
        })
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Partner)

    return Promise.all(
      SEED.reverse().map(async partner => {
        await repository.delete({
          slug: partner.slug
        })
      })
    )
  }
}
