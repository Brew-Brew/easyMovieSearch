import { observable } from 'mobx';

class Store {
    constructor() {
        this.theater = observable([
            { id: "cgv", title: "CGV" },
            { id: "megabox", title: "MEGA BOX" },
            { id: "lotte-cinema", title: "LOTTE CINEMA" }
          ]);
    }
}

export default function initStore() {
  return new Store();
}