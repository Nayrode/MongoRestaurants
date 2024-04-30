import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pub } from 'src/schemas/pub.schema';
import { RestaurantService } from '../restaurant.service';

@Injectable()
export class PubService {
  constructor(
    @InjectModel(Pub.name) private pubModel: Model<Pub>,
    private restaurantService: RestaurantService
  ) {}

  async pub(): Promise<Pub[]> {
    return this.pubModel.find().select('amenity name addr_street').exec();
  }

  async create(createPubDto: any): Promise<any> {
    createPubDto.amenity = 'pub';
    return this.pubModel.create(createPubDto);
  }

  async update(id: string, updatePubDto: any): Promise<any> {
    updatePubDto.amenity = 'pub';
    const existingPub = await this.pubModel.findByIdAndUpdate(id, updatePubDto, { new: true });
    return existingPub;
  }

  /*  async update(id: string, updatePubDto: any): Promise<any> {
    const existingPub = await this.pubModel.findByIdAndUpdate(id, updatePubDto, { new: true });

    if (updatePubDto.amenity) {
      switch (updatePubDto.amenity) {
        case 'restaurant':
          const pubWithoutId = await this.pubModel.findById(id).select('-_id -__v').exec();
          await this.restaurantService.create(pubWithoutId);
          await this.delete(existingPub._id.toString());
          break;
        default:
          existingPub.amenity = 'pub';
          await this.pubModel.findByIdAndUpdate(id, existingPub, { new: true });
          break;
      }
    }

    return existingPub;
  }
  */

  async delete(id: string): Promise<any> {
    return this.pubModel.findByIdAndDelete(id);
  }
}
