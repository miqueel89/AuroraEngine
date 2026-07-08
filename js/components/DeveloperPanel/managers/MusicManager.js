import MusicService from "../../../services/MusicService.js";

export default class MusicManager {

    constructor() {

        this.music = [];
        this.filteredMusic = [];
        this.currentAudio = null;

    }

    async render() {

        return `

<div class="workspace-grid">

    <aside class="note-column">

        <div class="panel-header">

            <h2>

                🎵 Música

            </h2>

            <input
                id="musicSearch"
                class="workspace-search"
                type="text"
                placeholder="Buscar canción...">

        </div>

        <div id="musicList">

            Cargando...

        </div>

    </aside>

    <section class="preview-column">

        <div
            id="musicPreview"
            class="preview-card">

            <div class="preview-heart">

                🎵

            </div>

            <h1>

                Selecciona una canción

            </h1>

            <p>

                Elige una canción para escucharla.

            </p>

        </div>

    </section>

</div>

`;

    }

    async mount() {

        this.music = await MusicService.load();

        this.filteredMusic = [...this.music];

        this.renderList();

        document
        .getElementById("musicSearch")
        ?.addEventListener("input",(e)=>{

            this.filter(e.target.value);

        });

    }

    filter(text){

        text=text.toLowerCase();

        this.filteredMusic=this.music.filter(song=>{

            return song.name.toLowerCase().includes(text);

        });

        this.renderList();

    }

    renderList(){

        const list=document.getElementById("musicList");

        if(!list){

            return;

        }

        list.innerHTML="";

        this.filteredMusic.forEach(song=>{

            const card=document.createElement("div");

            card.className="note-card";

            card.innerHTML=`

<div class="note-title">

🎵 ${song.name}

</div>

`;

            card.addEventListener("click",()=>{

                this.show(song);

            });

            list.appendChild(card);

        });

    }

    show(song){

        const preview=document.getElementById("musicPreview");

        if(!preview){

            return;

        }

        if(this.currentAudio){

            this.currentAudio.pause();

        }

        preview.innerHTML=`

<h1>

🎵 ${song.name}

</h1>

<p>

Archivo

</p>

<p>

${song.file}

</p>

<p>

Usada en

</p>

<p>

${song.usedIn.length>0
? song.usedIn.join("<br>")
: "No utilizada"}

</p>

<audio
id="workspaceAudio"
controls>

<source
src="Project/Music/${song.file}"
type="audio/mpeg">

</audio>

`;

        this.currentAudio=

            document.getElementById("workspaceAudio");

    }

    unmount(){

        if(this.currentAudio){

            this.currentAudio.pause();

        }

    }

}