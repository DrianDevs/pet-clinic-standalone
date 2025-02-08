import { Speciality } from './speciality';
export interface Vet {
  id: number;
  firstName: string;
  lastName: string;
  specialities: Speciality[];
}
