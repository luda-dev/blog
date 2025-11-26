import Link from "next/link"
import { BookOpen, Home, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2 text-lg font-bold">
          <BookOpen className="h-6 w-6" />
          <span>我的博客</span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link 
            href="/" 
            className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground"
          >
            <Home className="h-4 w-4" />
            <span>首页</span>
          </Link>
          <Link 
            href="/posts" 
            className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60"
          >
            <BookOpen className="h-4 w-4" />
            <span>文章</span>
          </Link>
          <Link 
            href="/about" 
            className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60"
          >
            <User className="h-4 w-4" />
            <span>关于</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
