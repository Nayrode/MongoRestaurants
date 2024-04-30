import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from 'src/schemas/restaurant.schema';
import { CreateRestaurantDto, UpdateRestaurantDto } from '../dto/restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  restaurant(): Promise<Restaurant[]> {
    return this.restaurantService.restaurant();
  }

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<any> {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto): Promise<any> {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.restaurantService.delete(id);
  }
}
