// restaurant.dto.ts

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantDto {

    amenity: string = 'restaurant';
    name: string;
    osm_id: string;
    osm_timestamp: string;
    tags: object;
    wheelchair: string;
    internet_access: string;
    addr_housenumber: number;
    addr_street: string;
    cuisine: string;
    brand: string;
    opening_hours: string;
  
}

export class UpdateRestaurantDto {
    amenity?: string;
    name?: string;
    osm_id?: string;
    osm_timestamp?: string;
    tags?: object;
    wheelchair?: string;
    internet_access?: string;
    addr_housenumber?: number;
    addr_street?: string;
    cuisine?: string;
    brand?: string;
    opening_hours?: string;

}
