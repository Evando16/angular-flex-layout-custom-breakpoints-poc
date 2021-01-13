import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div fxLayout="row" fxLayoutAlign="center center">
    <span style="background-color: red" fxFlex.lg="50" fxFlex.lg-wxga-plus="80" fxFlex.lg-wsxga-plus="30">test 1</span>
    <span style="background-color: orange"fxFlex>test 2</span>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-flex-layout';
}
