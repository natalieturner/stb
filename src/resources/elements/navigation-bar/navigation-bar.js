import $ from 'jquery';

export class NavigationBar {
    attached() {

    }

    scrollToRef(ref) {
        $("html, body").animate({ scrollTop: $($(`#${ref}`)).offset().top - 200}, 400);
    }
}
