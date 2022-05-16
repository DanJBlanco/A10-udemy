import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HerosRoutingModule } from './heros-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagenUrlPipe } from './pipes/imagen-url.pipe';



@NgModule({
  declarations: [
    AddComponent,
    FindComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    ImagenUrlPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HerosRoutingModule,
    MaterialModule
  ]
})
export class HerosModule { }
