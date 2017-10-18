import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"

import { BeaconContainerDirective } from "./beacon-container.directive"
import { Component } from "@angular/core"


@Component({
   template: `
      <div id="simple" esBeaconContainer></div>
      <div id="relative" esBeaconContainer="relative"></div>
      <div id="absolute" esBeaconContainer="absolute"></div>
      <div id="fixed" esBeaconContainer="fixed"></div>
      <div id="static" esBeaconContainer="static"></div>
      <div id="true" [esBeaconContainer]="true"></div>
      <div id="false" [esBeaconContainer]="false"></div>
      <div id="null" [esBeaconContainer]="null"></div>
   `
})
class TestComponent {}


describe("BeaconContainerDirective", () => {
   let component: TestComponent
   let fixture: ComponentFixture<TestComponent>
   let testComponent$: DebugElement


   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [TestComponent, BeaconContainerDirective]
      })
      .compileComponents()
   }))

   beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent)

      component = fixture.componentInstance
      testComponent$ = fixture.debugElement
      fixture.detectChanges()
   })


   it("esBeaconContainer should add the es-beacon-container css-class", () => {
      const element = testComponent$.query(By.css("#simple"))
      expect(element.classes["es-beacon-container"]).toBeTruthy()
   })


   it("esBeaconContainer should apply the position:relative css style", () => {
      const element = testComponent$.query(By.css("#simple"))
      expect(element.styles.position).toEqual("relative")
   })


   it("esBeaconContainer='relative' should apply the position:relative css style", () => {
      const element = testComponent$.query(By.css("#relative"))
      expect(element.styles.position).toEqual("relative")
   })


   it("esBeaconContainer='absolute' should apply the position:absolute css style", () => {
      const element = testComponent$.query(By.css("#absolute"))
      expect(element.styles.position).toEqual("absolute")
   })


   it("esBeaconContainer='fixed' should apply the position:fixed css style", () => {
      const element = testComponent$.query(By.css("#fixed"))
      expect(element.styles.position).toEqual("fixed")
   })


   it("esBeaconContainer='static' should apply the position:static css style", () => {
      const element = testComponent$.query(By.css("#static"))
      expect(element.styles.position).toEqual("static")
   })


   it("[esBeaconContainer]='true' should apply the position:relative css style", () => {
      const element = testComponent$.query(By.css("#true"))
      expect(element.styles.position).toEqual("relative")
   })


   it("[esBeaconContainer]='false' should apply the position:static css style", () => {
      const element = testComponent$.query(By.css("#false"))
      expect(element.styles.position).toEqual("static")
   })


   it("[esBeaconContainer]='null' should apply the position:static css style", () => {
      const element = testComponent$.query(By.css("#null"))
      expect(element.styles.position).toEqual("static")
   })
})
