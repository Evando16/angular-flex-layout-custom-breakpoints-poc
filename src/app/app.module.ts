import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FlexLayoutModule, FlexDirective } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const CUSTOM_BREAKPOINTS = [
  {
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1439.9px)',
    suffix: 'Lg',
    overlapping: true
  },
  {
    alias: 'lg-wxga-plus',
    mediaQuery: 'screen and (min-width: 1440px) and (max-width: 1679.9px)',
    suffix: 'LgWxgaPlus',
    overlapping: false
  },
  {
    alias: 'lg-wsxga-plus',
    mediaQuery: 'screen and (min-width: 1680px) and (max-width: 1919.9px)',
    suffix: 'LgWsxgaPlus',
    overlapping: false
  }
];

const inputs = ['fxFlex.lg', 'fxFlex.lg-wxga-plus', 'fxFlex.lg-wsxga-plus'];
const selector = `[fxFlex.lg], '[fxFlex.lg-wxga-plus]', '[fxFlex.lg-wsxga-plus]'`;

@Directive({ inputs, selector })
export class CustomShowHideDirective extends FlexDirective {
  protected inputs = inputs;
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
    FlexLayoutModule.withConfig({}, CUSTOM_BREAKPOINTS),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
