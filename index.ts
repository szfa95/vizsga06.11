import { Event } from "./src/classes/event";
import { People } from "./src/classes/people";
import { EventService } from "./src/interfaces/eventservice";
import { UserService } from "./src/interfaces/userservice";

export class Festival implements EventService, UserService{


    addEvent(event: Event): void {
        
    }

    removeEvent(event: Event): void {
        
    }

    editEvent(event: Event): void {
        
    }

    themeGrouping(event: Event): void {
        
    }

    eventData(event: Event): void {
        
    }

    addPeople(people: People): void {
        
    }

    removePeople(people: People): void {
        
    }

    editPeople(people: People): void {
        
    }

    peopleData(people: People): void {
        
    }
}