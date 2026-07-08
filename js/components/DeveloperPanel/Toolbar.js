export default class Toolbar {

    constructor(){

        this.title="Notas";

    }

    render(){

        return`

<header class="workspace-toolbar">

    <div>

        <h1 id="workspaceTitle">

            ❤️ ${this.title}

        </h1>

    </div>

    <div class="toolbar-actions">

        <input
            id="workspaceSearch"
            type="text"
            placeholder="Buscar...">

        <button
            id="refreshWorkspace"
            class="toolbar-button">

            ⟳

        </button>

    </div>

</header>

`;

    }

    mount(){

        document.addEventListener(

            "workspace:section",

            e=>{

                this.changeTitle(

                    e.detail

                );

            }

        );

        document
        .getElementById("refreshWorkspace")
        ?.addEventListener("click",()=>{

            location.reload();

        });

    }

    changeTitle(section){

        const titles={

            notes:"❤️ Notas",

            music:"🎵 Música",

            images:"🖼️ Imágenes",

            time:"📅 Tiempo",

            project:"📦 Proyecto",

            settings:"⚙️ Ajustes"

        };

        const title=

            document.getElementById("workspaceTitle");

        if(title){

            title.textContent=titles[section];

        }

    }

    unmount(){}

}