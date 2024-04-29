import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from 'src/schemas/restaurant.schema';
import { PubService } from '../pub/pub.service';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    private readonly pubService: PubService
  ) {}

  async restaurant(): Promise<Restaurant[]> {
    return this.restaurantModel.find().select('amenity name addr_street').exec();
  }

  async create(createRestaurantDto: any): Promise<any> {
    createRestaurantDto.amenity = 'restaurant';
    return this.restaurantModel.create(createRestaurantDto);
  }
  async update(id: string, updateRestaurantDto: any): Promise<any> {
    const existingRestaurant = await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true });

    if (updateRestaurantDto.amenity && updateRestaurantDto.amenity !== 'restaurant') {
      try {
        await this[updateRestaurantDto.amenity + 'Service'].create(existingRestaurant);
        await this.delete(existingRestaurant._id.toString());

      } catch (ExceptionsHandler) {
        existingRestaurant.amenity = 'restaurant';
        await this.restaurantModel.findByIdAndUpdate(id, existingRestaurant, { new: true })
        return existingRestaurant;
        
      }
    }

    return existingRestaurant;
  }

  async delete(id: string): Promise<any> {
    return this.restaurantModel.findByIdAndDelete(id);
  }
}
