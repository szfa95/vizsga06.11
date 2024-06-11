"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(name, theme, date, place, registeredPeople) {
        this.name = name;
        this.theme = theme;
        this.date = date;
        this.place = place;
        this.registeredPeople = registeredPeople;
    }
}
exports.Event = Event;
