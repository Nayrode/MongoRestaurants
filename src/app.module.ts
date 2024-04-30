import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant/restaurant.module';
import { PubModule } from './restaurant/pub/pub.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Pub } from './schemas/pub.schema';
import { Cafe } from './schemas/cafe.schema';
import { CafeModule } from './restaurant/cafe/cafe.module';
import { BarModule } from './restaurant/bar/bar.module';
import { FastfoodModule } from './restaurant/fastfood/fastfood.module';
import { IcecreamModule } from './restaurant/icecream/icecream.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:30000/',
    {dbName: 'restaurants',}
  ),
  RestaurantModule,
  PubModule,
  CafeModule,
  BarModule,
  FastfoodModule,
  IcecreamModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
