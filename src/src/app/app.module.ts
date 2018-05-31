import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GearService } from './gear/gear.service';
import { GearButtonComponent } from './gear/gear-button/gear-button.component';
import { IndexComponent } from './index/index.component';
import { GearDetailComponent } from './gear/gear-detail/gear-detail.component';
import { OwnedGearComponent } from './owned-gear/owned-gear.component';
import { EquippedGearComponent } from './equipped-gear/equipped-gear.component';
import { FilterPipe } from './shared/filter.pipe';
import { CollectionComponent } from './collection/collection.component';
import { ConfigureGearComponent } from './configure-gear/configure-gear.component';


@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule, MatBadgeModule, MatRadioModule, MatCardModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent, GearButtonComponent, IndexComponent, GearDetailComponent, OwnedGearComponent, EquippedGearComponent, FilterPipe, CollectionComponent, ConfigureGearComponent],
  bootstrap: [AppComponent],
  providers: [GearService]
})
export class AppModule { }
