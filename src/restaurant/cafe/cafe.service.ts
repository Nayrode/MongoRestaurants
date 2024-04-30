import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cafe } from 'src/schemas/cafe.schema';
import { PubService } from '../pub/pub.service';

@Injectable()
export class CafeService {
  constructor(
    @InjectModel(Cafe.name) private cafeModel: Model<Cafe>,
    private readonly pubService: PubService
  ) {}

  async cafe(): Promise<Cafe[]> {
    return this.cafeModel.find().select('amenity name addr_street').exec();
  }

  async create(createCafeDto: any): Promise<any> {
    createCafeDto.amenity = 'cafe';
    return this.cafeModel.create(createCafeDto);
  }

  async update(id: string, updateCafeDto: any): Promise<any> {
    updateCafeDto.amenity = 'cafe';
    const existingCafe = await this.cafeModel.findByIdAndUpdate(id, updateCafeDto, { new: true });
    return existingCafe;
  }
  
  /*
  async update(id: string, updateCafeDto: any): Promise<any> {
    const existingCafe = await this.cafeModel.findByIdAndUpdate(id, updateCafeDto, { new: true });

    if (updateCafeDto.amenity && updateCafeDto.amenity !== 'cafe') {
      try {
        await this[updateCafeDto.amenity + 'Service'].create(existingCafe);
        await this.delete(existingCafe._id.toString());

      } catch (ExceptionsHandler) {
        existingCafe.amenity = 'cafe';
        await this.cafeModel.findByIdAndUpdate(id, existingCafe, { new: true })
        return existingCafe;
        
      }
    }

    return existingCafe;
  }
  */

  async delete(id: string): Promise<any> {
    return this.cafeModel.findByIdAndDelete(id);
  }
}
