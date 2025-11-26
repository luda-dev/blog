# 个人博客

基于 Next.js、TailwindCSS、Lucide 和 shadcn/ui 构建的现代化个人博客。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS v4
- **图标**: Lucide React
- **组件库**: shadcn/ui
- **包管理器**: pnpm

## 功能特性

- ✅ 响应式设计，适配移动端和桌面端
- ✅ 暗色/亮色主题自动切换
- ✅ 博客文章列表和详情页
- ✅ 分类和标签系统
- ✅ 现代化的 UI 组件
- ✅ SEO 友好
- ✅ 快速的页面加载速度

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

### 代码检查

```bash
pnpm lint
```

## 项目结构

```
blog/
├── src/
│   ├── app/              # Next.js 应用路由
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   ├── posts/        # 文章页面
│   │   └── about/        # 关于页面
│   ├── components/       # React 组件
│   │   ├── ui/          # shadcn/ui 组件
│   │   ├── header.tsx   # 页头组件
│   │   └── footer.tsx   # 页脚组件
│   └── lib/             # 工具函数
│       └── utils.ts     # 通用工具
├── public/              # 静态资源
└── package.json         # 项目配置
```

## 自定义配置

### 修改网站信息

编辑 `src/app/layout.tsx` 中的 metadata：

```typescript
export const metadata: Metadata = {
  title: "你的博客标题",
  description: "你的博客描述",
};
```

### 添加新文章

在 `src/app/posts/[id]/page.tsx` 中添加新的文章内容。

### 自定义主题颜色

编辑 `src/app/globals.css` 中的颜色变量。

## 部署

本项目可以轻松部署到以下平台：

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

推荐使用 Vercel 进行部署，只需：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

## 许可证

MIT License
