import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { CommentService } from '../services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent {
  @Input() category;
  @Output()
  commentCreated: EventEmitter<CommentDTO> = new EventEmitter();
   
  constructor(private commentService: CommentService, private router: Router){}

  createComment(comment: CommentDTO){
    comment.commentType = this.category.categoryValue;
    // this.commentService.createComment(comment, this.category.categoryValue)
    // .subscribe(()=>{
    // }
    // );
    this.commentCreated.emit(comment);
  }

}
