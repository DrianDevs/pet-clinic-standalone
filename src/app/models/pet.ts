import { Owner } from './owner';

export interface Pet {
  id: number;
  name: string;
  birthDate: string;
  type: any;
  //type: PetType;
  owner: Owner;
  visits: any[];
  //visits: Visit[];
}
