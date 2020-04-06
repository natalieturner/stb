import {inject} from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { MenuService } from 'services/menu-service';

@inject(MenuService, DialogController)

export class OnTap {
    menu;
    beerList;
    tapList;
    menuSections;
    beersOnTap;

    constructor(menuService, dialogController) {
        this.menuService = menuService;
        this.dialogController = dialogController;
    }

    async attached() {
        this.loading = true;
        this.menu = await this.menuService.getMenu();
        this.beerList = this.menu['menu'];
        this.menuSections = this.beerList['sections'];
        this.tapList = this.menuSections[0];
        console.log('taplist - ', this.tapList);
        this.beersOnTap = this.tapList['items'];
        console.log(this.beersOnTap);
        this.loading = false;
    }

    clickToExpandCards(beer){
        beer.isExpanded = !beer.isExpanded;
    };

    toggleOpen(beer) {
        for (let beer of this.beersOnTap) {
            if (beer.opened) {
                beer.opened = false;
            }
        }
        beer.opened = !beer.opened;
    }

//     var clickedElement = $obj;
//     if (clickedElement.hasClass('expanded')) {
//     clickedElement.find('.card-text').hide('slow');
//     clickedElement.removeClass('expanded');
// } else {
//     clickedElement.find('.card-text').show('slow');
//     clickedElement.addClass('expanded');
// }
}
