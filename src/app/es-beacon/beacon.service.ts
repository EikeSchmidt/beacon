import { Injectable } from "@angular/core"
import { Subject } from "rxjs/Subject"

@Injectable()
export class EsBeaconService {

   width = "10px"
   size = "12px"

   top = "-12px"
   bottom = ""
   left = "-12px"
   right = ""

   color = "hsl(235, 70%, 50%)"

   frequency = "2000ms"

   synchronisation = false


   constructor() { }

   change = new Subject()

   setDefaultWidth(value: number | string) {
      this.width = String(value)

      this.change.next()
   }


   setDefaultSize(value: number | string) {
      this.size = String(value)

      this.change.next()
   }


   setDefaultTop(value: number | string) {
      this.top = String(value)
      this.bottom = ""

      this.change.next()
   }


   setDefaultBottom(value: number | string) {
      this.top = ""
      this.bottom = String(value)

      this.change.next()
   }


   setDefaultLeft(value: number | string) {
      this.left = String(value)
      this.right = ""

      this.change.next()
   }


   setDefaultRight(value: number | string) {
      this.left = ""
      this.right = String(value)

      this.change.next()
   }


   setDefaultFrequency(value: number | string) {
      this.frequency = String(value)

      this.change.next()
   }


   setDefaultColor(value: string) {
      this.color = String(value)

      this.change.next()
   }


   setDefaultSynchronisation(value: boolean) {
      this.synchronisation = value

      this.change.next()
   }
}
