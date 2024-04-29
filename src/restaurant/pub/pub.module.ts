import { Module } from '@nestjs/common';
import { PubController } from './pub.controller';
import { PubService } from './pub.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pub, PubModel } from 'src/schemas/pub.schema';
import { RestaurantService } from '../restaurant.service';
import { RestaurantModule as RestaurantsModule } from '../restaurant.module';
import { AppModule } from 'src/app.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pub.name, schema: PubModel, collection: 'pub'}]), RestaurantsModule],
  controllers: [PubController],
  providers: [PubService]
})
export class PubModule {}
