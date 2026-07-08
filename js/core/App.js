import Router from "../router.js";

import HomeView from "../views/HomeView.js";

import WorkspaceView from "../views/WorkspaceView.js";

import Kernel from "./Kernel.js";

import ThemeManager from "../managers/ThemeManager.js";

import DeveloperPanel from "../components/DeveloperPanel/DeveloperPanel.js";

import Config from "../config.js";

class AuroraApp {

    constructor() {

        this.router = new Router("app");

        this.config = Config;

        window.Aurora = this;

    }

    start() {

        Kernel.start?.();

        ThemeManager.apply();

        if (Config.debug) {

            DeveloperPanel.init();

        }

        this.showHome();

    }

    showHome() {

        this.router.show(

            new HomeView()

        );

    }

    showWorkspace() {

        if (!Config.workspace.enabled) {

            return;

        }

        this.router.show(

            new WorkspaceView()

        );

    }

}

export default AuroraApp;