import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recentPosts = [
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
];

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          分享技术见解、编程经验和生活感悟。探索 Web 开发、软件工程和创新思维。
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/posts">
              浏览文章
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">关于我</Link>
          </Button>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">最新文章</h2>
          <Button asChild variant="ghost">
            <Link href="/posts">
              查看全部
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card className="h-full transition-colors hover:bg-accent">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
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
      </section>
    </div>
  );
}
