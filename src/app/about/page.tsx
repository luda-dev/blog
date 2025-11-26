import { Code2, Coffee, Heart, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">关于我</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          热爱编程，享受创造的过程
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>简介</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              你好！我是一名全栈开发者，专注于现代 Web 技术栈。我热衷于学习新技术，
              并通过这个博客分享我的学习经验和项目实践。
            </p>
            <p>
              我相信技术的力量可以改变世界，而好的代码不仅要能工作，更要优雅、可维护。
              通过持续学习和实践，我致力于成为一名更优秀的工程师。
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                <CardTitle>技术栈</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  TailwindCSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  Node.js
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <CardTitle>兴趣爱好</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  开源项目
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  技术写作
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  代码重构
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  学习新技术
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              <CardTitle>写作理念</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              这个博客是我记录学习和思考的地方。我希望通过分享自己的经验，
              能够帮助到其他开发者，同时也让自己对知识有更深入的理解。
            </p>
            <p>
              我的文章主要关注 Web 开发、软件工程和技术实践。
              如果你有任何问题或建议，欢迎通过页面底部的联系方式与我交流。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5" />
              <CardTitle>联系我</CardTitle>
            </div>
            <CardDescription>
              欢迎通过以下方式与我联系
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              你可以通过页面底部的社交媒体链接找到我，期待与你交流！
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
