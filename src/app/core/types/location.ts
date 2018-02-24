export class Location {
  name: string;
  address: string;
  facilityType: FacilityType;
  fieldType: FieldType;
  url: string;
  lat: number;
  lng: number;
  createdAt: Date;
}

export enum FieldType {
  Grass = 'grass',
  Turf = 'turf',
  Futsal = 'futsal',
}

export enum FacilityType {
  Indoor = 'indoor',
  Outdoor = 'Outdoor',
}
