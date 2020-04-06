import $ from 'jquery';
import {SessionService} from "../../../services/session-service";
import {inject} from 'aurelia-framework';

@inject(SessionService)

export class NavigationBar {
    attached() {

    }

    constructor(sessionService) {
        this.sessionService = sessionService;
    }

    scrollToRef(ref) {
        $("html, body").animate({ scrollTop: $($(`#${ref}`)).offset().top - 200}, 400);
    }

    destroyVerified() {
        this.sessionService.destroyOldEnough();
    }

    prevScrollpos = window.pageYOffset;

}
