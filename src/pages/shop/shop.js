import {inject} from 'aurelia-framework';

export class Shop {

    constructor() {

    }

    attached() {
        //The attached function is going to fire BEFORE the page is loaded
    }

    async activate() {
        //The activate function is going to fire AFTER the page is loaded
        //Typically this is where you would want to do any routes to bring in the data for a page.
        //If this data is going to take awhile to load, I would do it in the attached.
        //Aurelia supports ES6/7 Methods so using async/await is going to be your best friend
    }
}
