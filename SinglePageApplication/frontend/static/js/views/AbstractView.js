export default class {
    constructor(params) {
        console.log("Abstract view constructor");
        this.params = params;

        console.log("Params: " + this.params);
    }
    
    setTitle(title) {
        document.title = title;
    }

    async getHTML() {
        return "";
    }
}