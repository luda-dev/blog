import { Comment, UserInfo } from "@/types/comment";

const COMMENTS_KEY = "blog_comments";
const USER_INFO_KEY = "blog_user_info";

// 评论管理
export function getComments(postId: string): Comment[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(COMMENTS_KEY);
    if (!stored) return [];
    
    const allComments: Comment[] = JSON.parse(stored);
    return allComments.filter((comment) => comment.postId === postId);
  } catch (error) {
    console.error("Failed to get comments:", error);
    return [];
  }
}

export function getAllComments(): Comment[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(COMMENTS_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error("Failed to get all comments:", error);
    return [];
  }
}

export function addComment(comment: Omit<Comment, "id" | "createdAt">): Comment {
  const newComment: Comment = {
    ...comment,
    id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const allComments = getAllComments();
    allComments.push(newComment);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(allComments));
    return newComment;
  } catch (error) {
    console.error("Failed to add comment:", error);
    throw error;
  }
}

export function getCommentCount(postId: string): number {
  return getComments(postId).length;
}

// 用户信息管理
export function getUserInfo(): UserInfo | null {
  if (typeof window === "undefined") return null;
  
  try {
    const stored = localStorage.getItem(USER_INFO_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.error("Failed to get user info:", error);
    return null;
  }
}

export function saveUserInfo(userInfo: UserInfo): void {
  try {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  } catch (error) {
    console.error("Failed to save user info:", error);
    throw error;
  }
}
