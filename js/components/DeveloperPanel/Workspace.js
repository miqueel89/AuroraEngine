import NotesManager from "./managers/NotesManager.js";
import MusicManager from "./managers/MusicManager.js";

export default class Workspace {

    constructor() {

        this.currentSection = "notes";
        this.currentManager = null;

    }

    render() {

        return `

<section class="workspace-main">

    <div id="workspaceContent">

    </div>

</section>

`;

    }

    mount() {

        document.addEventListener(

            "workspace:section",

            (e)=>{

                this.loadSection(

                    e.detail

                );

            }

        );

        this.loadSection("notes");

    }

    async loadSection(section){

        this.currentSection=section;

        if(this.currentManager?.unmount){

            this.currentManager.unmount();

        }

        switch(section){

            case "notes":

                this.currentManager=new NotesManager();

            break;

            case "music":

                this.currentManager=new MusicManager();

            break;

            default:

                this.currentManager=null;

        }

        const container=

            document.getElementById("workspaceContent");

        if(!container){

            return;

        }

        if(!this.currentManager){

            container.innerHTML=`

<div class="workspace-placeholder">

<h1>

🚧 ${section}

</h1>

<p>

Este módulo todavía no está implementado.

</p>

</div>

`;

            return;

        }

        container.innerHTML=

            await this.currentManager.render();

        this.currentManager.mount?.();

    }

    unmount(){

        this.currentManager?.unmount?.();

    }

}