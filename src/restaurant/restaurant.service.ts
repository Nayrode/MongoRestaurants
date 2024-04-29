import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../schemas/restaurant.schema';
import { Bar } from '../schemas/bar.schema';
import { Icecream } from '../schemas/icecream.schema';
import { Cafe } from '../schemas/cafe.schema';
import { Fastfood } from '../schemas/fastfood.schema';
import { Pub } from '../schemas/pub.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private readonly restaurantModel: Model<Restaurant>,
    @InjectModel(Bar.name) private readonly barModel: Model<Bar>,
    @InjectModel(Icecream.name) private readonly icecreamModel: Model<Icecream>,
    @InjectModel(Cafe.name) private readonly cafeModel: Model<Cafe>,
    @InjectModel(Fastfood.name) private readonly fastfoodModel: Model<Fastfood>,
    @InjectModel(Pub.name) private readonly pubModel: Model<Pub>,
  ) {}

  async bar(): Promise<Bar[]> {
    return await this.barModel.find().exec();
  }

  async restaurant(): Promise<Restaurant[]> {
    return await this.restaurantModel.find().exec();
  }

  async pub(): Promise<Pub[]> {
    return this.pubModel.find().exec();
  }


  async fastfood(): Promise<Fastfood[]> {
    return this.fastfoodModel.find().exec();
  }

  async cafe(): Promise<Cafe[]> {
    return this.cafeModel.find().exec();
  }

  async icecream(): Promise<Icecream[]> {
    return this.icecreamModel.find().exec();
  }

  async horaireOuverture(): Promise<Restaurant[]> {
    return this.restaurantModel.find({ opening_hours: { $exists: true } }).exec();
  }
}
