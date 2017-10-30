# Beacon

Angular component to direct userfocus with little blinking highlights.

# Examples

https://eikeschmidt.github.io/beacon/


# Installation
> **npm install --save esbeacon**

Then import the module in your AppModule or any other module or export it in you SharedModule:

```
import { EsBeaconModule } from "esbeacon";

@NgModule({
   imports: [
      EsBeaconModule   
   ]
})
export class AppModule {}
```

If you want to use the EsBeaconService to set app-wide default values, you have to import EsBeaconModule into your AppModule or SharedModule.


# Test-coverage

All tests were done by Jasmine and Protractor.

* esBeacon-Component: 100%
* esBeaconContainer-Directive: 100%
* EsBeaconService: 100%


# Contributors

This module was made by Eike Christoph Schmidt to learn the handling of github.

It was made with Angular CLI.
