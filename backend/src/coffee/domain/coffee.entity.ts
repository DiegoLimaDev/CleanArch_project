import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  title: string;

  @Column({ length: 255 })
  description: string;

  @Column()
  type: string;

  @Column()
  imgUrl?: string;
}
