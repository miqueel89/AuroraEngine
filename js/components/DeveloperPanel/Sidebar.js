export default class Sidebar {

    constructor() {

        this.sections = [
            {
                id: "notes",
                icon: "❤️",
                title: "Notas"
            },
            {
                id: "music",
                icon: "🎵",
                title: "Música"
            },
            {
                id: "images",
                icon: "🖼️",
                title: "Imágenes"
            },
            {
                id: "time",
                icon: "📅",
                title: "Tiempo"
            },
            {
                id: "project",
                icon: "📦",
                title: "Proyecto"
            },
            {
                id: "settings",
                icon: "⚙️",
                title: "Ajustes"
            }
        ];

    }

    render() {

        return `

<aside class="workspace-sidebar">

    <div class="workspace-logo">

        Aurora

    </div>

    <nav>

        ${this.sections.map((section,index)=>`

<button
class="sidebar-item ${index===0 ? "active" : ""}"
data-section="${section.id}">

<span class="icon">

${section.icon}

</span>

<span>

${section.title}

</span>

</button>

`).join("")}

    </nav>

</aside>

`;

    }

    mount() {

        document
        .querySelectorAll(".sidebar-item")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                document
                .querySelectorAll(".sidebar-item")
                .forEach(item=>item.classList.remove("active"));

                button.classList.add("active");

                document.dispatchEvent(

                    new CustomEvent(
                        "workspace:section",
                        {
                            detail:button.dataset.section
                        }
                    )

                );

            });

        });

    }

    unmount(){}

}