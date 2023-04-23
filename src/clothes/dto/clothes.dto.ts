import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateClothesDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
