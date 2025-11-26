import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPostById, getAllPostIds } from "@/lib/posts";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPostById(id);

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
          <div 
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostIds();
  return posts;
}
