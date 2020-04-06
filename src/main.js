import environment from 'environment';
import 'bootstrap';
import 'moment';
import 'aurelia-bootstrap-datetimepicker/dist/amd/bootstrap-datetimepicker-bs4.css';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-api', config => {
            // Register hosts
            config.registerEndpoint('untappd-api', configure => {
                configure

                    .withBaseUrl(environment.untappdEndpoint)
                    .withDefaults(
                        {headers: {
                                'Content-Type': 'application/json',
                              //  'Accept': 'application/json',
                                'Authorization' : 'Basic ' + environment.untappdApiKey,
                            }});
            });
        },
        'aurelia-bootstrap-datetimepicker', config => {
                  config.extra.bootstrapVersion = 4;
          })
        .feature('resources');

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot());
}
