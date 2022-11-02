import { Category } from './../../../shared/category';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CategoryiesService } from 'src/app/services/categoryies.service';

@Component({
  selector: 'app-movie-dd-edit',
  templateUrl: './movie-dd-edit.component.html',
  styleUrls: ['./movie-dd-edit.component.css']
})
export class MovieDdEditComponent implements OnInit {

  movieForm: FormGroup;
  submitted: boolean = false;
  categories!: Category[];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router,private _movieServies:MoviesService,private _categoryiesService:CategoryiesService) {
    
    this.movieForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.getCategories();
  }
  get f() { return this.movieForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.movieForm.value);
    const formData = new FormData();
    formData.append('name', this.movieForm.get('name')?.value);
    formData.append('description', this.movieForm.get('description')?.value);
    formData.append('image', this.movieForm.get('image')?.value);
    formData.append('category_id',  this.movieForm.get('category_id')?.value);
    for (let [key, value] of formData.entries()) { 
      console.log(`${key}: ${value}`);
    }
    this._movieServies.addMovie(formData).subscribe(
      (res: any) => {
        console.log(res);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.movieForm.get('image')?.setValue(file);
    }
    console.log(this.movieForm.value);
    
  }
  getCategories() {
    this._categoryiesService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.message;
        console.log(this.categories);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
}
