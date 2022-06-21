import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_address' })
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  country: string;
}
