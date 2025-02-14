import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'lightning-bolt-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round"  d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
})
export class LightningBoltOutlineIconComponent extends BaseOutlineIconComponent { }