import { Module } from '@nestjs/common';
import { FastfoodController } from './fastfood.controller';
import { FastfoodService } from './fastfood.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Fastfood, FastfoodModel } from 'src/schemas/fastfood.schema';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Fastfood.name, schema: FastfoodModel, collection: 'fastfood'}]), RestaurantsModule],
  controllers: [FastfoodController],
  providers: [FastfoodService]
})
export class FastfoodModule {}
