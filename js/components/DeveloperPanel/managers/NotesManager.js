import NoteIndexService from "../../../services/NoteIndexService.js";
import NoteView from "../../../views/NoteView.js";

export default class NotesManager {

    constructor() {

        this.notes = [];
        this.filteredNotes = [];
        this.selected = null;

    }

    async render() {

        return `

<div class="workspace-grid">

    <aside class="note-column">

        <div class="panel-header">

            <h2>

                ❤️ Notas

            </h2>

            <input
                id="noteSearch"
                class="workspace-search"
                type="text"
                placeholder="Buscar una nota...">

        </div>

        <div id="noteList">

            Cargando...

        </div>

    </aside>

    <section class="preview-column">

        <div
            id="previewContainer"
            class="preview-card">

            <div class="preview-heart">

                ❤️

            </div>

            <h1>

                Selecciona una nota

            </h1>

            <p>

                Elige una nota del listado para verla.

            </p>

        </div>

    </section>

</div>

`;

    }

    async mount() {

        this.notes = await NoteIndexService.load();

        this.filteredNotes = [...this.notes];

        this.renderList();

        const search = document.getElementById("noteSearch");

        if (search) {

            search.addEventListener("input", (e) => {

                this.filter(e.target.value);

            });

        }

    }

    filter(text) {

        text = text.toLowerCase();

        this.filteredNotes = this.notes.filter(note => {

            return (

                note.id.toLowerCase().includes(text) ||

                note.title.toLowerCase().includes(text) ||

                (note.subtitle ?? "").toLowerCase().includes(text)

            );

        });

        this.renderList();

    }

    renderList() {

        const list = document.getElementById("noteList");

        if (!list) return;

        list.innerHTML = "";

        this.filteredNotes.forEach(note => {

            const card = document.createElement("div");

            card.className = "note-card";

            card.innerHTML = `

<div class="note-id">

${note.id}

</div>

<div class="note-info">

<div class="note-title">

${note.title}

</div>

<div class="note-subtitle">

${note.subtitle ?? ""}

</div>

</div>

`;

            card.addEventListener("click", () => {

                this.showPreview(note);

            });

            list.appendChild(card);

        });

    }

    showPreview(note) {

        this.selected = note;

        const preview = document.getElementById("previewContainer");

        if (!preview) return;

        preview.innerHTML = `

${note.image ? `

<div class="preview-image">

<img
src="Project/Images/${note.image}"
alt="${note.title}">

</div>

` : ""}

<h1>

${note.title}

</h1>

<h3>

${note.subtitle ?? ""}

</h3>

<p>

<strong>ID:</strong>

${note.id}

</p>

<p>

<strong>Día:</strong>

${note.day}

</p>

<p>

<strong>Autor:</strong>

${note.author}

</p>

<p>

${note.text?.[0] ?? ""}

</p>

<div class="preview-buttons">

<button
id="previewOpen"
class="primary-button">

Abrir nota

</button>

<button
id="previewEdit"
class="secondary-button">

Editar

</button>

</div>

`;

        document
        .getElementById("previewOpen")
        ?.addEventListener("click",()=>{

            window.Aurora.router.show(

                new NoteView(note.id)

            );

        });

        document
        .getElementById("previewEdit")
        ?.addEventListener("click",()=>{

            alert("Editor próximamente");

        });

    }

    unmount() {

        this.notes = [];

        this.filteredNotes = [];

        this.selected = null;

    }

}