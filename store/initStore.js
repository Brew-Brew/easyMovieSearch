import { observable,action } from 'mobx';
import theater from '../pages/theater';


let store = null;

class Store {
    @observable theater = ''

    constructor() {
        this.theater = [
            { id: "cgv", title: "CGV" },
            { id: "megabox", title: "MEGA BOX" },
            { id: "lotte-cinema", title: "LOTTE CINEMA" }
          ];
    }
}

export default function initStore() {
  return new Store();
}