import { Directive, ElementRef, Input, Renderer2 } from "@angular/core"

@Directive({
  selector: "[esBeaconContainer]"
})
export class BeaconContainerDirective {

  @Input()
  set esBeaconContainer(value) {
    switch (value) {
      case "relative":
      case "absolute":
      case "fixed":
        this.applyAttribute(value)
        break
      case "static":
      case false:
      case null:
        this.applyAttribute("static")
        break
      default:
        this.applyAttribute("relative")
        break
    }
  }


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
     renderer.addClass(element.nativeElement, "es-beacon-container")
  }


  applyAttribute(position) {
    this.renderer.setStyle(this.element.nativeElement, "position", position)
  }
}
