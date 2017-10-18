import { Component, Input, OnChanges, OnDestroy, OnInit } from "@angular/core"
import { EsBeaconService } from "../beacon.service"
import { Subscription } from "rxjs/Subscription"


@Component({
   selector: "es-beacon",
   template: `
      <span class="es-beacon"
            [style.fontSize]="_size"
            [style.width]="_width" [style.height]="_width"
            [style.animationDuration]="_frequency"
            [style.animationDelay]="_synchronisation"
            [style.color]="_color"
            [style.backgroundColor]="_color"
            [style.top]="_top"
            [style.bottom]="_bottom"
            [style.left]="_left"
            [style.right]="_right"
      ></span>
   `,
   styleUrls: ["./beacon.component.css"]
})
export class BeaconComponent implements OnInit, OnDestroy, OnChanges {

   @Input() size: string
   _size: string

   @Input() width: string
   _width: string

   @Input() frequency: string
   _frequency: string

   @Input() color: string
   _color: string

   @Input() synchronisation: number
   _synchronisation: string

   @Input() top: string
   _top: string

   @Input() bottom: string
   _bottom: string

   @Input() left: string
   _left: string

   @Input() right: string
   _right: string


   private subscription: Subscription


   constructor(
      private beacon: EsBeaconService
   ) { }

   ngOnInit() {
      if (this.synchronisation)
         this._synchronisation = parseInt(<any>this.synchronisation, 10) * 113 + "ms"
      else if (!this.beacon.synchronisation)
         this._synchronisation = Math.floor(Math.random() * 1000) + "ms"
      else
         this._synchronisation = ""


      this.update()

      this.subscription = this.beacon.change.subscribe(() => this.update())
   }

   ngOnDestroy() {
      this.subscription.unsubscribe()
   }

   ngOnChanges() {
      this.update()
   }

   update() {

      this._size = this.size || this.beacon.size
      this._width = this.width || this.beacon.width
      this._color = this.color || this.beacon.color
      this._frequency = this.frequency || this.beacon.frequency


      if (this.top) {
         this._top = this.top
         this._bottom = ""
      }
      else if (this.bottom) {
         this._top = ""
         this._bottom = this.bottom
      }
      else {
         this._top = this.beacon.top
         this._bottom = this.beacon.bottom
      }

      if (this.left) {
         this._left = this.left
         this._right = ""
      }
      else if (this.right) {
         this._left = ""
         this._right = this.right
      }
      else {
         this._left = this.beacon.left
         this._right = this.beacon.right
      }
   }
}
