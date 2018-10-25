import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatDatepickerModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { PlexModule, Plex } from '@andes/plex';
import { MaterialDocsApp } from './material-docs-app';
import { HomepageModule } from './pages/homepage/homepage';
import { MATERIAL_DOCS_ROUTES } from './routes';
import { ComponentListModule } from './pages/component-list/component-list';
import { ComponentViewerModule } from './pages/component-viewer/component-viewer';
import { ComponentCategoryListModule } from './pages/component-category-list/component-category-list';
import { ComponentSidenavModule } from './pages/component-sidenav/component-sidenav';
import { FooterModule } from './shared/footer/footer';
import { ComponentPageTitle } from './pages/page-title/page-title';
import { ComponentHeaderModule } from './pages/component-page-header/component-page-header';
import { StyleManager } from './shared/style-manager/style-manager';
import { SvgViewerModule } from './shared/svg-viewer/svg-viewer';
import { NavBarModule } from './shared/navbar/navbar';
import { DocumentationItems } from './shared/documentation-items/documentation-items';
import { DocViewerModule } from './shared/doc-viewer/doc-viewer-module';
import { CanActivateComponentSidenav } from './pages/component-sidenav/component-sidenav-can-load-guard';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutOverviewExample } from './shared/examples/layout-overview/layout-overview-example';
import { LayoutOptgroupExample } from './shared/examples/layout-optgroup/layout-optgroup-example';
import { TipologiasOverviewExample } from './shared/examples/tipologias-overview/tipologias-overview-example';
import { TipologiasOptgroupExample } from './shared/examples/tipologias-optgroup/tipologias-optgroup-example';
import { TemplateFormComponent } from './shared/examples/template-form/template-form';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule.forRoot(MATERIAL_DOCS_ROUTES),
    PlexModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ComponentCategoryListModule,
    ComponentHeaderModule,
    ComponentListModule,
    ComponentSidenavModule,
    ComponentViewerModule,
    DocViewerModule,
    FooterModule,
    HomepageModule,
    NavBarModule,
    SvgViewerModule,
  ],
  entryComponents: [
    LayoutOverviewExample,
    LayoutOptgroupExample,
    TipologiasOverviewExample,
    TipologiasOptgroupExample,
    TemplateFormComponent,
  ],
  declarations: [
    MaterialDocsApp,
    LayoutOverviewExample,
    LayoutOptgroupExample,
    TipologiasOverviewExample,
    TipologiasOptgroupExample,
    TemplateFormComponent
  ],
  providers: [
    Plex,
    ComponentPageTitle,
    DocumentationItems,
    StyleManager,
    CanActivateComponentSidenav,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [MaterialDocsApp],
})
export class AppModule { }
