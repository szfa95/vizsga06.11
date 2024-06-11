import { Event } from "./src/classes/event";
import { People } from "./src/classes/people";
import { EventService } from "./src/interfaces/eventservice";
import { UserService } from "./src/interfaces/userservice";

export class Festival implements EventService, UserService{
    private event: Event[] = []
    private people: People[] = []


    addEvent(event: Event): void {
        this.event.push(event)
    }

    removeEvent(name: string): void {
        this.event = this.event.filter(event => event.name !== name)
    }

    editEvent(event: Event): void {
        
    }

    themeGrouping(event: Event): void {
        
    }

    eventData(name: string): string {
        return this.Event.find(event => event.name == name) | "nincs ilyen rendezvény"
    }

    addPeople(people: People): void {
        this.people.push(people)
    }

    removePeople(id: string): void {
        this.people = this.people.filter(people => people.id !== id)
    }

    editPeople(people: People): void {
        
    }

    peopleData(people: People): void {
        
    }
}