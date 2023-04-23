import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClothesImage } from './clothes-images.entity';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  brand: string;

  @Column({ type: 'text' })
  size: string;

  @Column({ type: 'numeric' })
  price: number;

  //estableciendo la relacion
  //una ropa puede tener muchas imagenes
  @OneToMany(() => ClothesImage, (clothesImage) => clothesImage.clothes, {
    cascade: true,
  })
  images?: ClothesImage[];
}
