import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Restaurant extends Document {
  @Prop()
  osm_id: string;

  @Prop()
  addr_street: string;

  @Prop()
  addr_housenumber: number;

  @Prop()
  amenity: string;

  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  operator: string;

  @Prop()
  ref: string;

  @Prop()
  wheelchair: string;

  @Prop()
  internet_access: string;

  @Prop()
  opening_hours: string;

  @Prop()
  drive_through: string;

  @Prop()
  building: string;

  @Prop()
  cuisine: string;

  @Prop()
  capacity: string;

  @Prop()
  tourism: string;

  @Prop()
  osm_user: string;

  @Prop()
  osm_timestamp: string;

  @Prop()
  smoking: string;

  @Prop()
  addr_city: string;

  @Prop()
  osm_version: string;

  @Prop()
  osm_changeset: string;

  @Prop()
  outdoor_seating: string;

  @Prop()
  contact_facebook: string;  
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);