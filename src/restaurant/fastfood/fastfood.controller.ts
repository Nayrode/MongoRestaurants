import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FastfoodService } from './fastfood.service';
import { Fastfood } from 'src/schemas/fastfood.schema';
import { CreateFastfoodDto, UpdateFastfoodDto } from './dto/fastfood.dto';

@Controller('fastfood')
export class FastfoodController {
  constructor(private readonly fastfoodService: FastfoodService) {}

  @Get()
  fastfood(): Promise<Fastfood[]> {
    return this.fastfoodService.fastfood();
  }

  @Post()
  async create(@Body() createFastfoodDto: CreateFastfoodDto): Promise<any> {
    return this.fastfoodService.create(createFastfoodDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFastfoodDto: UpdateFastfoodDto): Promise<any> {
    return this.fastfoodService.update(id, updateFastfoodDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.fastfoodService.delete(id);
  }
}
