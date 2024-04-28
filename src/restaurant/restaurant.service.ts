import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../schemas/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async premiereRequete(): Promise<Restaurant[]> {
    return this.restaurantModel.find({ amenity: 'pub' }).exec();
  }

  async deuxiemeRequete(): Promise<Restaurant[]> {
    return this.restaurantModel.find({ amenity: 'restaurant' }).exec();
  }

  async troisiemeRequete(): Promise<Restaurant[]> {
    return this.restaurantModel.find({ amenity: 'fast_food' }).exec();
  }
}
