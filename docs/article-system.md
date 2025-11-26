# 文章系统使用指南

本文档详细介绍博客的文章管理系统，以及如何快速添加新文章。

## 系统架构

博客现在使用基于 Markdown 文件的内容管理系统，具有以下特点：

- ✅ **简单易用**：直接编辑 Markdown 文件
- ✅ **版本控制**：文章内容纳入 Git 版本管理
- ✅ **类型安全**：完整的 TypeScript 类型定义
- ✅ **自动构建**：Next.js 自动生成静态页面
- ✅ **灵活扩展**：支持所有标准 Markdown 语法

## 目录结构

```
blog/
├── content/
│   └── posts/                    # 文章存储目录
│       ├── README.md             # 文章系统说明文档
│       ├── _template.md          # 文章模板（不会被构建）
│       ├── nextjs-15-features.md # 示例文章
│       └── ...                   # 其他文章
├── scripts/
│   └── new-post.js               # 快速创建文章脚本
└── src/
    ├── lib/
    │   └── posts.ts              # 文章读取和解析逻辑
    └── app/
        └── posts/
            ├── page.tsx          # 文章列表页面
            └── [id]/
                └── page.tsx      # 文章详情页面
```

## 快速添加文章

### 方法一：使用脚本（推荐）

这是最简单快速的方式，脚本会自动生成带有模板的文章文件。

```bash
# 创建新文章
pnpm new-post my-article-id

# 例如：
pnpm new-post react-hooks-tutorial
pnpm new-post web-performance-optimization
```

脚本会：
1. 创建文件 `content/posts/my-article-id.md`
2. 自动填充当前日期
3. 根据文章 ID 生成标题
4. 添加完整的文章模板

### 方法二：手动创建

1. 在 `content/posts/` 目录下创建新的 `.md` 文件
2. 文件名将作为文章 URL 的一部分（例如：`my-article.md` → `/posts/my-article`）
3. 添加必需的 Front Matter 元数据
4. 使用 Markdown 语法编写内容

## 文章格式规范

### Front Matter（必需）

每个文章文件必须以 YAML 格式的 Front Matter 开头：

```markdown
---
title: "文章标题"
description: "简短描述，显示在列表页"
date: "2024-11-26"
readTime: "5 分钟"
category: "分类"
---
```

#### 字段说明

| 字段 | 类型 | 必需 | 说明 |
|-----|------|------|------|
| `title` | string | ✅ | 文章标题，显示在页面顶部和列表中 |
| `description` | string | ✅ | 文章简介，显示在文章列表卡片中 |
| `date` | string | ✅ | 发布日期，格式：YYYY-MM-DD |
| `readTime` | string | ✅ | 预计阅读时间，如："5 分钟" |
| `category` | string | ✅ | 文章分类，如："技术"、"前端"等 |

### Markdown 内容

Front Matter 之后，使用标准 Markdown 语法编写文章内容：

```markdown
# 主标题

文章正文内容...

## 二级标题

### 三级标题

- 无序列表项
- 列表项 2

1. 有序列表项
2. 列表项 2

**粗体** 和 *斜体*

`行内代码`

\```javascript
// 代码块
console.log("Hello");
\```

> 引用内容

[链接文字](https://example.com)
```

## 完整示例

创建文件 `content/posts/react-performance.md`：

```markdown
---
title: "React 性能优化实践"
description: "深入探讨 React 应用的性能优化技巧和最佳实践"
date: "2024-11-26"
readTime: "15 分钟"
category: "React"
---

# React 性能优化实践

React 应用的性能优化是一个重要的话题。本文将分享一些实用的优化技巧。

## 1. 使用 React.memo

React.memo 是一个高阶组件，可以避免不必要的重渲染。

\```jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});
\```

### 何时使用

- 组件渲染开销大
- props 很少改变
- 父组件频繁重渲染

## 2. 使用 useMemo 和 useCallback

这两个 Hook 可以缓存计算结果和函数：

\```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\```

## 3. 代码分割

使用 React.lazy 和 Suspense 进行代码分割：

\```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
\```

## 总结

掌握这些优化技巧，可以显著提升 React 应用的性能。记住，**只在必要时优化**，避免过度优化。
```

## 文件命名规范

### 推荐的命名方式

使用小写字母和连字符：
- ✅ `react-hooks-guide.md`
- ✅ `web-performance-tips.md`
- ✅ `typescript-best-practices.md`

### 避免的命名方式

- ❌ `React Hooks Guide.md` （包含空格）
- ❌ `web_performance_tips.md` （使用下划线）
- ❌ `TypeScript Best Practices.md` （大写字母和空格）

### 特殊文件

以下文件不会被构建为文章：
- `README.md` - 说明文档
- `_*.md` - 以下划线开头的文件（如 `_template.md`）

## 开发工作流

### 1. 创建文章

```bash
pnpm new-post my-new-article
```

### 2. 编辑内容

使用你喜欢的编辑器编辑 `content/posts/my-new-article.md`

### 3. 本地预览

```bash
pnpm dev
```

访问 http://localhost:3000/posts 查看文章列表
访问 http://localhost:3000/posts/my-new-article 查看文章详情

### 4. 构建生产版本

```bash
pnpm build
```

### 5. 部署

将代码推送到 Git 仓库，自动部署系统会处理剩下的事情。

## 技术实现

### 文章读取流程

1. `getAllPosts()` - 读取 `content/posts/` 目录下的所有 `.md` 文件
2. 使用 `gray-matter` 解析 Front Matter
3. 按日期降序排序
4. 返回文章列表

### 文章渲染流程

1. `getPostById()` - 根据 ID 读取对应的 `.md` 文件
2. 使用 `gray-matter` 提取元数据
3. 使用 `remark` 和 `remark-html` 将 Markdown 转换为 HTML
4. 在页面中渲染 HTML 内容

### 静态生成

- Next.js 在构建时会为每篇文章生成静态 HTML 页面
- 使用 `generateStaticParams` 预渲染所有文章页面
- 提供极快的页面加载速度和良好的 SEO

## 常见问题

### Q: 文章列表的排序规则是什么？

A: 文章按照 `date` 字段降序排列，最新的文章显示在最前面。

### Q: 可以使用图片吗？

A: 可以。将图片放在 `public/images/` 目录下，然后在 Markdown 中使用相对路径引用：

```markdown
![图片描述](/images/my-image.png)
```

### Q: 如何删除文章？

A: 直接删除对应的 `.md` 文件，然后重新构建即可。

### Q: 可以修改已发布的文章吗？

A: 可以。直接编辑 `.md` 文件，保存后重新构建即可。

### Q: 支持草稿功能吗？

A: 可以使用以下方式实现草稿功能：
1. 在文件名前加下划线（如 `_draft-article.md`）
2. 或将草稿文件放在其他目录

## 最佳实践

1. **使用有意义的文件名**：文件名会成为 URL 的一部分
2. **保持 Front Matter 完整**：确保所有必需字段都已填写
3. **使用标准 Markdown**：避免使用过于复杂的 HTML
4. **合理使用标题层级**：保持文章结构清晰
5. **添加代码高亮**：指定代码块的语言类型
6. **定期备份**：文章内容都在 Git 中，记得定期推送

## 扩展功能

未来可以考虑添加的功能：

- [ ] 标签系统
- [ ] 文章搜索
- [ ] 相关文章推荐
- [ ] 评论系统
- [ ] 文章浏览统计
- [ ] RSS 订阅
- [ ] 多语言支持

## 技术支持

如有问题或建议，请：
1. 查看 `content/posts/README.md` 快速指南
2. 参考示例文章的写法
3. 提交 Issue 到 GitHub 仓库
