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

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantService.restaurant();
  }
  @Get('fastfood')
  fastfood(): Promise<Fastfood[]> {
    return this.restaurantService.fastfood();
  }

  @Get('cafe')
  cafe(): Promise<Cafe[]> {
    return this.restaurantService.cafe();
  }

  @Get('icecream')
  icecream(): Promise<Icecream[]> {
    return this.restaurantService.icecream();
  }

  @Get('bar')
  bar(): Promise<Bar[]> {
    return this.restaurantService.bar();
  }

  @Get('horaire')
  horaireOuverture(): Promise<{ name: string; horaire: string; }[]>  {
    return this.restaurantService.horaireOuverture();
  }
}
