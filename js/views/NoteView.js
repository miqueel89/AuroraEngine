import NoteService from "../services/NoteService.js";
import HomeView from "./HomeView.js";

export default class NoteView {

    constructor(id = "001") {

        this.id = id;
        this.note = null;

    }

    async render() {

        this.note = await NoteService.load(this.id);

        return `

<section class="note-screen fade-up">

    <div class="letter">

        <div class="letter-header">

            <span class="day">
                Día ${this.note.day}
            </span>

            <div class="heart">
                💙
            </div>

        </div>

        ${this.note.image ? `

        <div class="letter-image">

            <img
                src="Project/Images/${this.note.image}"
                alt="${this.note.title}">

        </div>

        ` : ""}

        <h1>${this.note.title}</h1>

        <h2>${this.note.subtitle}</h2>

        ${this.note.music ? `

        <div class="letter-music">

            <audio
                id="letterAudio"
                controls
                autoplay>

                <source
                    src="Project/Music/${this.note.music}"
                    type="audio/mpeg">

            </audio>

        </div>

        ` : ""}

        <div
            id="letterContent"
            class="letter-content">

        </div>

        <div class="signature">

            ${this.note.author}

            <span>❤️</span>

        </div>

        <button
            id="backButton"
            class="secondary-button">

            Volver

        </button>

    </div>

</section>

`;

    }

    mount() {

        this.typeParagraph();

        const audio =
            document.getElementById("letterAudio");

        if (audio) {

            audio.volume = 0.35;

        }

        document
            .getElementById("backButton")
            .addEventListener("click", () => {

                if (audio) {

                    audio.pause();

                }

                window.Aurora.router.show(
                    new HomeView()
                );

            });

    }

    async typeParagraph() {

        const container =
            document.getElementById("letterContent");

        for (const paragraph of this.note.text) {

            const p = document.createElement("p");

            container.appendChild(p);

            await this.write(p, paragraph);

            await this.delay(400);

        }

    }

    write(element, text) {

        return new Promise(resolve => {

            let i = 0;

            const timer = setInterval(() => {

                element.textContent += text[i];

                i++;

                if (i >= text.length) {

                    clearInterval(timer);

                    resolve();

                }

            }, 20);

        });

    }

    delay(ms) {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    }

    unmount() {

        const audio =
            document.getElementById("letterAudio");

        if (audio) {

            audio.pause();

        }

    }

}