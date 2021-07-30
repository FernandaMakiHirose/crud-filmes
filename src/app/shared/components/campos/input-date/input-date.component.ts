import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {

  // injeta os valores dentro do componente
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  // valida os campos
  constructor(public validacao: ValidarCamposService) { }

  // envia os dados do formulário e retorna o mesmo
  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
