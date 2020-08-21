import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'

const SEED_PARTNER_DOMAIN = [
  {
    subdomain: 'partner',
    name: 'Partners domain'
  }
]

export class SeedPartnerDomain1597964678399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Domain)

    return Promise.all(
      SEED_PARTNER_DOMAIN.map(async domain => {
        await repository.save({
          ...domain
        })
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Domain)

    return Promise.all(
      SEED_PARTNER_DOMAIN.reverse().map(async (domain: Domain) => {
        await repository.delete({ subdomain: domain.subdomain })
      })
    )
  }
}
