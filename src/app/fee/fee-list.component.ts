import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html'
})
export class FeeListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute){
      super(locator.endpoints.FEE, locator, route);
    }

}
