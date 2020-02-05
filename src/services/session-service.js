const HAS_ACCEPTED_KEY = 'abc';

export class SessionService {
    saveOldEnough(oldEnough) {
        window.localStorage[HAS_ACCEPTED_KEY] = oldEnough;
    }
    getOldEnough() {
        return window.localStorage[HAS_ACCEPTED_KEY];
    }
    destroyOldEnough() {
        window.localStorage.removeItem(HAS_ACCEPTED_KEY);
    }
}
