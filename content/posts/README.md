# 快速添加文章指南

本目录用于存放博客文章的 Markdown 文件。您可以通过简单地添加新的 `.md` 文件来发布新文章。

## 如何添加新文章

### 1. 创建 Markdown 文件

在 `content/posts/` 目录下创建一个新的 `.md` 文件。文件名将作为文章的唯一标识符（ID），建议使用英文和连字符命名，例如：

- `my-first-post.md`
- `react-hooks-guide.md`
- `web-performance-tips.md`

### 2. 添加文章元数据

每个 Markdown 文件必须以 YAML 格式的 Front Matter 开头，包含以下字段：

```markdown
---
title: "文章标题"
description: "文章简短描述"
date: "2024-11-26"
readTime: "5 分钟"
category: "分类名称"
---
```

#### 字段说明：

- **title**: 文章标题（必填）
- **description**: 文章简短描述，会显示在文章列表中（必填）
- **date**: 发布日期，格式为 YYYY-MM-DD（必填）
- **readTime**: 预计阅读时间（必填）
- **category**: 文章分类（必填）

### 3. 编写文章内容

在 Front Matter 之后，使用标准的 Markdown 语法编写文章内容：

```markdown
---
title: "我的第一篇文章"
description: "这是一篇示例文章"
date: "2024-11-26"
readTime: "3 分钟"
category: "教程"
---

# 主标题

这是文章的正文内容。

## 二级标题

支持所有标准的 Markdown 语法：

- 无序列表
- 项目2

1. 有序列表
2. 项目2

**粗体文字** 和 *斜体文字*

`代码片段` 和代码块：

\```javascript
console.log("Hello World");
\```

> 引用文字

[链接文本](https://example.com)
```

### 4. 完成

保存文件后，运行以下命令重新构建网站：

```bash
pnpm build
```

或者在开发模式下，修改会自动生效：

```bash
pnpm dev
```

## 完整示例

以下是一个完整的文章示例：

```markdown
---
title: "深入理解 React Hooks"
description: "全面介绍 React Hooks 的使用方法和最佳实践"
date: "2024-11-26"
readTime: "10 分钟"
category: "React"
---

# 深入理解 React Hooks

React Hooks 是 React 16.8 引入的新特性，它让我们能在函数组件中使用状态和其他 React 特性。

## 为什么使用 Hooks？

Hooks 解决了以下问题：

1. **复杂组件难以理解**：Hooks 让你在不编写类的情况下使用 state
2. **难以复用状态逻辑**：自定义 Hooks 让逻辑复用变得简单
3. **Class 组件的困惑**：不需要理解 this 的工作方式

## 常用的 Hooks

### useState

\```javascript
const [count, setCount] = useState(0);
\```

### useEffect

\```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
\```

## 总结

掌握 Hooks 是现代 React 开发的必备技能。
```

## 注意事项

1. **文件名唯一性**：确保每个 `.md` 文件的文件名是唯一的
2. **Front Matter 格式**：必须严格遵循 YAML 格式，使用 `---` 包围
3. **日期格式**：日期必须使用 `YYYY-MM-DD` 格式
4. **字段必填**：所有元数据字段都是必填的
5. **字符编码**：使用 UTF-8 编码保存文件

## 文章排序

文章列表会自动按照 `date` 字段降序排列，最新的文章显示在最前面。

## 支持的 Markdown 语法

本博客系统支持所有标准的 Markdown 语法，包括但不限于：

- 标题（# ~ ######）
- 段落和换行
- 强调（**粗体**、*斜体*）
- 列表（有序和无序）
- 链接
- 代码块和行内代码
- 引用
- 分隔线
- 图片

开始创建你的第一篇文章吧！
