import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { CardService } from '../services/card.service';
import { CommentService } from '../services/comment.service';
import { CommentDTO } from 'src/app/models/comment-dto.interface';

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

  constructor(private cardService: CardService, private commentService: CommentService) {}

  ngOnInit() {
    this.cardService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
    this.fetchComments();
  }

  editComment(id:any){
    this.allowEdit = true;
    this.commentId = id;
  }

  onCreateComment(newComment: CommentDTO){
     this.commentService.createComment(newComment, newComment.commentType)
    .subscribe(()=>{
      this.fetchComments();
    }
    );
  }

  fetchComments(){
    console.log(this.categories);
    this.commentService.fetchComments()
    .subscribe(
      (comments: CommentDTO[]) => {
        this.comments = comments
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
