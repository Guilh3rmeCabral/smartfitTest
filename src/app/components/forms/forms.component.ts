import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  results = []
  formGroup!: FormGroup;

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit():void {
    this.formGroup = this.formBuiler.group ({
      hour: '',
      showClosed: false
    })
  }

  onSubmit():void {
    console.log(this.formGroup.value)
  }

  onClean():void {
    this.formGroup.reset();
  }

}
