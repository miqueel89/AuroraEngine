import BaseComponent from "./BaseComponent.js";

export default class Card extends BaseComponent {

    template() {

        return `

        <main class="main-card">

            ${this.props.content}

        </main>

        `;

    }

}