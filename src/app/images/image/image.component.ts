import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  newCaption:string;
  capList: Array<any> = [];
  defaultImage ='';
  selectedImage;  // to save the image in variable
  isSubmitted:boolean;
  constructor(private storage:AngularFireStorage,) { }

  ngOnInit() {
    //this.capList.push(this.newCaption);
    this.resetForm();

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
   // this.capList.push(this.newCaption);
  //  this.newCaption="";
    this.isSubmitted = true;
    if(this.formTemplate.valid){
        var filepath = `${formValue.category}/${this.selectedImage.name}_${new Date().getTime()}`;  // avoid the duplicate image url in firebase
        const fileRef = this.storage.ref(filepath);  // to reference the image in storage
        this.storage.upload(filepath,this.selectedImage).snapshotChanges().pipe(
          finalize(()=>{    // this finaliza call when upload is 100% completed
            fileRef.getDownloadURL().subscribe((url)=>{   // retrive the uploaded image URl
              formValue['imageUrl']=url;
              this.resetForm();
            })
          })
        ).subscribe();   // snapshotChanges() used to work with the response of upload
    }

  }

  get formControls(){
    return this.formTemplate['controls'];
  }
  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption:'',
      category:'',
      imageUrl:''
    });
    this.defaultImage ='assets/Images/default.jpg';
    this.selectedImage= null;  // to save the image in variable
    this.isSubmitted= false;

  }


}
