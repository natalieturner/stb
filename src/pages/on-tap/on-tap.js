import {inject} from 'aurelia-framework';
import { MenuService } from 'services/menu-service';

@inject(MenuService)

export class OnTap {
    beerList;

    constructor(menuService) {
        this.menuService = menuService;
    }

    async attached() {
        this.beerList = await this.menuService.getMenu();
        console.log('beerlit - ', this.beerList);
    }

    async activate() {
        //The activate function is going to fire AFTER the page is loaded
        //Typically this is where you would want to do any routes to bring in the data for a page.
        //If this data is going to take awhile to load, I would do it in the attached.
        //Aurelia supports ES6/7 Methods so using async/await is going to be your best friend
    }

}
