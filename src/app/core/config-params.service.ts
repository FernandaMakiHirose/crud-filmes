import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ConfigPrams } from '../shared/models/config-prams';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  /*configura os parâmetros que configuram os objetos salvos no banco, se adicionar um campo vai adicionar, se não passar nada apenas vai adicionar ordenação nos campos*/

  configurarParametros(config: ConfigPrams): HttpParams {
    let httpParams = new HttpParams();

    // se tiver config.pagina faz o set e transforma em string
    if (config.pagina) {
      httpParams = httpParams.set('_page', config.pagina.toString());
    }

    // se tiver config.limite faz o set e transforma em string 
    if (config.limite) {
      httpParams = httpParams.set('_limit', config.limite.toString());
    }

    // se tiver config.pesquisa faz o set 
    if (config.pesquisa) {
      httpParams = httpParams.set('q', config.pesquisa);
    }

    // se tiver config.campo faz o set do tipo e do valor e transforma eles em string 
    if (config.campo) {
      httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString());
    }
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
