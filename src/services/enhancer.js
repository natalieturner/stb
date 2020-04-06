import {inject} from 'aurelia-framework';
import {TemplatingEngine} from 'aurelia-templating';

@inject(TemplatingEngine)
export class Enhancer {

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  enhance(context, enhancingElement) {

    this.templatingEngine.enhance({
      element: enhancingElement,
      bindingContext: context
    });
  }
}
