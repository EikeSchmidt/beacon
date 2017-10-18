import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing"

import { BeaconComponent } from "./beacon.component"
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"
import { EsBeaconService } from "../beacon.service"


describe("BeaconComponent", () => {

   let component: BeaconComponent
   let fixture: ComponentFixture<BeaconComponent>
   let beacon$: DebugElement

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         providers: [EsBeaconService],
         declarations: [BeaconComponent]
      })
      .compileComponents()
   }))

   beforeEach(() => {
      fixture = TestBed.createComponent(BeaconComponent)
      component = fixture.componentInstance
      beacon$ = fixture.debugElement.query(By.css(".es-beacon"))

      fixture.detectChanges()
   })


   it("it should exist", () => {
      expect(component).toBeTruthy()
   })


   it("it should show a beacon", () => {
      expect(beacon$).toBeTruthy()
   })


   it("it should start with the default values from the beacon-service", inject([EsBeaconService], (service: EsBeaconService) => {
      expect(beacon$.styles.fontSize).toEqual(service.size)
      expect(beacon$.styles.width).toEqual(service.width)
      expect(beacon$.styles.height).toEqual(service.width)

      expect(beacon$.styles.color).toEqual(service.color)
      expect(beacon$.styles.animationDuration).toEqual(service.frequency)

      expect(beacon$.styles.top).toEqual(service.top)
      expect(beacon$.styles.bottom).toEqual(service.bottom)
      expect(beacon$.styles.left).toEqual(service.left)
      expect(beacon$.styles.right).toEqual(service.right)
   }))


   it("it should react to beacon-service default changes", inject([EsBeaconService], (service: EsBeaconService) => {
      service.setDefaultSize("50px")
      fixture.detectChanges()
      expect(beacon$.styles.fontSize).toEqual("50px")

      service.setDefaultWidth("51px")
      fixture.detectChanges()
      expect(beacon$.styles.width).toEqual("51px")
      expect(beacon$.styles.height).toEqual("51px")

      service.setDefaultColor("red")
      fixture.detectChanges()
      expect(beacon$.styles.color).toEqual("red")

      service.setDefaultFrequency("12345ms")
      fixture.detectChanges()
      expect(beacon$.styles.animationDuration).toEqual("12345ms")

      service.setDefaultTop("60px")
      fixture.detectChanges()
      expect(beacon$.styles.top).toEqual("60px")

      service.setDefaultBottom("61px")
      fixture.detectChanges()
      expect(beacon$.styles.bottom).toEqual("61px")

      service.setDefaultLeft("62px")
      fixture.detectChanges()
      expect(beacon$.styles.left).toEqual("62px")

      service.setDefaultRight("63px")
      fixture.detectChanges()
      expect(beacon$.styles.right).toEqual("63px")
   }))


   it("width='30px' should set the inner circle to 30px diameter", () => {
      component.width = "30px"
      component.ngOnChanges()
      fixture.detectChanges()

      expect(beacon$.styles.width).toEqual("30px")
      expect(beacon$.styles.height).toEqual("30px")
   })


   it("size='30px' should set the font-size to 30px", () => {
      component.size = "30px"
      component.ngOnChanges()
      fixture.detectChanges()

      expect(beacon$.styles.fontSize).toEqual("30px")
   })


   it("color='red' should set the color to red", () => {
      component.color = "red"
      component.ngOnChanges()
      fixture.detectChanges()

      expect(beacon$.styles.color).toEqual("red")
      expect(beacon$.styles.backgroundColor).toEqual("red")
   })


   it("frequency='5s' should set the animationDuration to 5s", () => {
      component.frequency = "5s"
      component.ngOnChanges()
      fixture.detectChanges()

      expect(beacon$.styles.animationDuration).toEqual("5s")
   })


   it("synchron='2' should should set the animation delay", () => {
      component.synchronisation = 3
      component.ngOnInit()
      fixture.detectChanges()

      const val = beacon$.styles.animationDelay

      component.synchronisation = 3
      component.ngOnInit()
      fixture.detectChanges()

      expect(beacon$.styles.animationDelay).toEqual(val)
   })
})
