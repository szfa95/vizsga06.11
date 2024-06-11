import { Event } from "./src/classes/event";
import { People } from "./src/classes/people";
import { EventService } from "./src/interfaces/eventservice";
import { UserService } from "./src/interfaces/userservice";
import {Festival} from "./src/services/fest"

const XFestival = new Event = (name: "XFest", theme: "qwerty", Date: "2020-02-02", place: "land")

console.log("Rendezvények tematikus csoportosítása")
console.log(fest.themeGrouping())

console.log("Rendezvények adatai")
console.log(fest.eventData())

console.log("Résztvevők adatai")
console.log(fest.peopleData())

fest.addEvent()
fest.removeEvent()
fest.editEvent()
fest.addPeople()
fest.removePeople()
fest.editPeople()

    