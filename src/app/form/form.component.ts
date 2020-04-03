import { trigger, style, state, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  animations: [
    trigger('switchPage', [
      state('up', style({
        height: '83px',
        opacity: 1
      })),
      state('in', style({
        height: 0,
        opacity: 0
      })),
      transition('up => in', [
        animate('0.5s')
      ]),
      transition('in => up', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;

  isSignUp = false;

  constructor(
    private _fb: FormBuilder
  ) {
    this.formGroup = this._fb.group({
      fullName: [null, Validators.required],
      userNameEmail: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
