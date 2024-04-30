import { Module } from '@nestjs/common';
import { CafeController } from './cafe.controller';
import { CafeService } from './cafe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cafe, CafeModel } from 'src/schemas/cafe.schema';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cafe.name, schema: CafeModel, collection: 'cafe'}]), RestaurantsModule],
  controllers: [CafeController],
  providers: [CafeService]
})
export class CafeModule {}
