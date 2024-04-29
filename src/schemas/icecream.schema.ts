import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Icecream extends Document {
  @Prop()
  _id: string;

  @Prop()
  amenity: string;

  @Prop()
  name: string;

  @Prop()
  osm_id: string;

  @Prop()
  osm_timestamp: string;

  @Prop({type: Object})
  tags: object;

  @Prop()
  addr_housenumber: number;

  @Prop()
  addr_street: string;

  @Prop()
  wheelchair: string;

  @Prop()
  brand: string; 

  @Prop()
  cuisine: string;

  @Prop()
  opening_hours: string;

  @Prop()
  building: string;

}

export const IcecreamModel = SchemaFactory.createForClass(Icecream);