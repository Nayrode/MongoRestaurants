import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PubService } from './pub.service';
import { Pub } from 'src/schemas/pub.schema';
import { CreatePubDto, UpdatePubDto } from './dto/pub.dto';

@Controller('pub')
export class PubController {
  constructor(private readonly pubService: PubService) {}

  @Get()
  pub(): Promise<Pub[]> {
    return this.pubService.pub();
  }

  @Post()
  async create(@Body() createPubDto: CreatePubDto): Promise<any> {
    return this.pubService.create(createPubDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePubDto: UpdatePubDto): Promise<any> {
    return this.pubService.update(id, updatePubDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.pubService.delete(id);
  }
}
