export class Home {

    constructor() {}

    attached() {
        //The attached function is going to fire BEFORE the page is loaded
    }

    async activate() {
    }

    openNav() {
        document.getElementById("myNav").width = "100%";
    }

    closeNav() {
        document.getElementById("myNav").width = "0%";
    }

}
