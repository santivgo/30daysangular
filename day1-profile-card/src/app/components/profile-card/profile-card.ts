import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  profileForm = new FormGroup({
    name: new FormControl('John Doe'),
    age: new FormControl('30'),
    description: new FormControl('An awesome guy.')
  })
  getName() {
    console.log(this.profileForm)
    return this.profileForm.controls.name.value
  }

  getAge() {
    return this.profileForm.controls.age.value
  }

  getDescription() {
    return this.profileForm.controls.description.value
  }
}
