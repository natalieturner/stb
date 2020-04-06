import {inject} from 'aurelia-framework';
import { SessionService } from 'services/session-service';
import { Router } from 'aurelia-router';
@inject(SessionService, Router)

export class AgeVerification {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }

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

    verifyAge() {
        //if dob verify age
        this.markOldEnough();
    }

    markOldEnough() {
        this.sessionService.saveOldEnough(true);
        this.router.navigate('on-tap');
    }
}
