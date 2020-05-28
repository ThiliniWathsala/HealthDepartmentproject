import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  newCaption:string;
  capList: Array<any> = [];
  defaultImage ='assets/Images/default.jpg';
  selectedImage:any = null;  // to save the image in variable
  isSubmitted:boolean = false;
  constructor() { }

  ngOnInit() {
    this.capList.push(this.newCaption);
  }

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required)
  });

  setImage(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.defaultImage = e.target.result;
      reader.readAsDataURL(event.target.files[0]);  // call the function reaload image
      this.selectedImage = event.target.files[0];
    }
    else{
      this.defaultImage = 'assets/Images/default.jpg';
      this.selectedImage= null;
    }
  }

  onSubmit(formValue){
    this.capList.push(this.newCaption);
    this.newCaption="";
    this.isSubmitted = true;
  }

  get formControls(){
    return this.formTemplate['controls'];
  }



}
