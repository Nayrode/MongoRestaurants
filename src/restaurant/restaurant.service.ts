import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../schemas/restaurant.schema';
import { Bar } from '../schemas/bar.schema';
import { Icecream } from '../schemas/icecream.schema';
import { Cafe } from '../schemas/cafe.schema';
import { Fastfood } from '../schemas/fastfood.schema';
import { Pub } from '../schemas/pub.schema';
import e from 'express';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    @InjectModel(Bar.name) private barModel: Model<Bar>,
    @InjectModel(Icecream.name) private icecreamModel: Model<Icecream>,
    @InjectModel(Cafe.name) private cafeModel: Model<Cafe>,
    @InjectModel(Fastfood.name) private fastfoodModel: Model<Fastfood>,
    @InjectModel(Pub.name) private pubModel: Model<Pub>,
  ) {}

  async horaireOuverture(): Promise<{ name: string; horaire: string; amenity: string; }[]> {
    
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
          opening_hours: 1, 
          amenity: 1
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
          opening_hours: 1, 
          amenity: 1
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
          opening_hours: 1, 
          amenity: 1
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
          opening_hours: 1, 
          amenity: 1 
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
          opening_hours: 1, 
          amenity: 1
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
          opening_hours: 1, 
          amenity: 1 
        }
      }
    ]).exec();

    horaireRestaurant = horaireRestaurant.concat(barHoraire, icecreamHoraire, cafeHoraire, fastfoodHoraire, pubHoraire);
    return horaireRestaurant;
  }
  
}
