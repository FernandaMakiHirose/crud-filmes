import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';

// apresenta todas as rotas

const routes: Routes = [

  { // o path vazio vai redirecionar para o filmes
      path: '',
      redirectTo: 'filmes',
      pathMatch: 'full'
  },
  { // a seguir são as rotas filhas de filmes
    path: 'filmes',
    children: [
      { // quando for uma rota filha vazio vai ser redirecionada para filmes
        path: '',
        component: ListagemFilmesComponent
      },
      { // vai para a rota filha de cadastro
        path: 'cadastro',
        children: [
          {
            path: '',
            component: CadastroFilmesComponent
          },
          {
            path: ':id',
            component: CadastroFilmesComponent
          }
        ]
      },
      {
        path: ':id',
        component: VisualizarFilmesComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'filmes' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
