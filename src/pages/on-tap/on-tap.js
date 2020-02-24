import {inject} from 'aurelia-framework';
import { MenuService } from 'services/menu-service';
import { Helpers } from 'resoures/helpers'

@inject(MenuService, Helpers)

export class OnTap {
    menu
    beerList
    tapList
    menuSections;
    beersOnTap;

    constructor(menuService, helpers) {
        this.menuService = menuService;
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

    async activate() {}

    document.querySelector('.card-text-wrapper').addEventListener('click', function (evt) {

    $('.card-text-wrapper').click(function() {
        clickToExpandCards($(this));
    });

    function clickToExapndCards($obj){
        var clickedElement = $obj;
        if (clickedElement.hasClass('expanded')) {
            clickedElement.find('.card-text').hide('slow');
            clickedElement.removeClass('expanded');
        } else {
            clickedElement.find('.card-text').show('slow');
            clickedElement.addClass('expanded');
        }
    };
}
