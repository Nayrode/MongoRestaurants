import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Bar extends Document {
  @Prop()
  _id: string;

  @Prop()
  addr_housenumber: number;

  @Prop()
  addr_street: string;

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
  wheelchair: string;

  @Prop()
  internet_access: string;

  @Prop()
  opening_hours: string;

}

export const BarModel = SchemaFactory.createForClass(Bar);