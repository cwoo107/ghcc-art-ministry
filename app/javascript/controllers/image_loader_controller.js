import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["image", "placeholder"];

    connect() {
        this.loadImage();
    }

    loadImage() {
        const img = new Image();
        img.src = this.imageTarget.src;

        img.onload = () => {
            this.imageTarget.classList.remove("hidden");
            this.imageTarget.classList.add("loaded");
            this.placeholderTarget.style.display = "none";  // Hide the placeholder
        };
    }
}
