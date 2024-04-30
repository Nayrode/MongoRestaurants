import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fastfood } from 'src/schemas/fastfood.schema';
import { PubService } from '../pub/pub.service';

@Injectable()
export class FastfoodService {
  constructor(
    @InjectModel(Fastfood.name) private fastfoodModel: Model<Fastfood>,
    private readonly pubService: PubService
  ) {}

  async fastfood(): Promise<Fastfood[]> {
    return this.fastfoodModel.find().select('amenity name addr_street').exec();
  }

  async create(createFastfoodDto: any): Promise<any> {
    createFastfoodDto.amenity = 'fastfood';
    return this.fastfoodModel.create(createFastfoodDto);
  }

  async update(id: string, updateFastfoodDto: any): Promise<any> {
    updateFastfoodDto.amenity = 'fastfood';
    const existingFastfood = await this.fastfoodModel.findByIdAndUpdate(id, updateFastfoodDto, { new: true });
    return existingFastfood;
  }

  /*
  async update(id: string, updateFastfoodDto: any): Promise<any> {
    const existingFastfood = await this.fastfoodModel.findByIdAndUpdate(id, updateFastfoodDto, { new: true });

    if (updateFastfoodDto.amenity && updateFastfoodDto.amenity !== 'fastfood') {
      try {
        await this[updateFastfoodDto.amenity + 'Service'].create(existingFastfood);
        await this.delete(existingFastfood._id.toString());

      } catch (ExceptionsHandler) {
        existingFastfood.amenity = 'fastfood';
        await this.fastfoodModel.findByIdAndUpdate(id, existingFastfood, { new: true })
        return existingFastfood;
        
      }
    }

    return existingFastfood;
  }
  */

  async delete(id: string): Promise<any> {
    return this.fastfoodModel.findByIdAndDelete(id);
  }
}
