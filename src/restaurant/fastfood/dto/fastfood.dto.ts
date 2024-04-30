export class CreateFastfoodDto {

    amenity: string = 'fast_food';
    cuisine: string;
    name: string;
    osm_id: string;
    osm_timestamp: string;
    tags: object;
    wheelchair: string;
    addr_street: string;
    brand: string; 
    opening_hours: string;
    addr_housenumber: number;
    drive_through: string;
  
}

export class UpdateFastfoodDto {
    amenity?: string;
    cuisine?: string;
    name?: string;
    osm_id?: string;
    osm_timestamp?: string;
    tags?: object;
    wheelchair?: string;
    addr_street?: string;
    brand?: string; 
    opening_hours?: string;
    addr_housenumber?: number;
    drive_through?: string;

}
