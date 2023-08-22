// audio-player_controller.js

import { Controller } from "@hotwired/stimulus";
import Amplitude from "amplitudejs";

export default class extends Controller {
    static targets = ["darkModeToggle", "songSaved", "songPercentagePlayed"];

    connect() {
        this.initializeTheme();
        this.initializeAmplitude();
    }

    initializeTheme() {
        let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
    }

    toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }

    toggleSongSavedStatus() {
        this.songSavedTarget.classList.toggle("saved");
    }

    initializeAmplitude() {
        Amplitude.init({
            bindings: {
                37: "prev",
                39: "next",
                32: "play_pause",
            },
            callbacks: {
                timeupdate: () => {
                    let percentage = Amplitude.getSongPlayedPercentage();

                    if (isNaN(percentage)) {
                        percentage = 0;
                    }

                    let slider = this.songPercentagePlayedTarget;
                    slider.style.backgroundSize = percentage + "% 100%";
                },
            },
            // ... Rest of your Amplitude setup (songs, etc.)
        });
    }

    preventSpaceDefaultBehavior(e) {
        if (e.keyCode == 32) {
            e.preventDefault();
        }
    }
}
