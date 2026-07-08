import BaseComponent from "./BaseComponent.js";

export default class Toast extends BaseComponent {

    template() {

        return `

        <div class="toast">

            ${this.props.message}

        </div>

        `;

    }

}