import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BarService } from './bar.service';
import { Bar } from 'src/schemas/bar.schema';
import { CreateBarDto, UpdateBarDto } from './dto/bar.dto';

@Controller('bar')
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Get()
  bar(): Promise<Bar[]> {
    return this.barService.bar();
  }

  @Post()
  async create(@Body() createBarDto: CreateBarDto): Promise<any> {
    return this.barService.create(createBarDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBarDto: UpdateBarDto): Promise<any> {
    return this.barService.update(id, updateBarDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.barService.delete(id);
  }
}
