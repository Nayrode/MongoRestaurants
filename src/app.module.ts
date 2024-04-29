import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant/restaurant.module';
import { PubModule } from './restaurant/pub/pub.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Pub } from './schemas/pub.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:30000/',
    {dbName: 'restaurants',}
  ),
  RestaurantModule,
  PubModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
