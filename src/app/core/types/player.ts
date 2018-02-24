export class Player {
  birthday: Date;
  gender: Gender;
  address: string;
  homeField: Location;
  createdAt: Date;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}
