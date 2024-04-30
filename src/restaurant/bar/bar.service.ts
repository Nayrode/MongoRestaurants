import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bar } from 'src/schemas/bar.schema';
import { PubService } from '../pub/pub.service';

@Injectable()
export class BarService {
  constructor(
    @InjectModel(Bar.name) private barModel: Model<Bar>,
    private readonly pubService: PubService
  ) {}

  async bar(): Promise<Bar[]> {
    return this.barModel.find().select('amenity name addr_street').exec();
  }

  async create(createBarDto: any): Promise<any> {
    createBarDto.amenity = 'bar';
    return this.barModel.create(createBarDto);
  }

  async update(id: string, updateBarDto: any): Promise<any> {
    updateBarDto.amenity = 'bar';
    const existingBar = await this.barModel.findByIdAndUpdate(id, updateBarDto, { new: true });
    return existingBar;
  }

  /*
  async update(id: string, updateBarDto: any): Promise<any> {
    const existingBar = await this.barModel.findByIdAndUpdate(id, updateBarDto, { new: true });

    if (updateBarDto.amenity && updateBarDto.amenity !== 'bar') {
      try {
        await this[updateBarDto.amenity + 'Service'].create(existingBar);
        await this.delete(existingBar._id.toString());

      } catch (ExceptionsHandler) {
        existingBar.amenity = 'bar';
        await this.barModel.findByIdAndUpdate(id, existingBar, { new: true })
        return existingBar;
        
      }
    }

    return existingBar;
  }
, */

  async delete(id: string): Promise<any> {
    return this.barModel.findByIdAndDelete(id);
  }
}
