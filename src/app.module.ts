import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:30000/',
    {dbName: 'restaurants',}
  ),
  RestaurantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
