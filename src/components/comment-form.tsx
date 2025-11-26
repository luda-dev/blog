"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EmojiPicker } from "@/components/emoji-picker";
import { Card, CardContent } from "@/components/ui/card";
import { CommentFormData, UserInfo } from "@/types/comment";
import { getUserInfo, saveUserInfo, addComment } from "@/lib/comments";

interface CommentFormProps {
  postId: string;
  onCommentAdded: () => void;
}

export function CommentForm({ postId, onCommentAdded }: CommentFormProps) {
  const [formData, setFormData] = useState<CommentFormData>(() => {
    const userInfo = getUserInfo();
    return {
      nickname: userInfo?.nickname || "",
      email: userInfo?.email || "",
      qq: userInfo?.qq || "",
      phone: userInfo?.phone || "",
      content: "",
    };
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CommentFormData, string>>>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CommentFormData, string>> = {};

    if (!formData.nickname.trim()) {
      newErrors.nickname = "昵称为必填项";
    }

    if (!formData.email.trim()) {
      newErrors.email = "邮箱为必填项";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (!formData.content.trim()) {
      newErrors.content = "评论内容不能为空";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // 保存用户信息到缓存
      const userInfo: UserInfo = {
        nickname: formData.nickname,
        email: formData.email,
        qq: formData.qq,
        phone: formData.phone,
      };
      saveUserInfo(userInfo);

      // 添加评论
      addComment({
        postId,
        nickname: formData.nickname,
        email: formData.email,
        qq: formData.qq,
        phone: formData.phone,
        content: formData.content,
        isAuthor: false, // 默认为用户评论，可以后续添加作者判断逻辑
      });

      // 清空评论内容
      setFormData((prev) => ({
        ...prev,
        content: "",
      }));
      setErrors({});

      // 通知父组件刷新评论列表
      onCommentAdded();
    } catch (error) {
      console.error("Failed to submit comment:", error);
      alert("评论提交失败，请重试");
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent =
        formData.content.substring(0, start) +
        emoji +
        formData.content.substring(end);
      
      setFormData((prev) => ({
        ...prev,
        content: newContent,
      }));

      // 恢复光标位置
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + emoji.length, start + emoji.length);
      }, 0);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium mb-1.5">
                昵称 <span className="text-red-500">*</span>
              </label>
              <Input
                id="nickname"
                type="text"
                placeholder="请输入昵称"
                value={formData.nickname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, nickname: e.target.value }))
                }
                className={errors.nickname ? "border-red-500" : ""}
              />
              {errors.nickname && (
                <p className="text-sm text-red-500 mt-1">{errors.nickname}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="请输入邮箱"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="qq" className="block text-sm font-medium mb-1.5">
                QQ
              </label>
              <Input
                id="qq"
                type="text"
                placeholder="请输入 QQ 号（选填）"
                value={formData.qq}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, qq: e.target.value }))
                }
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                手机号
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="请输入手机号（选填）"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1.5">
              评论内容 <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="content"
              ref={textareaRef}
              placeholder="分享你的想法..."
              value={formData.content}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, content: e.target.value }))
              }
              className={errors.content ? "border-red-500 min-h-[120px]" : "min-h-[120px]"}
            />
            {errors.content && (
              <p className="text-sm text-red-500 mt-1">{errors.content}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <EmojiPicker onSelectEmoji={handleEmojiSelect} />
            <Button type="submit">发表评论</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
