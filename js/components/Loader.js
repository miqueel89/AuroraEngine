import BaseComponent from "./BaseComponent.js";

export default class Loader extends BaseComponent {

    template() {

        return `

        <div class="loader">

            <div class="spinner"></div>

            <p>

                Cargando...

            </p>

        </div>

        `;

    }

}