import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';
import { ConfigPrams } from '../shared/models/config-prams';
import { ConfigParamsService } from './config-params.service';

// rota que faz manipulação rest dos filmes
const url = 'http://localhost:3000/filmes/';

// foi injetado no root, então qualquer lugar do projeto vai ter acesso a esse arquivo
@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  }

  // retorna uma lista de filmes 
  listar(config: ConfigPrams): Observable<Filme[]> {
    const configPrams = this.configService.configurarParametros(config);

    // busca a lista de filmes com a url do cadastro
    return this.http.get<Filme[]>(url, {params: configPrams});
  }

  // tem um único id e retorna o filme com esse id
  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  // exclui e não retorna nada
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
