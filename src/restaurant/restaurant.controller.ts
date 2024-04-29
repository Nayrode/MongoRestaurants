import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../schemas/restaurant.schema';
import { Fastfood } from 'src/schemas/fastfood.schema';
import { Pub } from 'src/schemas/pub.schema';
import { Bar } from 'src/schemas/bar.schema';
import { Cafe } from 'src/schemas/cafe.schema';
import { Icecream } from 'src/schemas/icecream.schema';
import { CreateRestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
import { Delete } from '@nestjs/common';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly RestaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.RestaurantService.restaurant();
  }

  @Get('pub')
  pub(): Promise<Pub[]> {
    return this.RestaurantService.pub();
  }

  @Get('restaurant')
  restaurant(): Promise<Restaurant[]> {
    return this.RestaurantService.restaurant();
  }

  @Get('fastfood')
  fastfood(): Promise<Fastfood[]> {
    return this.RestaurantService.fastfood();
  }

  @Get('cafe')
  cafe(): Promise<Cafe[]> {
    return this.RestaurantService.cafe();
  }

  @Get('icecream')
  icecream(): Promise<Icecream[]> {
    return this.RestaurantService.icecream();
  }

  @Get('bar')
  bar(): Promise<Bar[]> {
    return this.RestaurantService.bar();
  }

  @Get('horaire')
  horaireOuverture(): Promise<{ name: string; horaire: string; }[]>  {
    return this.RestaurantService.horaireOuverture();
  }

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<any> {
    return this.RestaurantService.create(createRestaurantDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto): Promise<any> {
    return this.RestaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.RestaurantService.delete(id);
  }
}
