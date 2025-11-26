import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const allPosts = await getAllPosts();
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
