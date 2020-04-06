import $ from 'jquery';
import {inject} from 'aurelia-framework';
export class Footer {
    attached() {

    }

    scrollToRef(ref) {
        $("html, body").animate({ scrollTop: $($(`#${ref}`)).offset().top - 200}, 400);
    }
}
