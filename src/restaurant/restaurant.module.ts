import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantModel } from '../schemas/restaurant.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantModel, collection: 'restaurant'}])] ,
  providers: [RestaurantService],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
