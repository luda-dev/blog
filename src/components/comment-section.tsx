"use client";

import { useState, useCallback } from "react";
import { CommentForm } from "@/components/comment-form";
import { CommentList } from "@/components/comment-list";
import { Comment } from "@/types/comment";
import { getComments } from "@/lib/comments";
import { MessageCircle } from "lucide-react";

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(() => {
    const fetchedComments = getComments(postId);
    return fetchedComments.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  });

  const loadComments = useCallback(() => {
    const fetchedComments = getComments(postId);
    const sortedComments = fetchedComments.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setComments(sortedComments);
  }, [postId]);

  return (
    <section className="mt-12 border-t pt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          <span>评论</span>
          <span className="text-muted-foreground text-lg">({comments.length})</span>
        </h2>
      </div>

      <div className="space-y-8">
        <CommentForm postId={postId} onCommentAdded={loadComments} />
        <CommentList comments={comments} />
      </div>
    </section>
  );
}
