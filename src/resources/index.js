const ELEMENTS = './elements';
const VALUE_CONVERTERS = './value-converters';

export function configure(config) {
    config.globalResources([
        // Elements
       `${ELEMENTS}/navigation-bar/navigation-bar`,

        // Value Converters
        `${VALUE_CONVERTERS}/full-name`,
        `${VALUE_CONVERTERS}/currency-formatter`,
        `${VALUE_CONVERTERS}/proper-case`,
        `${VALUE_CONVERTERS}/date-formatter`,
    ]);
}
