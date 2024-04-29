import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantModel } from 'src/schemas/restaurant.schema';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantModel, collection: 'restaurant'}]), RestaurantsModule],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
