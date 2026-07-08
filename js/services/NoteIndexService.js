export default class NoteIndexService {

    static async load() {

        const response = await fetch("Project/notes.json");

        const index = await response.json();

        const notes = [];

        for (const item of index) {

            try {

                const noteResponse = await fetch(
                    `Project/Notes/${item.id}.json`
                );

                const note = await noteResponse.json();

                notes.push(note);

            } catch (error) {

                console.error(
                    `No se pudo cargar la nota ${item.id}`,
                    error
                );

            }

        }

        notes.sort((a, b) => a.day - b.day);

        return notes;

    }

    static async getAll() {

        return await this.load();

    }

    static async get(id) {

        const response = await fetch(
            `Project/Notes/${id}.json`
        );

        return await response.json();

    }

}