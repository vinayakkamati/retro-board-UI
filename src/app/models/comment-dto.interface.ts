import { UserDTO } from "./user-dto.interface";

export class CommentDTO{
    id:bigint;
    comment: string;
    commentType: string;
    user: UserDTO;
}