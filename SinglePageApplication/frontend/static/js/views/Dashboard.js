import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHTML(){
        return `
            <h1>Welcome back, Dan!</h1>
            <p>
                Test test Test. 
            </p>
            <p>
                <a href="/posts" data-link> View recent posts</a> 
            </p>
            
        `;
    }
}