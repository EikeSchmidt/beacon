import { Component } from "@angular/core"
import { EsBeaconService } from "../../es-beacon/beacon.service"

@Component({
   selector: "es-example-default-values",
   templateUrl: "./example-default-values.component.html",
   styleUrls: ["./example-default-values.component.css"]
})
export class ExampleDefaultValuesComponent {

   hue = 0
   saturation = 50
   luminosity = 50
   opacity = 100

   width = 16
   size = 16

   frequency = 2000

   top = 0
   bottom = 0
   left = 0
   right = 0


   constructor(
      public beacon: EsBeaconService
   ) { }

}
