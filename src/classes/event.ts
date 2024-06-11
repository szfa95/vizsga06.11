export class People {
    constructor(
      public name: string,
      public theme: string,
      public date: Date,
      public place: string,
      public registeredPeople?: []
    ) {}
  }
