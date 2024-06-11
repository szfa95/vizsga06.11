import { Event } from "./event";
import { People } from "./people";
import { EventService } from "../interfaces/eventservice";
import { UserService } from "../interfaces/userservice";

export class Festival implements EventService, UserService{
    private event: Event[] = []
    private people: People[] = []


    addEvent(event: Event): void {
        this.event.push(event)
    }

    removeEvent(name: string): void {
        this.event = this.event.filter(event => event.name !== name)
    }

    editEvent(name: string, theme: string, date: Date, place: string,): Event {
        const event = this.event.find(event => event.name == name)

        return event
    }

    themeGrouping(theme: string): Event[] {
        return this.event.filter(event => event.theme ==theme)
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

    peopleData(people: People): string {
        return this.People.find(people => people.name == name) | "nincs ilyen rendezvény"
    }
}