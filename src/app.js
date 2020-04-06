import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import {ScrollPageStep} from 'resources/pipelines/scroll-page-step';
import {SessionService} from "./services/session-service";
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Router, SessionService, EventAggregator)
export class App {
    constructor(router, sessionService, eventAggregator) {
        this.router = router;
        this.sessionService = sessionService;
        this.eventAggregator = eventAggregator;
    }

    async activate() {
        this.verified = this.sessionService.getOldEnough();
        this.verifiedSubscriber = this.eventAggregator.subscribe('verified-updated', (payload) => {
            this.verified = payload.status;
        });
    }

    configureRouter(config, router) {
        config.options.pushState = true;
        const vRoot = 'pages/';
        config.title = 'Salty Turtle Beer Company';
        config.addPreActivateStep(ScrollPageStep);
        config.map([
            {
                route: ['home' , ''],
                name: 'home',
                moduleId: vRoot + 'home/home',
                title: 'Home'
            },
            {
                route: ['on-tap'],
                name: 'on-tap',
                moduleId: vRoot + 'on-tap/on-tap',
                title: 'On Tap'
            },
            {
                route: ['events'],
                name: 'events',
                moduleId: vRoot + 'events/events',
                title: 'Events'
            },
            {
                route: ['about'],
                name: 'about',
                moduleId: vRoot + 'about/about',
                title: 'About Us'
            },
            {
                route: ['shop'],
                name: 'shop',
                moduleId: vRoot + 'shop/shop',
                title: 'Shop'
            }
        ]);

        config.mapUnknownRoutes(() => {
            return { redirect: '' };
        });

        this.router = router;
    }
}
