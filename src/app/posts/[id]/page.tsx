import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const posts = {
  "1": {
    title: "Next.js 15 新特性详解",
    date: "2024-11-20",
    readTime: "5 分钟",
    category: "技术",
    content: `
# Next.js 15 新特性详解

Next.js 15 是一个重要的版本更新，带来了许多令人兴奋的新特性和改进。本文将详细介绍这些新功能。

## Server Components 增强

Server Components 是 Next.js 的核心特性之一。在 Next.js 15 中，Server Components 得到了进一步的增强，提供了更好的性能和开发体验。

### 主要特性

- **改进的缓存机制**：新的缓存策略让数据获取更加高效
- **增强的流式传输**：支持更细粒度的流式渲染
- **更好的错误处理**：提供了更详细的错误信息和调试工具

## 性能优化

Next.js 15 在性能方面也有显著提升：

1. **更快的构建速度**：优化了构建流程，减少了构建时间
2. **改进的 HMR**：热模块替换更加快速和可靠
3. **减少的包体积**：通过更好的 tree-shaking 减少了最终包的大小

## 开发体验

新版本在开发体验方面也有很多改进：

- 更好的 TypeScript 支持
- 改进的错误提示
- 增强的调试工具

## 总结

Next.js 15 是一个令人兴奋的更新，为开发者带来了更强大的功能和更好的性能。如果你还没有尝试，现在就是升级的好时机！
    `,
  },
  "2": {
    title: "TailwindCSS 最佳实践",
    date: "2024-11-15",
    readTime: "8 分钟",
    category: "前端",
    content: `
# TailwindCSS 最佳实践

TailwindCSS 是一个功能强大的实用程序优先的 CSS 框架。本文分享一些在实际项目中使用 TailwindCSS 的最佳实践。

## 组织样式

合理组织样式类可以让代码更加清晰易维护：

### 使用组件化

将常用的样式组合封装成可复用的组件，避免重复。

### 使用 @apply 指令

对于经常重复的样式组合，可以使用 @apply 创建自定义类。

## 性能优化

TailwindCSS 的性能优化技巧：

1. **使用 JIT 模式**：按需生成样式，减少 CSS 文件大小
2. **清理未使用的样式**：配置 purge 选项
3. **合理使用插件**：只引入需要的插件

## 响应式设计

TailwindCSS 提供了强大的响应式设计工具：

- 移动优先的设计理念
- 灵活的断点系统
- 简洁的响应式语法

## 总结

掌握这些最佳实践，可以让你更高效地使用 TailwindCSS 开发项目。
    `,
  },
  "3": {
    title: "使用 TypeScript 构建类型安全的应用",
    date: "2024-11-10",
    readTime: "10 分钟",
    category: "编程",
    content: `
# 使用 TypeScript 构建类型安全的应用

TypeScript 为 JavaScript 带来了强大的类型系统。本文将深入探讨如何利用 TypeScript 构建类型安全的应用。

## 为什么选择 TypeScript

TypeScript 提供了以下优势：

- **类型安全**：在编译时捕获错误
- **更好的 IDE 支持**：智能提示和自动完成
- **代码可维护性**：类型信息作为文档

## 高级类型特性

### 泛型

泛型是 TypeScript 中最强大的特性之一，它允许我们创建可复用的组件。

### 联合类型和交叉类型

灵活使用联合类型和交叉类型可以创建更精确的类型定义。

### 类型推导

TypeScript 的类型推导功能可以自动推断变量的类型，减少显式类型注解。

## 实践建议

1. 始终启用严格模式
2. 合理使用类型断言
3. 避免使用 any 类型
4. 利用类型守卫

## 总结

TypeScript 是构建大型应用的强大工具，掌握其类型系统将大大提高代码质量。
    `,
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
          <p className="text-muted-foreground mb-6">抱歉，您访问的文章不存在。</p>
          <Button asChild>
            <Link href="/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回文章列表
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/posts">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回文章列表
        </Link>
      </Button>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </header>

        <div className="mt-8 border-t pt-8">
          <div className="whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id,
  }));
}
