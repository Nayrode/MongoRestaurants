export class CreateCafeDto {
    addr_housenumber: number;
    addr_street: string;
    amenity: string = 'cafe';
    name: string;
    osm_id: string;
    osm_timestamp: string;
    tags: object;
    wheelchair: string;
    internet_access: string;
    opening_hours: string;
    brand: string;
  
}

export class UpdateCafeDto {
    addr_housenumber?: number;
    addr_street?: string;
    amenity?: string;
    name?: string;
    osm_id?: string;
    osm_timestamp?: string;
    tags?: object;
    wheelchair?: string;
    internet_access?: string;
    opening_hours?: string;
    brand?: string;

}
