import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'currency-rupee-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 5a1 1 0 1 0 0 2h1a2 2 0 0 1 1.732 1H7a1 1 0 1 0 0 2h2.732A2 2 0 0 1 8 11H7a1 1 0 0 0-.707 1.707l3 3a1 1 0 0 0 1.414-1.414l-1.483-1.484A4.008 4.008 0 0 0 11.874 10H13a1 1 0 1 0 0-2h-1.126a3.976 3.976 0 0 0-.41-1H13a1 1 0 1 0 0-2H7z" clip-rule="evenodd"/></svg>`,
})
export class CurrencyRupeeSolidIconComponent extends BaseSolidIconComponent { }