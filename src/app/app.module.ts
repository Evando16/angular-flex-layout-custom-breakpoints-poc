import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, Optional, ElementRef } from '@angular/core';
import { FlexLayoutModule, StyleUtils, MediaMarshaller, LayoutDirective, LayoutStyleBuilder, BREAKPOINTS, DEFAULT_BREAKPOINTS, BREAKPOINT } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const CUSTOM_BREAKPOINTS = [
  {
    alias: 'lg.custom',
    mediaQuery: 'screen and (min-width: 1440px) and (max-width: 1679.9px)',
    suffix: 'custom',
    overlapping: true
  }
];

export const customBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: CUSTOM_BREAKPOINTS,
  multi: true
};

@Directive({
  selector: `[fxFlex.lg.custom]`
})
export class CustomShowHideDirective extends LayoutDirective {
  constructor(protected elRef: ElementRef,
    protected styleUtils: StyleUtils,
    @Optional() protected styleBuilder: LayoutStyleBuilder,
    protected marshal: MediaMarshaller) {
    super(elRef, styleUtils, styleBuilder, marshal);
  }

  /**
   * I could not reproduce the follow method as described in custom breakpoint documentation
   * I imagine that we should have another method to be used with LayoutDirective, but could found any solution
   */
  // @Input('fxHide.xs.print')
  // set hideXs(val) {
  //   this._cacheInput("showXsPrint", negativeOf(val));
  // }
}
@NgModule({
  declarations: [
    AppComponent,
    CustomShowHideDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    customBreakPointsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
