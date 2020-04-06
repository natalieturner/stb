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
        this.menu = await this.menuService.getMenu();
        this.beerList = this.menu['menu'];
        this.menuSections = this.beerList['sections'];
        this.tapList = this.menuSections[0];
        console.log('taplist - ', this.tapList);
        this.beersOnTap = this.tapList['items'];
        console.log(this.beersOnTap);
    }

    clickToExpandCards(beer){
        beer.isExpanded = !beer.isExpanded;
    };

    toggleDiv(divId) {
        $("#"+divId).toggle();
        $('.toggle').not($("#"+divId)).hide();
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
