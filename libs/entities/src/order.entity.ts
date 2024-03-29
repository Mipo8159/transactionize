import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNo: string;

  @Column({ type: 'timestamptz' })
  date: Date;

  @OneToMany(() => Item, (item) => item.order)
  items: Item[];
}
