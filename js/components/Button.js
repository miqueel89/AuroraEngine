import BaseComponent from "./BaseComponent.js";

export default class Button extends BaseComponent {

    template() {

        return `

            <button
                class="primary-button"
                id="${this.props.id}">

                ${this.props.text}

            </button>

        `;

    }

}