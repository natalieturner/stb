import {inject, bindable} from 'aurelia-framework';
import moment from 'moment';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

@inject(Element)
export class DatePickerCustomAttribute {
    @bindable startView;
    @bindable defaultDate;
    @bindable date;
    @bindable label;

    constructor(element) {
        this.element = element;
    }

    bind() {
        $(this.element).datepicker({
            startView: this.startView,
        }).on('changeDate', this.setDate);
    }

    setDate = (e) => {
        this.date = moment(e.date).format('MM/DD/YYYY');
    };

    detached() {
        $(this.element).datepicker().off('changeDate', this.setDate);
    }
}
