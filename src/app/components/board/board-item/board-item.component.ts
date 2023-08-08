import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { CardService } from '../services/card.service';
import { CommentService } from '../services/comment.service';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent {
  categories: Array<Category>;
  comments: CommentDTO[] = [];

  constructor(private cardService: CardService, private commentService: CommentService) {}

  ngOnInit() {
    this.cardService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
    this.fetchComments();
  }

  fetchComments(){
    console.log(this.categories);
    this.commentService.fetchComments()
    .subscribe(
      (comments: CommentDTO[]) => {
        console.log(comments)
        this.comments = comments
      })
  }

  deleteComment(id:any){
    console.log(id);
    this.commentService.deleteComment(id)
    .subscribe(()=>{
      this.ngOnInit();
    })
  }
}
