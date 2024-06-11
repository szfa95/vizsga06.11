import { Event } from "../classes/event";

export interface EventService {
  addEvent(event: Event): void;
  removeEvent(event: Event): void;
  editEvent(event: Event): void
}