import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterialModule } from './shared/material/material.module';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { AlertaComponent } from './shared/components/alerta/alerta.component';


@NgModule({
  declarations: [ // declaração dos componentes
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AlertaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [AlertaComponent], // vai carregar esse componente quando o programa ser inicializado
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }], // vai usar formato de data brasileiro
  bootstrap: [AppComponent]
})
export class AppModule { }
