import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../schemas/restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly RestaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.RestaurantService.findAll();
  }

  @Get('premiereRequete')
  premiereRequete(): Promise<Restaurant[]> {
    return this.RestaurantService.premiereRequete();
  }

  @Get('deuxiemeRequete')
  deuxiemeRequete(): Promise<Restaurant[]> {
    return this.RestaurantService.deuxiemeRequete();
  }

  @Get('troisiemeRequete')
  troisiemeRequete(): Promise<Restaurant[]> {
    return this.RestaurantService.troisiemeRequete();
  }
  
}
