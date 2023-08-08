import { UserDTO } from "./user-dto.interface";

export interface CommentDTO{
    comment: string;
    commentType: string;
    user: UserDTO;
}