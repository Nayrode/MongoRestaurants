import { Module } from '@nestjs/common';
import { IcecreamController } from './icecream.controller';
import { IcecreamService } from './Icecream.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Icecream, IcecreamModel } from 'src/schemas/icecream.schema';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Icecream.name, schema: IcecreamModel, collection: 'icecream'}]), IcecreamModule],
  controllers: [IcecreamController],
  providers: [IcecreamService]
})
export class IcecreamModule {}
