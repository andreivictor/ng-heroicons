import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'status-online-solid-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 3.636a1 1 0 0 1 0 1.414 7 7 0 0 0 0 9.9 1 1 0 1 1-1.414 1.414 9 9 0 0 1 0-12.728 1 1 0 0 1 1.414 0zm9.9 0a1 1 0 0 1 1.414 0 9 9 0 0 1 0 12.728 1 1 0 1 1-1.414-1.414 7 7 0 0 0 0-9.9 1 1 0 0 1 0-1.414zM7.879 6.464a1 1 0 0 1 0 1.414 3 3 0 0 0 0 4.243 1 1 0 1 1-1.415 1.414 5 5 0 0 1 0-7.07 1 1 0 0 1 1.415 0zm4.242 0a1 1 0 0 1 1.415 0 5 5 0 0 1 0 7.072 1 1 0 0 1-1.415-1.415 3 3 0 0 0 0-4.242 1 1 0 0 1 0-1.415zM10 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1z" clip-rule="evenodd"/></svg>`,
})
export class StatusOnlineSolidIconComponent extends BaseSolidIconComponent { }