import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDTO } from "src/app/models/user-dto.interface";
import { environment } from "src/environments/environment";

const USER_API: string = `${environment.apiBaseUrl}/user`

@Injectable({
    providedIn: "root"
})
export class RegistrationService{
    constructor(private http: HttpClient){}

    createUser(newUser: UserDTO): Observable<UserDTO>{
        return this.http.post<UserDTO>(`${USER_API}/create`,newUser);
    }

    validateUser(user:UserDTO): Observable<UserDTO>{
        return this.http.post<UserDTO>(`${USER_API}/login`,user);
    }

    saveCurrentUser(user:UserDTO){
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
    }
}