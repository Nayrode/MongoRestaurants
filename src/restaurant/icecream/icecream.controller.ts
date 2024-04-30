import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IcecreamService } from './Icecream.service';
import { Icecream } from 'src/schemas/icecream.schema';
import { CreateIcecreamDto, UpdateIcecreamDto } from './dto/icecream.dto';

@Controller('icecream')
export class IcecreamController {
  constructor(private readonly icecreamService: IcecreamService) {}

  @Get()
  icecream(): Promise<Icecream[]> {
    return this.icecreamService.icecream();
  }

  @Post()
  async create(@Body() createIcecreamDto: CreateIcecreamDto): Promise<any> {
    return this.icecreamService.create(createIcecreamDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateIcecreamDto: UpdateIcecreamDto): Promise<any> {
    return this.icecreamService.update(id, updateIcecreamDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.icecreamService.delete(id);
  }
}
