import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Icecream } from 'src/schemas/icecream.schema';

@Injectable()
export class IcecreamService {
  constructor(
    @InjectModel(Icecream.name) private icecreamModel: Model<Icecream>
  ) {}

  async icecream(): Promise<Icecream[]> {
    return this.icecreamModel.find().select('amenity name addr_street').exec();
  }

  async create(createIcecreamDto: any): Promise<any> {
    createIcecreamDto.amenity = 'icecream';
    return this.icecreamModel.create(createIcecreamDto);
  }

  async update(id: string, updateIcecreamDto: any): Promise<any> {
    updateIcecreamDto.amenity = 'icecream';
    const existingIcecream = await this.icecreamModel.findByIdAndUpdate(id, updateIcecreamDto, { new: true });
    return existingIcecream;
  }
  /*
  async update(id: string, updateIcecreamDto: any): Promise<any> {
    const existingIcecream = await this.icecreamModel.findByIdAndUpdate(id, updateIcecreamDto, { new: true });

    if (updateIcecreamDto.amenity && updateIcecreamDto.amenity !== 'icecream') {
      try {
        await this[updateIcecreamDto.amenity + 'Service'].create(existingIcecream);
        await this.delete(existingIcecream._id.toString());

      } catch (ExceptionsHandler) {
        existingIcecream.amenity = 'icecream';
        await this.icecreamModel.findByIdAndUpdate(id, existingIcecream, { new: true })
        return existingIcecream;
        
      }
    }

    return existingIcecream;
  }
  */

  async delete(id: string): Promise<any> {
    return this.icecreamModel.findByIdAndDelete(id);
  }
}
