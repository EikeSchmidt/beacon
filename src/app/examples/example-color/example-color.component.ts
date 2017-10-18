import { Component, OnInit } from "@angular/core"

@Component({
   selector: "es-example-color",
   templateUrl: "./example-color.component.html",
   styleUrls: ["./example-color.component.css"]
})
export class ExampleColorComponent implements OnInit {

   color

   constructor() { }

   ngOnInit() {
   }

}
