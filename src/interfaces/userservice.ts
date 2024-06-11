import { People } from "../classes/people";

export interface UserService {
  addPeople(people: People): void;
  removePeople(id: string): void;
  editPeople(people: People): void;
  peopleData(people: People): string
}

