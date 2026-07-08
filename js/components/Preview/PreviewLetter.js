export default class PreviewLetter {

    render(note) {

        return `

<div class="preview-card">

    <div class="preview-icon">

        ❤️

    </div>

    <h1>${note.title}</h1>

    <h3>${note.subtitle}</h3>

    <p>

        ${note.text[0]}

    </p>

    <button id="previewOpen">

        Abrir carta

    </button>

</div>

`;

    }

}