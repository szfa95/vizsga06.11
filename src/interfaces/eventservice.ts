import { Event } from "../classes/event";

export interface EventService {
  addEvent(event: Event): void;
  removeEvent(name: string): void;
  editEvent(event: Event): void;
  themeGrouping(event: Event): void;
  eventData(event: Event): void
}