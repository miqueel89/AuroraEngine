import Sidebar from "../components/DeveloperPanel/Sidebar.js";
import Toolbar from "../components/DeveloperPanel/Toolbar.js";
import Workspace from "../components/DeveloperPanel/Workspace.js";
import StatusBar from "../components/DeveloperPanel/StatusBar.js";

export default class WorkspaceView {

    constructor() {

        this.workspace = new Workspace();
        this.sidebar = new Sidebar();
        this.toolbar = new Toolbar();
        this.statusBar = new StatusBar();

    }

    render() {

        return `

<div class="workspace-screen fade-up">

    ${this.sidebar.render()}

    <section class="workspace-area">

        ${this.toolbar.render()}

        ${this.workspace.render()}

        ${this.statusBar.render()}

    </section>

</div>

`;

    }

    mount() {

        this.sidebar.mount?.();

        this.toolbar.mount?.();

        this.workspace.mount?.();

        this.statusBar.mount?.();

    }

    unmount() {

        this.sidebar.unmount?.();

        this.toolbar.unmount?.();

        this.workspace.unmount?.();

        this.statusBar.unmount?.();

    }

}