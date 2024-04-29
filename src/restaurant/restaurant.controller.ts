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

  @Get('pub')
  pub(): Promise<Restaurant[]> {
    return this.RestaurantService.pub();
  }

  @Get('restaurant')
  restaurant(): Promise<Restaurant[]> {
    return this.RestaurantService.restaurant();
  }

  @Get('fastfood')
  fastfood(): Promise<Restaurant[]> {
    return this.RestaurantService.fastfood();
  }

  @Get('horaire')
  horaireOuverture(): Promise<Restaurant[]> {
    return this.RestaurantService.horaireOuverture();
  }

}
