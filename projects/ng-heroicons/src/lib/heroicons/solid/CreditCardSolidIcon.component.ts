import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'credit-card-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M4 4a2 2 0 0 0-2 2v1h16V6a2 2 0 0 0-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM4 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H9z" clip-rule="evenodd"/></svg>`,
})
export class CreditCardSolidIconComponent extends BaseSolidIconComponent { }