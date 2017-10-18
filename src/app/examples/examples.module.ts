import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { EsBeaconModule } from "../es-beacon/beacon.module"

import { ExampleColorComponent } from "./example-color/example-color.component"
import { ExampleFrequencyComponent } from "./example-frequency/example-frequency.component"
import { ExampleSynchronisationComponent } from "./example-synchronisation/example-synchronisation.component"
import { ExampleSizeComponent } from "./example-size/example-size.component"
import { ExamplePositionComponent } from "./example-position/example-position.component"
import { ExampleBeaconContainerComponent } from "./example-beacon-container/example-beacon-container.component"
import { ExampleDefaultValuesComponent } from "./example-default-values/example-default-values.component"
import { ExampleUseCasesComponent } from "./example-use-cases/example-use-cases.component"


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      EsBeaconModule
   ],
   declarations: [
      ExampleUseCasesComponent,
      ExampleColorComponent,
      ExampleSizeComponent,
      ExampleFrequencyComponent,
      ExamplePositionComponent,
      ExampleSynchronisationComponent,
      ExampleDefaultValuesComponent,
      ExampleBeaconContainerComponent
   ],
   exports: [
      ExampleUseCasesComponent,
      ExampleColorComponent,
      ExampleSizeComponent,
      ExampleFrequencyComponent,
      ExamplePositionComponent,
      ExampleSynchronisationComponent,
      ExampleDefaultValuesComponent,
      ExampleBeaconContainerComponent
   ]
})
export class ExamplesModule {}
