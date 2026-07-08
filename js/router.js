class Router {

    constructor(rootId) {

        this.root = document.getElementById(rootId);

        this.currentView = null;

    }

    async show(view) {

        if (this.currentView?.unmount) {

            this.currentView.unmount();

        }

        this.currentView = view;

        this.root.innerHTML = await view.render();

        if (view.mount) {

            view.mount();

        }

    }

}

export default Router;