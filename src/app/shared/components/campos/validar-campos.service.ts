import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

// foi injetado no root, então qualquer lugar do projeto vai ter acesso a esse arquivo
@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {

    // se o usuário altera o valor do campo monitorado ou desfoca o elemento de controle do formulário e se os inputs e o nome tiver erro
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {

      return true; // vai retornar true
    }
    return false; // caso contrário vai retornar false
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  // valida os campos de caracteres, se apresentar erros vai retornar o requiredLength, o erro mínimo e o erro máximo, caso contrário vai retornar 0
  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
