import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { catchError, Observable, throwError } from "rxjs";
// import { AuthService } from "./auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authService.getToken();
        console.log(authToken);
        
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken,
                
            }
            
        });
        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();

            }
            console.error(err);
            return throwError(err);
        }))
    }
}