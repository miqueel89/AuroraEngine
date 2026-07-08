export default class PreviewGift{

    render(note){

        return `

<div class="preview-card">

<h1>

🎁 ${note.title}

</h1>

<p>

${note.description}

</p>

</div>

`;

    }

}