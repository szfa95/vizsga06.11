"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("./src/classes/event");
const fest_1 = require("./src/services/fest");
const XFestival = new event_1.Event = ("XFest", "qwerty", new Date("2020-02-02"), "land");
console.log("Rendezvények tematikus csoportosítása");
console.log(fest_1.Festival.themeGrouping());
console.log("Rendezvények adatai");
console.log(fest_1.Festival.eventData());
console.log("Résztvevők adatai");
console.log(fest_1.Festival.peopleData());
