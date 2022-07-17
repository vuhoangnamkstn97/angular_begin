import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiSvgModule,
} from '@taiga-ui/core'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTabsModule,
  TuiAvatarModule
} from '@taiga-ui/kit'
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer/footer.component'

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTabsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiAvatarModule,
    TuiSvgModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
