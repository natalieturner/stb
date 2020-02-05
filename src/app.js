import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router'
import {ScrollPageStep} from 'resources/pipelines/scroll-page-step';
import {DialogService} from 'aurelia-dialog';

@inject(Router)
export class App {
    static inject= [ DialogService ];
    constructor(sessionService, router, dialogService) {
        this.router = router;
        this.dialogService = dialogService;
    }

    async activate() {
    }

    configureRouter(config, router) {
        config.options.pushState = true;
        const vRoot = 'pages/';
        config.title = 'Salty Turtle Beer Company';
        config.addPreActivateStep(ScrollPageStep);
        config.map([
            {
                route: ['', 'age-verification'],
                name: 'age-verification',
                moduleId: vRoot + 'age-verification/age-verification',
                nav: true,
                title: 'Are you old enough to be here?'
            },
            {
                route: ['home'],
                name: 'home',
                moduleId: vRoot + 'home/home',
                nav: true,
                title: 'Home'
            },
            {
                route: ['on-tap'],
                name: 'on-tap',
                moduleId: vRoot + 'on-tap/on-tap',
                nav: true,
                title: 'On Tap'
            },
            {
                route: ['events'],
                name: 'events',
                moduleId: vRoot + 'events/events',
                nav: true,
                title: 'Events'
            },
            {
                route: ['about'],
                name: 'about',
                moduleId: vRoot + 'about/about',
                nav: true,
                title: 'About Us'
            }
        ]);

        config.mapUnknownRoutes(() => {
            return { redirect: '' };
        });

        this.router = router;
    }
}
