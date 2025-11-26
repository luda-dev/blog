import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const allPosts = [
  {
    id: "1",
    title: "Next.js 15 新特性详解",
    description: "探索 Next.js 15 带来的全新功能和性能优化，包括 Server Components 的增强支持。",
    date: "2024-11-20",
    readTime: "5 分钟",
    category: "技术",
  },
  {
    id: "2",
    title: "TailwindCSS 最佳实践",
    description: "分享在实际项目中使用 TailwindCSS 的经验和技巧，让你的开发更加高效。",
    date: "2024-11-15",
    readTime: "8 分钟",
    category: "前端",
  },
  {
    id: "3",
    title: "使用 TypeScript 构建类型安全的应用",
    description: "深入了解 TypeScript 的高级类型系统，打造更加健壮的应用程序。",
    date: "2024-11-10",
    readTime: "10 分钟",
    category: "编程",
  },
  {
    id: "4",
    title: "React Server Components 深度解析",
    description: "理解 React Server Components 的工作原理，以及如何在项目中最佳实践。",
    date: "2024-11-05",
    readTime: "12 分钟",
    category: "React",
  },
  {
    id: "5",
    title: "构建高性能的 Web 应用",
    description: "从性能优化的角度，探讨如何构建快速响应的现代 Web 应用。",
    date: "2024-10-28",
    readTime: "15 分钟",
    category: "性能",
  },
  {
    id: "6",
    title: "shadcn/ui 组件库使用指南",
    description: "了解如何在项目中集成和使用 shadcn/ui，快速构建美观的用户界面。",
    date: "2024-10-20",
    readTime: "7 分钟",
    category: "UI",
  },
];

export default function PostsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">所有文章</h1>
        <p className="text-xl text-muted-foreground">
          探索技术、分享经验、记录成长
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
