import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent {
  errormessage = '';
  errorclass = '';
  empForm = new FormGroup({
    code: new FormControl({ value: '', disabled: true }),
    name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(4)])
    ),
    conname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(4)])
    ),
    email: new FormControl('', Validators.compose([Validators.email])),
    phone: new FormControl(),
    designation: new FormControl(),
  });
  SaveEmp() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    } else {
      this.errormessage = 'Please enter valid data';
      this.errorclass = 'errormessage';
    }
  }

  get name() {
    return this.empForm.get('name');
  }
  get email() {
    return this.empForm.get('email');
  }
  get conname() {
    return this.empForm.get('conname');
  }
  mustMatch(pass: any, cpass: any) {
    return (formGroop: FormGroup) => {
      const name = formGroop.controls['name'];
      const cname = formGroop.controls['cname'];
      if (cname.errors && !cname.errors['MustMatch']) {
        return;
      }
    };
  }
}
