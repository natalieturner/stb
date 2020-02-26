const HAS_ACCEPTED_KEY = 'verified';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
@inject(EventAggregator)

export class SessionService {

    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }

    saveOldEnough(oldEnough) {
        window.localStorage[HAS_ACCEPTED_KEY] = oldEnough;
        this.eventAggregator.publish('verified-updated', {status: oldEnough})
    }
    getOldEnough() {
        return window.localStorage[HAS_ACCEPTED_KEY];
    }
    destroyOldEnough() {
        window.localStorage.removeItem(HAS_ACCEPTED_KEY);
        this.eventAggregator.publish('verified-updated', {status: false})
    }
}
