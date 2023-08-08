import { Component, Input } from '@angular/core';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent {
  @Input() category;
  
  constructor(private commentService: CommentService){}

  onCreateComment(comment: CommentDTO){
    console.log(comment.commentType)
    console.log(comment.comment);
    console.log(this.category)
    this.commentService.createComment(comment, this.category.categoryValue).subscribe(
      (comment: CommentDTO) => {
      }
    );
  }

}
