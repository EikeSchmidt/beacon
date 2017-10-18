import { Component } from "@angular/core"
import { EsBeaconService } from "./es-beacon/beacon.service"

@Component({
  selector: "es-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
   constructor(
      private beacon: EsBeaconService
   ){
      this.beacon.setDefaultTop("4px")
      this.beacon.setDefaultLeft("4px")
   }
}
