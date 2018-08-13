import { observable,action } from 'mobx';

const messages = [
    "nice to have you here",
];

let store = null;

class Store {
    @observable Message = ''

    constructor() {
        this.Message = messages[0];
    }

    @action start = () => {
        this.timer = setInterval(() => {
            this.helloMessage = messages[0];
        }, 10000);
    }

    stop = () => clearInterval(this.timer)
}

export default function initStore() {
  return new Store();
}