import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CafeService } from './cafe.service';
import { Cafe } from 'src/schemas/cafe.schema';
import { CreateCafeDto, UpdateCafeDto } from './dto/cafe.dto';

@Controller('cafe')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}

  @Get()
  cafe(): Promise<Cafe[]> {
    return this.cafeService.cafe();
  }

  @Post()
  async create(@Body() createCafeDto: CreateCafeDto): Promise<any> {
    return this.cafeService.create(createCafeDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCafeDto: UpdateCafeDto): Promise<any> {
    return this.cafeService.update(id, updateCafeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.cafeService.delete(id);
  }
}
