import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  title = 'movies-app';
  constructor(private loaderService: LoaderService, private renderer: Renderer2) { }
  ngAfterViewInit() {
   
  }
}
