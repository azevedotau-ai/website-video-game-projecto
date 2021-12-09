import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'x-rapidapi-key' : 'a663e062f3mshd44060da9d4d7c0p12ac4djsnfe35d6f97ef4',
                '-x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams:{
                key: '415f48e9a30243bb8ec166586df25ee6'
            }
        });

        return next.handle(req);
    }
}