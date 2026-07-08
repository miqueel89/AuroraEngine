import BaseComponent from "./BaseComponent.js";

export default class Countdown extends BaseComponent {

    constructor(props = {}) {

        super(props);

        this.interval = null;

    }

    template() {

        return `

        <div class="countdown">

            00:00:00

        </div>

        `;

    }

    mount() {

        console.log("Countdown iniciado");

    }

    unmount() {

        clearInterval(this.interval);

    }

}