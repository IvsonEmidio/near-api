import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAddress } from './user-address.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profileImage: string;

  @OneToOne(() => UserAddress, { cascade: true })
  @JoinColumn()
  address: UserAddress;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  lastOnline: Date;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  public constructor(user?: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.address = user.address;
    this.profileImage = user.profileImage;
    this.password = user.password;
    this.lastOnline = user.lastOnline;
    this.createdAt = user.createdAt;
    this.deletedAt = user.deletedAt;
  }
}
