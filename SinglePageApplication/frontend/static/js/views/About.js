import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHTML(){
        return `
            <h1>About</h1>
            <p>
                You are viewing the Abouts. :)
            </p>
        `;
    }
}