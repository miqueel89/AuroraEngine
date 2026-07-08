import BaseComponent from "./BaseComponent.js";

export default class Modal extends BaseComponent {

    template() {

        return `

        <div class="modal">

            <div class="modal-content">

                ${this.props.content}

            </div>

        </div>

        `;

    }

}