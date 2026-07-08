export default class NoteService {

    static async load(id) {

        const response = await fetch(`project/notes/${id}.json`);

        if (!response.ok) {

            throw new Error(
                `No se pudo cargar la nota (${response.status})`
            );

        }

        return await response.json();

    }

}