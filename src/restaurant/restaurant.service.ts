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
    return await this.barModel.find().select('amenity name addr_street').exec();
  }

  async restaurant(): Promise<Restaurant[]> {
    return await this.restaurantModel.find().select('amenity name addr_street').exec();
  }

  async pub(): Promise<Pub[]> {
    return this.pubModel.find().select('amenity name addr_street').exec();
  }


  async fastfood(): Promise<Fastfood[]> {
    return this.fastfoodModel.find().select('amenity name addr_street').exec();
  }

  async cafe(): Promise<Cafe[]> {
    return this.cafeModel.find().select('amenity name addr_street').exec();
  }

  async icecream(): Promise<Icecream[]> {
    return this.icecreamModel.find().select('amenity name addr_street').exec();
  }

  async horaireOuverture(): Promise<{ name: string; horaire: string; }[]> {
    let horaireRestaurant = await this.restaurantModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null }
        }
      },
      {
        $project: {
          _id: 0,
          name: 1, 
          opening_hours: 1 
        }
      }
    ]).exec();

    const barHoraire = await this.barModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null } 
        }
      },
      {
        $project: {
          _id: 0,
          name: 1, 
          opening_hours: 1 
        }
      }
    ]).exec();

    const icecreamHoraire = await this.icecreamModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null } 
        }
      },
      {
        $project: {
          _id: 0, 
          name: 1, 
          opening_hours: 1
        }
      }
    ]).exec();

    const cafeHoraire = await this.cafeModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null }
        }
      },
      {
        $project: {
          _id: 0, 
          name: 1, 
          opening_hours: 1 
        }
      }
    ]).exec();

    const fastfoodHoraire = await this.fastfoodModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null }
        }
      },
      {
        $project: {
          _id: 0, 
          name: 1, 
          opening_hours: 1 
        }
      }
    ]).exec();

    const pubHoraire = await this.pubModel.aggregate([
      {
        $match: {
          opening_hours: { $exists: true, $ne: null }
        }
      },
      {
        $project: {
          _id: 0, 
          name: 1, 
          opening_hours: 1 
        }
      }
    ]).exec();

    horaireRestaurant = horaireRestaurant.concat(barHoraire, icecreamHoraire, cafeHoraire, fastfoodHoraire, pubHoraire);
    return horaireRestaurant;
  }
}
