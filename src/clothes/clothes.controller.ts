import {
  Body,
  Controller,
  ParseUUIDPipe,
  Post,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateClothesDTO } from './dto/clothes.dto';
import { ClothesService } from './clothes.service';

@Controller('ropa')
export class ClothesController {
  constructor(private readonly clothesServiceRepo: ClothesService) {}

  //crear
  @Post()
  create(@Body() clothesDTO: CreateClothesDTO) {
    return this.clothesServiceRepo.create(clothesDTO);
  }

  //ver todos
  @Get()
  findAll() {
    return this.clothesServiceRepo.findAll();
  }

  //ver uno por id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clothesServiceRepo.findOne(id);
  }

  //Remover
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.clothesServiceRepo.remove(id);
  }

  //Actualizar
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateClothesDTO: CreateClothesDTO,
  ) {
    return this.clothesServiceRepo.update(id, updateClothesDTO);
  }
}
