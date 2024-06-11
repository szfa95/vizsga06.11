"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Festival = void 0;
class Festival {
    constructor() {
        this.event = [];
        this.people = [];
    }
    addEvent(event) {
        this.event.push(event);
    }
    removeEvent(name) {
        this.event = this.event.filter(event => event.name !== name);
    }
    editEvent(name, theme, date, place) {
        const event = this.event.find(event => event.name == name);
        return event;
    }
    themeGrouping(theme) {
        return this.event.filter(event => event.theme == theme);
    }
    eventData(name) {
        return this.Event.find(event => event.name == name) | "nincs ilyen rendezvény";
    }
    addPeople(people) {
        this.people.push(people);
    }
    removePeople(id) {
        this.people = this.people.filter(people => people.id !== id);
    }
    editPeople(people) {
    }
    peopleData(people) {
        return this.People.find(people => people.name == name) | "nincs ilyen rendezvény";
    }
}
exports.Festival = Festival;
