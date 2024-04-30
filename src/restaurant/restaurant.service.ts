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
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    @InjectModel(Bar.name) private barModel: Model<Bar>,
    @InjectModel(Icecream.name) private icecreamModel: Model<Icecream>,
    @InjectModel(Cafe.name) private cafeModel: Model<Cafe>,
    @InjectModel(Fastfood.name) private fastfoodModel: Model<Fastfood>,
    @InjectModel(Pub.name) private pubModel: Model<Pub>,
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

  async horaireOuverture(): Promise<{ name: string; opening_hours: string; }[]> {
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

  async opened(time: string) {
    const restau = await this.horaireOuverture();
    const horaires = restau.map((restaurant) => {
      return {name: restaurant.name, horairesString: restaurant.opening_hours.split(';'), horaires: {}};
    });
    for (let elem of horaires) {
      for (let horaire of elem.horairesString) {
        const horaireSplit = horaire.split(' ');
        if (horaireSplit.length > 1) {
          const days = this.splitHoraire(horaire[0]);
          for (let day of days) {
            elem.horaires[day] = {open: horaireSplit[1], close: horaireSplit[2]};
          }
        }

      }
    }

    return horaires;
  }

  splitHoraire(horaire: string) {
    //Mon-Sun to Mon, Tue, Wed, Thu, Fri, Sat, Sun
    if (horaire.includes(',')) {
      return horaire.split(',');
    }
    const horaires = horaire.split('-');
    if (horaires.length === 1) {
      return horaires[0];
    }
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let horairesObj = [];
    let take = false
    for (const elem of days) {
      if (elem === horaires[0]) {
        take = true;
      }
      if (take) {
        horairesObj.push(elem);
      }
      if (elem === horaires[1]) {
        take = false;
      }
    }
    return horairesObj;
  }

  async create(createRestaurantDto: any): Promise<any> {
    createRestaurantDto.amenity = 'restaurant';
    return this.restaurantModel.create(createRestaurantDto);
  }

  async update(id: string, updateRestaurantDto: any): Promise<any> {
    updateRestaurantDto.amenity = 'restaurant';
    const existingRestaurant = await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true });
    return existingRestaurant;
  }
/*
  async update(id: string, updateRestaurantDto: any): Promise<any> {
    const existingRestaurant = await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true });

    if (updateRestaurantDto.amenity && updateRestaurantDto.amenity !== 'restaurant') {
      try {
        await this[`${updateRestaurantDto.amenity}Model`].create(existingRestaurant);
        await this.delete(existingRestaurant._id.toString());

      } catch (ExceptionsHandler) {
        existingRestaurant.amenity = 'restaurant';
        await this.restaurantModel.findByIdAndUpdate(id, existingRestaurant, { new: true })
        return existingRestaurant;
        
      }
    }

    return existingRestaurant;
  }
*/

  async delete(id: string): Promise<any> {
    return this.restaurantModel.findByIdAndDelete(id);
  }
}
