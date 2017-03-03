/*!
 * Map Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { TranslateModule } from 'ng2-translate';
import { Angulartics2Module } from 'angulartics2';
import { MapRoutingModule } from './map-routing.module';
import { LeafletModule } from '../leaflet';
import { FormsModule as SaraiInteractiveMapsFormsModule } from '../forms';
import { UiModule as MapUiModule } from './ui';

import { WindowService } from './window.service';
import { TileLayerService } from './tile-layer.service';
import { CropProductionAreaMapService } from './crop-production-area-map.service';
import { NdviMapService } from './ndvi-map.service';
import { RainfallMapService } from './rainfall-map.service';
import { SuitabilityMapService } from './suitability-map.service';
import { LocationsService } from './locations.service';
import { MapConfig, MAP_CONFIG } from './map.config';

import { HomeComponent } from './home/home.component';
import { SuitabilityMapsComponent } from './suitability-maps/suitability-maps.component';
import { SuitabilityMapPanelComponent } from './suitability-map-panel/suitability-map-panel.component';
import { CropProductionAreaPanelComponent } from './crop-production-area-panel/crop-production-area-panel.component';
import { NdviPanelComponent } from './ndvi-panel/ndvi-panel.component';
import { RainfallMapPanelComponent } from './rainfall-map-panel/rainfall-map-panel.component';
import { DownloadImageFormComponent } from './download-image-form/download-image-form.component';
import { NdviMapsComponent } from './ndvi-maps/ndvi-maps.component';
import { RainfallMapsComponent } from './rainfall-maps/rainfall-maps.component';
import { NdviFilterFormComponent } from './ndvi-filter-form/ndvi-filter-form.component';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { MapTypeComponent } from './map-type/map-type.component';
import { RainfallMapFilterFormComponent } from './rainfall-map-filter-form/rainfall-map-filter-form.component';
import { CropProductionAreaMapsComponent } from './crop-production-area-maps/crop-production-area-maps.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SaraiInteractiveMapsFormsModule,
    TooltipModule,
    AccordionModule,
    ModalModule,
    MdCheckboxModule,
    TranslateModule,
    Angulartics2Module.forChild(),
    LeafletModule,
    MapRoutingModule,
    MapUiModule
  ],
  declarations: [
    HomeComponent,
    SuitabilityMapsComponent,
    SuitabilityMapPanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    RainfallMapPanelComponent,
    DownloadImageFormComponent,
    NdviMapsComponent,
    RainfallMapsComponent,
    NdviFilterFormComponent,
    BasePanelComponent,
    MapTypeComponent,
    RainfallMapFilterFormComponent,
    CropProductionAreaMapsComponent
  ],
  providers: [
    TileLayerService,
    CropProductionAreaMapService,
    NdviMapService,
    RainfallMapService,
    SuitabilityMapService,
    LocationsService,
    WindowService,

    { provide: MAP_CONFIG, useValue: MapConfig }
  ],
  exports: [
    HomeComponent,
    SuitabilityMapsComponent,
    SuitabilityMapPanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    RainfallMapPanelComponent,
    DownloadImageFormComponent,
    NdviMapsComponent,
    RainfallMapsComponent,
    NdviFilterFormComponent,
    BasePanelComponent,
    MapTypeComponent,
    RainfallMapFilterFormComponent,
    CropProductionAreaMapsComponent
  ]
})
export class MapModule { }


