import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MembersTableComponent } from "./members-table/members-table.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, MembersTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
