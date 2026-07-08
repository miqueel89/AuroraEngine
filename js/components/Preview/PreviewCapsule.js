export default class PreviewCapsule{

    render(note){

        return `

<div class="preview-card">

<h1>

💌 ${note.title}

</h1>

<p>

Esta cápsula del tiempo se abrirá en:

</p>

<h2>

${note.openDate}

</h2>

</div>

`;

    }

}