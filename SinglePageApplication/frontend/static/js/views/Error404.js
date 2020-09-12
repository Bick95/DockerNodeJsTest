import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Error 404");
    }

    async getHTML(){
        return `
            <h1>Error 404</h1>
            <p>
                Error 404 - Page not found.
            </p>
        `;
    }
}