export default class Note {

    constructor(data = {}) {

        this.id = data.id || "000";

        this.title = data.title || "";

        this.subtitle = data.subtitle || "";

        this.text = data.text || "";

        this.theme = data.theme || "default";

    }

    hasTitle() {

        return this.title.length > 0;

    }

    hasSubtitle() {

        return this.subtitle.length > 0;

    }

    hasText() {

        return this.text.length > 0;

    }

}