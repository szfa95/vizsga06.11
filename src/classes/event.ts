export interface Event {
    name: string,
    theme: string,
    date: Date,
    place: string,
    registeredPeople?: []
  }


  let XFestival: Event = {
    name: "XFest",
    theme: "qwerty",
    date: new Date("2020-02-02"),
    place: "land",
  }