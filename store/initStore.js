import { observable, action } from 'mobx';

class Store {
    constructor() {
        this.theater = observable([
            { id: "cgv", title: "CGV" },
            { id: "megabox", title: "MEGA BOX" },
            { id: "lotte-cinema", title: "LOTTE CINEMA" }
          ]);
        this.location=observable({latitude: null,longitude: null});
    }

    @action
    initLocation=(data)=>{
        this.location=data;
    }
}

export default function initStore() {
  return new Store();
}