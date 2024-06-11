import { Event } from "../classes/event";

export interface EventService {
  addEvent(event: Event): void;
  removeEvent(name: string): void;
  editEvent(event: Event): void;
  themeGrouping(theme: string): void;
  eventData(event: Event): void
}