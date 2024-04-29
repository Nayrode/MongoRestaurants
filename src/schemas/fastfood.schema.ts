import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Fastfood extends Document {
  @Prop()
  amenity: string;

  @Prop()
  cuisine: string;

  @Prop()
  name: string;

  @Prop()
  osm_id: string;

  @Prop()
  osm_timestamp: string;

  @Prop({type: Object})
  tags: object;

  @Prop()
  wheelchair: string;

  @Prop()
  addr_street: string;

  @Prop()
  brand: string; 

  @Prop()
  opening_hours: string;

  @Prop()
  addr_housenumber: number;

  @Prop()
  drive_through: string;

}

export const FastfoodModel = SchemaFactory.createForClass(Fastfood);