import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bar, BarModel } from 'src/schemas/bar.schema';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bar.name, schema: BarModel, collection: 'bar'}]), RestaurantsModule],
  controllers: [BarController],
  providers: [BarService]
})
export class BarModule {}
