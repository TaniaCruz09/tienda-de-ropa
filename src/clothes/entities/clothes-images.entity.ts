import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clothes } from './cothes.entity';

@Entity()
export class ClothesImage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  //Relacion (Muchas imagenes son para una ropa)
  @ManyToMany(() => Clothes, (clothes) => clothes.images)
  clothes: Clothes;
}
