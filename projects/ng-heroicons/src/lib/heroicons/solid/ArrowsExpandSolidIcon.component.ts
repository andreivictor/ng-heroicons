import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrows-expand-solid-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" fill="currentColor"><path stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0-4 4m-8 4v4m0 0h4m-4 0 4-4m8 4-4-4m4 4v-4m0 4h-4"/></svg>`,
})
export class ArrowsExpandSolidIconComponent extends BaseSolidIconComponent { }