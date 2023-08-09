import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentDTO } from 'src/app/models/comment-dto.interface';
import { CommentService } from '../services/comment.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() category;
  @Output()
  commentCreated: EventEmitter<CommentDTO> = new EventEmitter();
  form!: FormGroup;
  submitted = false;
  comment: CommentDTO = new CommentDTO;
   
  constructor(private commentService: CommentService, private router: Router,
    private formBuilder: FormBuilder){}

  ngOnInit() {
    this.form = this.formBuilder.group({
        comment: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  
  createComment(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.comment.comment = this.f.comment.value;
    this.comment.commentType = this.category.categoryValue;
    this.commentCreated.emit(this.comment);
    this.submitted = false;
    this.form.reset();
  }
}
