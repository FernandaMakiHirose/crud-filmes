import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {

  // injeta os valores dentro do componente
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;

  // valida os campos
  constructor(public validacao: ValidarCamposService) { }

  // envia os dados do formulário e retorna o mesmo
  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
