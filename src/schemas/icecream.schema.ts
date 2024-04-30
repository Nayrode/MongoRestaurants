import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Icecream {
  @Prop()
  addr_street: string;

  @Prop()
  amenity: string;
  
  @Prop()
  brand: string; 

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
  addr_housenumber: number;

  @Prop()
  cuisine: string;

  @Prop()
  opening_hours: string;

  @Prop()
  building: string;

}

export const IcecreamModel = SchemaFactory.createForClass(Icecream);