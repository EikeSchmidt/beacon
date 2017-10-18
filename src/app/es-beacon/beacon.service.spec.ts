import { TestBed, inject } from "@angular/core/testing"

import { EsBeaconService } from "./beacon.service"

describe("EsBeaconService", () => {
  const attributes = ["size", "width", "color", "frequency", "synchronisation", "top", "bottom", "left", "right"]



  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsBeaconService]
    })
  })


  it("should exist", inject([EsBeaconService], (service: EsBeaconService) => {
    expect(service).toBeTruthy()
  }))


  it("should have init-values", inject([EsBeaconService], (service: EsBeaconService) => {
    attributes.forEach(attr => {
      expect(service[attr]).toBeDefined()
    })
  }))


  it("should change default-values", inject([EsBeaconService], (service: EsBeaconService) => {
    attributes.forEach(attr => {
      const fnName = "setDefault" + attr[0].toUpperCase() + attr.slice(1)
      service[fnName]("test")
      expect(service[attr]).toEqual("test")
    })
  }))


  it("should call its observers on every change of default-values", inject([EsBeaconService], (service: EsBeaconService) => {
    const spyContainer = {
      spy: function(){}
    }
    spyOn(spyContainer, "spy")

    const subscription = service.change.subscribe(spyContainer.spy)

    attributes.forEach(attr => {
      const fnName = "setDefault" + attr[0].toUpperCase() + attr.slice(1)
      service[fnName]("test")
    })

    expect(spyContainer.spy).toHaveBeenCalledTimes(attributes.length)

    subscription.unsubscribe()
  }))


  it("should make a vice-versa selector for top/bottom and left/right", inject([EsBeaconService], (service: EsBeaconService) => {
    service.setDefaultTop("10px")
    expect(service.bottom).toBeFalsy()

    service.setDefaultBottom("10px")
    expect(service.top).toBeFalsy()

    service.setDefaultLeft("10px")
    expect(service.right).toBeFalsy()

    service.setDefaultRight("10px")
    expect(service.left).toBeFalsy()
  }))
})
