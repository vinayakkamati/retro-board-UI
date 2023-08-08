import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentDTO } from "src/app/models/comment-dto.interface";
import { environment } from "src/environments/environment";

const USER_API: string = `${environment.apiBaseUrl}/comments`

@Injectable({
    providedIn:"root"
})
export class CommentService{
    constructor(private http: HttpClient){}

    createComment(newComment: CommentDTO, commentType: string): Observable<void>{
        const params =  new HttpParams().set('commentType',commentType)
        return this.http.post<void>(`${USER_API}/create`,newComment,{'params':params});
    }

    fetchComments():Observable<CommentDTO[]>{
        return this.http.get<CommentDTO[]>(`${USER_API}/`);
    }

    deleteComment(id:any):Observable<void>{
        return this.http.delete<void>(`${USER_API}/${id}`);
    }
}