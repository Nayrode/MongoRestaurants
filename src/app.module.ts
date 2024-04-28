import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [RestaurantModule],
  controllers: [AppController, RestaurantController],
  providers: [AppService],
})
export class AppModule {}
