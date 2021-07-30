import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  // injeta os valores dentro do componente
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() opcoes: Array<string>;

  // valida os campos
  constructor(public validacao: ValidarCamposService) { }

  // envia os dados do formulário e retorna o mesmo
  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
