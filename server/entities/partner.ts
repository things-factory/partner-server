import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Index,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { User } from '@things-factory/auth-base'

@Entity()
@Index('ix_partner_0', (partner: Partner) => [partner.slug], { unique: true })
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  slug: string

  @Column({
    nullable: true
  })
  description: string

  @Column({
    nullable: true
  })
  website: string

  @Column()
  email: string

  @Column({
    nullable: true
  })
  address1: string

  @Column({
    nullable: true
  })
  address2: string

  @Column({
    nullable: true
  })
  city: string

  @Column()
  country: string

  @Column({
    nullable: true
  })
  zipcode: string

  @Column({
    nullable: true
  })
  biztitle: string

  @Column({
    nullable: true
  })
  contact: string

  @Column({
    nullable: true
  })
  status: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
