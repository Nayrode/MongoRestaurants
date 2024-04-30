import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantModel } from '../schemas/restaurant.schema';
import { Bar, BarModel } from 'src/schemas/bar.schema';
import { Icecream, IcecreamModel } from 'src/schemas/icecream.schema';
import { Cafe, CafeModel } from 'src/schemas/cafe.schema';
import { Fastfood, FastfoodModel } from 'src/schemas/fastfood.schema';
import { Pub, PubModel } from 'src/schemas/pub.schema';
import { PubModule } from './pub/pub.module';
import { PubService } from './pub/pub.service';
import { IcecreamService } from './icecream/Icecream.service';
import { IcecreamModule } from './icecream/icecream.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantModel, collection: 'restaurant'}]),
    MongooseModule.forFeature([{ name: Bar.name, schema: BarModel, collection: 'bar'}]),
    MongooseModule.forFeature([{ name: Icecream.name, schema: IcecreamModel, collection: 'ice_cream'}]),
    MongooseModule.forFeature([{ name: Cafe.name, schema: CafeModel, collection: 'cafe'}]),
    MongooseModule.forFeature([{ name: Fastfood.name, schema: FastfoodModel, collection: 'fast_food'}]),
    MongooseModule.forFeature([{ name: Pub.name, schema: PubModel, collection: 'pub'}]),
  ],
  providers: [RestaurantService, PubService],
  controllers: [RestaurantController],
  exports: [RestaurantService, PubService]
})
export class RestaurantModule {}
