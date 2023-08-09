import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { CardService } from '../services/card.service';
import { CommentService } from '../services/comment.service';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { RegistrationService } from '../../registration/registration.service';
import { UserDTO } from 'src/app/models/user-dto.interface';

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

  constructor(private cardService: CardService, private commentService: CommentService,
      private userService:RegistrationService) {}

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
  })

} 

  deleteComment(id:any){
    console.log(id);
    this.commentService.deleteComment(id)
    .subscribe(()=>{
        this.fetchComments();
    })
  }
}
