export class Event {
    constructor(
      public name: string,
      public theme: string,
      public date: undefined,
      public place: string,
      public registeredPeople?: []
    ) {}
  }
