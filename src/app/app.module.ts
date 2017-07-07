import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SlickModule} from "ngx-slick";
import {HintsComponent} from "./hints/hints.component";
import {HotkeyModule} from "angular2-hotkeys";
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSelectModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdTooltipModule
} from "@angular/material";
import {AccountButtonComponent} from "./account-button/account-button.component";
import {MainToolbarComponent} from "./main-toolbar/main-toolbar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import "hammerjs";
import {GraphComponent} from "./graph/graph.component";
import {ZoomButtonsComponent} from "./zoom-buttons/zoom-buttons.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {LocateButtonComponent} from "./locate-button/locate-button.component";
import {LayoutSwitchComponent} from "./layout-switch/layout-switch.component";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {ImportDialogComponent} from "./import-dialog/import-dialog.component";
import {EditElementDialogComponent} from "./edit-element-dialog/edit-element-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenusExtension} from "./graph/extensions/context-menus.extension";
import {EdgeBendEditingExtension} from "./graph/extensions/edge-bend-editing.extension";
import {EdgeHandlesExtension} from "./graph/extensions/edge-handles.extension";
import {NodeAdditionExtension} from "./graph/extensions/node-addition.extension";
import {ShortcutsExtension} from "./graph/extensions/shortcuts.extension";
import {NewDialogComponent} from "./new-dialog/new-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HintsComponent,
    AccountButtonComponent,
    MainToolbarComponent,
    GraphComponent,
    ZoomButtonsComponent,
    FileUploadComponent,
    LocateButtonComponent,
    LayoutSwitchComponent,
    SideMenuComponent,
    ImportDialogComponent,
    EditElementDialogComponent,
    ContextMenusExtension,
    EdgeBendEditingExtension,
    EdgeHandlesExtension,
    NodeAdditionExtension,
    ShortcutsExtension,
    NewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickModule.forRoot(),
    HotkeyModule.forRoot(),
    MdButtonModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdMenuModule,
    MdListModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdAutocompleteModule,
    MdSelectModule
  ],
  entryComponents: [
    ImportDialogComponent,
    EditElementDialogComponent,
    NewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
