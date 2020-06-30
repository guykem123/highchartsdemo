import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackAreaChartComponent } from './stack-area-chart/stack-area-chart.component';
import { GroupBarChartComponent } from './group-bar-chart/group-bar-chart.component';
import { StackVertChartComponent } from './stack-vert-chart/stack-vert-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StackAreaChartComponent,
    GroupBarChartComponent,
    StackVertChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
