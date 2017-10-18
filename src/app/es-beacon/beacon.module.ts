import { NgModule } from "@angular/core"
import { EsBeaconService } from "./beacon.service"
import { BeaconComponent } from "./beacon/beacon.component"
import { BeaconContainerDirective } from "./beacon-container.directive"

@NgModule({
   imports: [],
   declarations: [
      BeaconComponent,
      BeaconContainerDirective
   ],
   providers: [
      EsBeaconService
   ],
   exports: [
      BeaconComponent,
      BeaconContainerDirective
   ]
})
export class EsBeaconModule {}
