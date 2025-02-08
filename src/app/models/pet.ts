import { Owner } from './owner';
import { PetType } from './pettype';
import { Visit } from './visit';

export interface Pet {
  id: number;
  name: string;
  birthDate: string;
  type: PetType;
  owner: Owner;
  visits: Visit[];
}
