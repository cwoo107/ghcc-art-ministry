import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        this.initializeMasonry();
    }

    disconnect() {
        this.masonry.destroy();
    }

    initializeMasonry() {
        this.masonry = new Masonry(this.element, {
            itemSelector: '.grid-item',  // adjust the selector if needed
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
    }
}
