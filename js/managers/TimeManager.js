import Config from "../config.js";
import Storage from "../storage.js";

class TimeManager {

    constructor() {

        this.offset =
            Storage.load("timeOffset") ?? 0;

    }

    now() {

        const date = new Date();

        if (this.offset !== 0) {

            date.setDate(
                date.getDate() + this.offset
            );

        }

        return date;

    }

    madridNow() {

        return new Date(

            this.now().toLocaleString(
                "en-US",
                {
                    timeZone: Config.timezone
                }

            )

        );

    }

    releaseDate() {

        return new Date(
            Config.releaseDate + "T00:00:00"
        );

    }

    unlockedDay() {

        const today = this.madridNow();

        const start = this.releaseDate();

        const diff = today - start;

        const days = Math.floor(

            diff / 86400000

        ) + 1;

        return Math.max(
            1,
            Math.min(
                Config.totalNotes,
                days
            )
        );

    }

    nextUnlock() {

        const now = this.madridNow();

        const tomorrow = new Date(now);

        tomorrow.setHours(
            24,
            0,
            0,
            0
        );

        return tomorrow - now;

    }

    formatRemaining(ms) {

        const sec =
            Math.floor(ms / 1000);

        const h =
            String(
                Math.floor(sec / 3600)
            ).padStart(2, "0");

        const m =
            String(
                Math.floor(sec % 3600 / 60)
            ).padStart(2, "0");

        const s =
            String(
                sec % 60
            ).padStart(2, "0");

        return `${h}:${m}:${s}`;

    }

    formatDate() {

        return this.madridNow()

            .toLocaleDateString(

                "es-ES",

                {

                    weekday: "long",

                    day: "numeric",

                    month: "long",

                    year: "numeric"

                }

            );

    }

    formatClock() {

        return this.madridNow()

            .toLocaleTimeString(

                "es-ES"

            );

    }

    addDay() {

        this.offset++;

        Storage.save(
            "timeOffset",
            this.offset
        );

    }

    removeDay() {

        this.offset--;

        Storage.save(
            "timeOffset",
            this.offset
        );

    }

    reset() {

        this.offset = 0;

        Storage.remove(
            "timeOffset"
        );

    }

}

export default new TimeManager();