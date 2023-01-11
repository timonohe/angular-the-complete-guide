import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[courseProjectPlaceholder]'
})
export class PlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
