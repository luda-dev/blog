export interface Comment {
  id: string;
  postId: string;
  nickname: string;
  email: string;
  qq?: string;
  phone?: string;
  content: string;
  createdAt: string;
  isAuthor: boolean;
}

export interface CommentFormData {
  nickname: string;
  email: string;
  qq?: string;
  phone?: string;
  content: string;
}

export interface UserInfo {
  nickname: string;
  email: string;
  qq?: string;
  phone?: string;
}
