import Config from "../config.js";

class ThemeManager {

    constructor() {

        this.currentTheme = "";

        this.themes = {

            dawn: {
                background:
                    "linear-gradient(180deg,#FBC2EB 0%,#A6C1EE 100%)",

                card: "#FFFDF8",

                text: "#1F2937",

                accent: "#E85D75"
            },

            day: {

                background:
                    "linear-gradient(180deg,#BBDFFF 0%,#EAF6FF 100%)",

                card: "#FFFFFF",

                text: "#1F2937",

                accent: "#3B82F6"
            },

            sunset: {

                background:
                    "linear-gradient(180deg,#FF9966 0%,#8E54E9 100%)",

                card: "#FFF9F5",

                text: "#1F2937",

                accent: "#F97316"

            },

            night: {

                background:
                    "linear-gradient(180deg,#071021 0%,#111827 45%,#1E293B 100%)",

                card: "#FAF7F2",

                text: "#F8FAFC",

                accent: "#EC4899"

            }

        };

    }

    getMadridHour() {

        const formatter = new Intl.DateTimeFormat("es-ES", {

            hour: "numeric",

            hour12: false,

            timeZone: Config.timezone

        });

        return Number(formatter.format(new Date()));

    }

    detectTheme() {

        const hour = this.getMadridHour();

        if (hour >= 6 && hour < 9) {

            return "dawn";

        }

        if (hour >= 9 && hour < 18) {

            return "day";

        }

        if (hour >= 18 && hour < 21) {

            return "sunset";

        }

        return "night";

    }

    apply() {

        const themeName = this.detectTheme();

        const theme = this.themes[themeName];

        this.currentTheme = themeName;

        document.documentElement.style.setProperty(
            "--background",
            theme.background
        );

        document.documentElement.style.setProperty(
            "--card",
            theme.card
        );

        document.documentElement.style.setProperty(
            "--text",
            theme.text
        );

        document.documentElement.style.setProperty(
            "--accent",
            theme.accent
        );

    }

    getCurrentTheme() {

        return this.currentTheme;

    }

}

export default new ThemeManager();