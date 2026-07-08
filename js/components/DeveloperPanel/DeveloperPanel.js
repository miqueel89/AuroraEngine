console.log("DeveloperPanel cargado");

import Config from "../../config.js";

import Sidebar from "./Sidebar.js";
import Toolbar from "./Toolbar.js";
import Workspace from "./Workspace.js";
import StatusBar from "./StatusBar.js";

class DeveloperPanel {

    constructor() {

        this.initialized = false;

    }

    init() {

        this.initialized = true;

        console.log("Aurora DeveloperPanel iniciado");

    }

    render() {

        if (!Config.workspace.enabled) {

            return "";

        }

        return `

<div class="workspace">

    ${new Sidebar().render()}

    <div class="workspace-right">

        ${new Toolbar().render()}

        ${new Workspace().render()}

        ${new StatusBar().render()}

    </div>

</div>

`;

    }

}

export default new DeveloperPanel();