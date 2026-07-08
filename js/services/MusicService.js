import NoteIndexService from "./NoteIndexService.js";

class MusicService {

    async load() {

        const response = await fetch(
            "Project/music.json"
        );

        const music = await response.json();

        const notes = await NoteIndexService.load();

        music.forEach(song => {

            song.usedIn = [];

            notes.forEach(note => {

                if (note.music === song.file) {

                    song.usedIn.push({

                        id: note.id,
                        title: note.title

                    });

                }

            });

        });

        return music;

    }

    async get(id){

        const songs = await this.load();

        return songs.find(song=>song.id===id);

    }

}

export default new MusicService();