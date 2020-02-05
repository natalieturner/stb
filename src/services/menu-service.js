import { inject } from 'aurelia-framework';
import { UntappdService } from 'untappd-service';

@inject(UntappdService)
export class MenuService {
    menuId = '25693';

    constructor(untappdService) {
        this.untapped = untappdService;
    }

    async getMenu() {
        return await this.untapped.doGet('/menu/' + this.menuId + '?full=true');
    }
}
