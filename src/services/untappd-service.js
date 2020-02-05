import {inject} from 'aurelia-framework';
import {Config} from 'aurelia-api';

@inject(Config)
export class UntappdService {
    constructor(endpoint) {
        this.endpoint = endpoint.getEndpoint('untappd-api');
    }

    async doGet(path) {
        console.log('endpoint - ', this.endpoint);
        return await this.endpoint.find(path, null, 'json');
    }
}
