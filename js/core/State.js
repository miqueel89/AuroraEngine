/**
 * Aurora State
 *
 * Único origen de la verdad.
 */

import EventBus from "./EventBus.js";

class State{

    constructor(){

        this.state={

            currentDay:1,

            currentView:"home",

            opened:false,

            notes:[],

            loading:true,

            theme:"dark"

        };

    }

    get(key){

        return this.state[key];

    }

   set(key, value) {

    const previousValue = this.state[key];

    this.state[key] = value;

    EventBus.emit("stateChanged", {
        key,
        previousValue,
        value
    });

}

    setMany(values) {

    Object.entries(values).forEach(([key, value]) => {

        this.set(key, value);

    });

}

    all(){

        return this.state;

    }

}

export default new State();