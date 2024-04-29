import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Restaurant {
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
  wheelchair: string;

  @Prop()
  internet_access: string;

  @Prop()
  addr_housenumber: number;

  @Prop()
  addr_street: string;

  @Prop()
  cuisine: string;

  @Prop()
  brand: string;

  @Prop()
  opening_hours: string;

}

export const RestaurantModel = SchemaFactory.createForClass(Restaurant);