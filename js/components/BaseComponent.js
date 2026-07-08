import BaseView from "./BaseView.js";
import Config from "../config.js";

export default class HomeView extends BaseView {

    constructor() {

        super();

        this.openButton = null;

    }

    render() {

        return `

        <main class="main-card fade-in">

            <div class="heart">
                ❤️
            </div>

            <h1>
                ${Config.appName}
            </h1>

            <p>

                ${Config.releaseDate}

            </p>

            <br>

            <h2>

                Hoy tienes un recuerdo esperando.

            </h2>

            <br>

            <p>

                Cada día descubrirás un pedacito más
                de nuestra historia.

            </p>

            <button
                id="openButton"
                class="primary-button">

                Abrir recuerdo

            </button>

        </main>

        `;

    }

    mount() {

        console.log("🏠 HomeView montada");

        this.openButton = document.querySelector("#openButton");

        this.openButton.addEventListener(
            "click",
            this.openNote
        );

    }

    unmount() {

        console.log("🏠 HomeView desmontada");

        if (this.openButton) {

            this.openButton.removeEventListener(
                "click",
                this.openNote
            );

        }

    }

    openNote = () => {

        console.log("📖 Abrir recuerdo");

    }

}