import { People } from "../classes/people";

export interface UserService {
  addPeople(people: People): void;
  removePeople(people: People): void;
  editPeople(people: People): void;
  peopleData(people: People): void
}