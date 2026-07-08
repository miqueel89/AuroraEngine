import NoteView from "./NoteView.js";

import TimeManager from "../managers/TimeManager.js";

import Config from "../config.js";

export default class HomeView {

    render() {

        return `

        <section class="main-card fade-up">

            <div class="logo float">
                ✦
            </div>

            <h1>
                2 años a tu lado
            </h1>

            <p class="subtitle">
                Cada día descubrirás un poco de mi amor por tí.
            </p>

            <p class="date">
                Comienza el 8 de julio de 2026
            </p>

            <button
                id="openButton"
                class="primary-button">

                💙 Abrir recuerdo

            </button>

            

          ${window.Aurora.config.workspace.enabled ? `

<button
    id="workspaceButton"
    class="secondary-button">

    ⚙ Workspace

</button>

` : ""}

            <div class="countdown">

                <div class="countdown-title">
                    Próximo recuerdo en
                </div>

                <div
                    id="countdown"
                    class="countdown-time">

                    23h 59m

                </div>

            </div>

        </section>

        `;

    }

    mount() {

        const countdown = document.getElementById("countdown");

if (countdown) {

    countdown.textContent = TimeManager.formatRemaining(
        TimeManager.nextUnlock()
    );

}

        this.timer = setInterval(() => {

    const countdown = document.getElementById("countdown");

    if (countdown) {

        countdown.textContent = TimeManager.formatRemaining(
            TimeManager.nextUnlock()
        );

    }

}, 1000);

     const workspaceButton =

    document.getElementById(

        "workspaceButton"

    );

if (workspaceButton) {

    workspaceButton.addEventListener("click", () => {

        window.Aurora.showWorkspace();

    });

}

        document
            .getElementById("openButton")
            .addEventListener("click", async () => {

                await window.Aurora.router.show(
                    new NoteView()
                );

            });

    }

   unmount() {

    if (this.timer) {

        clearInterval(this.timer);

    }

}

}