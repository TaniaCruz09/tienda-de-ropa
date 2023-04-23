import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clothes } from './entities/cothes.entity';
import { ClothesImage } from './entities/clothes-images.entity';
import { CreateClothesDTO } from './dto/clothes.dto';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Clothes)
    private readonly clothesRepository: Repository<Clothes>,

    @InjectRepository(ClothesImage)
    private readonly imageRepository: Repository<ClothesImage>,
  ) {}

  //Crear
  async create(clothesDTO: CreateClothesDTO) {
    const { images = [], ...detalleclothes } = clothesDTO;
    const clothes = this.clothesRepository.create({
      ...detalleclothes,
      images: images.map((image) =>
        this.imageRepository.create({ url: image }),
      ),
    });
    await this.clothesRepository.save(clothes);
    return clothes;
  }

  //Ver todo
  findAll() {
    return this.clothesRepository.find();
  }

  //Ver uno por id
  findOne(id: string) {
    return this.clothesRepository.findOneBy({ id });
  }

  //Eliminar
  async remove(id: string) {
    const clothes = await this.findOne(id);
    await this.clothesRepository.remove(clothes);
    return 'Pedido de ropa eliminado satisfactoriammente';
  }

  //Actualizar
  async update(id: string, cambios: CreateClothesDTO) {
    const clothes = await this.clothesRepository.preload({
      id: id,
      ...cambios,
      images: [],
    });
    await this.clothesRepository.save(clothes);
    return clothes;
  }
}
