export default class PreviewCoupon {

    render(note){

        return `

<div class="preview-card coupon">

<h1>

🎟 ${note.title}

</h1>

<p>

${note.description}

</p>

<div class="coupon-valid">

Canjeable una vez

</div>

</div>

`;

    }

}