import {inject} from 'aurelia-framework';
import { SessionService } from 'services/session-service';
import { Router } from 'aurelia-router';
import moment from 'moment';
import toastr from 'toastr';
@inject(SessionService, Router)

export class AgeVerification {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }

    dateOfBirth;
    defaultDate = new Date();

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
        let dateForOldEnough = moment(new Date()).subtract(21, 'years');
        if (dateForOldEnough.isSameOrBefore(this.dateOfBirth)) {
            return toastr.error('You must be 21 years or older to enter');
        }

        this.sessionService.saveOldEnough(true);
        this.router.navigate('on-tap');
    }
}
