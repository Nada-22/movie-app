import { Category } from './../../../shared/category';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CategoryiesService } from 'src/app/services/categoryies.service';
import { environment } from 'src/environments/environment';
import { MovieEdit } from 'src/app/shared/movieEdit';

@Component({
  selector: 'app-movie-dd-edit',
  templateUrl: './movie-dd-edit.component.html',
  styleUrls: ['./movie-dd-edit.component.css']
})
export class MovieDdEditComponent implements OnInit {

  movieForm: FormGroup;
  submitted: boolean = false;
  categories!: Category[];
  isUpdate = false;
  URL = environment.API_Domain;
  imgScr!: string;
  movieID!: number;
  movie = new MovieEdit()
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router, private _movieServies: MoviesService, private _categoryiesService: CategoryiesService) {
    
    this.movieForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getMovie();
  }
  get f() { return this.movieForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.movieForm.value);
    const formData = new FormData();
    formData.append('name', this.movieForm.get('name')?.value);
    formData.append('description', this.movieForm.get('description')?.value);
    formData.append('image', this.movieForm.get('image')?.value);
    formData.append('category_id', this.movieForm.get('category_id')?.value);
    // for (let [key, value] of formData.entries()) { 
    //   console.log(`${key}: ${value}`);
    // }
    if (this.movieID) {
      formData.append('_method', 'put');
      this.updateMovie(formData);
      return;
    }
   this.addMovie(formData)
  }
  onFileSelect(event: any):void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      
      this.movieForm.get('image')?.setValue(file);
    }
    console.log(this.movieForm.value);
    
  }
  getCategories():void {
    this._categoryiesService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.message;
        console.log(this.categories);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
  getMovie() :void{
    this.movieID = this.route.snapshot.paramMap.get('id') || false as any;
    console.log(this.movieID);
    if (!this.movieID) return;
    this._movieServies.showMovie(this.movieID).subscribe(
      (res: any) => {
        console.log(res);
        this.movieForm.patchValue({
          name: res.message.name,
          description: res.message.description,
          category_id: res.message.category.id,
          image: res.message.image,
        })
        this.imgScr = this.URL + '/' + res.message.image;
        console.log(this.movieForm.value);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
    
  }
  updateMovie(movie: any):void {
    this.movie = this.movieForm.value;
    
    console.log(this.movie);
    this._movieServies.updateMovie(this.movieID, movie).subscribe(
      (res: any) => {
        console.log(res);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
  addMovie(movie: any) :void{
    this._movieServies.addMovie(movie).subscribe(
      (res: any) => {
        console.log(res);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }

}
