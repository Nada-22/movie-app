import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
    public isLoading = new BehaviorSubject(false);
    constructor() { }
}