import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { CardService } from '../services/card.service';
import { CommentService } from '../services/comment.service';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { RegistrationService } from '../../registration/registration.service';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent {
  categories: Array<Category>;
  comments: CommentDTO[] = [];
  allowEdit: boolean = false;
  commentId: any;
  currentUser: UserDTO;
  success = false;  
  updated = false;
  deleted = false;
  timeoutId?: number;

  constructor(private cardService: CardService, private commentService: CommentService,
      private userService:RegistrationService,
      private router: Router,) {}

  ngOnInit() {
    this.cardService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
    this.currentUser = JSON.parse(localStorage.getItem('user') || '[]');
    this.fetchComments();
  }

  editComment(id:any){
    this.allowEdit = true;
    this.commentId = id;
    console.log(this.comments)
  }

  onCreateComment(newComment: CommentDTO){
    newComment.createdBy = this.currentUser;
     this.commentService.createComment(newComment, newComment.commentType)
    .subscribe(()=>{
      this.fetchComments();
      this.success = true;
      this.resetTimer();
    });
  }

  fetchComments(){
    this.commentService.fetchComments()
    .subscribe(
      (comments: CommentDTO[]) => {
        this.comments = comments;
      })
  }
  
  updateComment(comment: CommentDTO) {
    this.commentService.updateComment(comment).subscribe(()=>{
      this.commentId="";
      this.fetchComments();
      this.updated = true;
      this.resetTimer();
  })

} 

  deleteComment(id:any){
    console.log(id);
    this.commentService.deleteComment(id)
    .subscribe(()=>{
        this.fetchComments();
        this.deleted = true;
        this.resetTimer();
    })
  }


  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.success = false;
      this.deleted = false;
      this.updated = false;
    }, 2000);
  }
  
  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
}

}
