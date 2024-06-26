import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}y

  @Get()
  horaireOuverture(): Promise<{ name: string; horaire: string; amenity: string; }[]>  {
    return this.restaurantService.horaireOuverture();
  }
}
