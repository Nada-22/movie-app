import { Component, Input, OnInit } from '@angular/core';
import { CategoryiesService } from 'src/app/services/categoryies.service';
import { MoviesService } from 'src/app/services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
@Input()  movieID: any;
  constructor(private _moviesServise:MoviesService,private _categoryiesService:CategoryiesService) { }

  ngOnInit(): void {
  }
  deleteMovie(id: any) {
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008080',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Loading ...',
        
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          
            this._moviesServise.deleteMovie(id).subscribe(
              (res: any) => {
                //console.log(res);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Movie Deleted Successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
               this.deleteFromDom(id)
    
              }, (err: any) => {
                //console.log(err);
                
             }
           )
          }
        })
       
      }
    })
    
  }
  deleteFromDom(id:any) {
    let movieid = document.getElementById('movie' + id);
    setTimeout(() => {
      movieid!.style.display = "none";
    }, 1000);
    movieid!.querySelector("div")!.style.border = "1px solid red ";
    movieid!.querySelector("div")!.style.opacity = ".5";
    movieid!.querySelector("div")!.style.backgroundColor = "red";
    //console.log(movieid);
  }
}
