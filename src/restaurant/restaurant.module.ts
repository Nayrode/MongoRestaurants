import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModel } from './restaurant.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantModel }])] ,
  providers: [RestaurantService],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
