export class CreateIcecreamDto {
    
    addr_street: string;
    amenity: string = 'ice_cream';
    brand: string; 
    name: string;
    osm_id: string;
    osm_timestamp: string;
    tags: object;
    wheelchair: string;
    addr_housenumber: number;
    cuisine: string;
    opening_hours: string;
    building: string;
  
}

export class UpdateIcecreamDto {
    addr_street?: string;
    amenity?: string;
    brand?: string; 
    name?: string;
    osm_id?: string;
    osm_timestamp?: string;
    tags?: object;
    wheelchair?: string;
    addr_housenumber?: number;
    cuisine?: string;
    opening_hours?: string;
    building?: string;

}
