export class Event {
    constructor(
      public name: string,
      public theme: string,
      public date: Date,
      public place: string,
      public registeredPeople: []
    ) {}
  }