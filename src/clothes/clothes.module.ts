import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothes } from './entities/cothes.entity';
import { ClothesImage } from './entities/clothes-images.entity';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes, ClothesImage])],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
