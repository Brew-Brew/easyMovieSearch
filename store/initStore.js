import { observable, action } from 'mobx';

class Store {
    constructor() {
        this.data = observable({theater:[
            { id: "cgv", title: "CGV" },
            { id: "megabox", title: "MEGA BOX" },
            { id: "lotte-cinema", title: "LOTTE CINEMA" }
          ],location: {}});
    }

    @action
    initLocation=(data)=>{
        console.log(data);
        this.data.location={...data};
    }
}

export default function initStore() {
  return new Store();
}