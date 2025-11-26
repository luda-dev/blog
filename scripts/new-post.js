#!/usr/bin/env node

/**
 * 快速创建新文章的脚本
 * 使用方法：node scripts/new-post.js <文章ID>
 * 例如：node scripts/new-post.js my-first-post
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ 错误：请提供文章 ID');
  console.log('\n使用方法：');
  console.log('  node scripts/new-post.js <文章ID>');
  console.log('\n例如：');
  console.log('  node scripts/new-post.js my-first-post');
  console.log('  node scripts/new-post.js react-hooks-guide');
  process.exit(1);
}

const postId = args[0];
const fileName = `${postId}.md`;
const postsDir = path.join(process.cwd(), 'content', 'posts');
const filePath = path.join(postsDir, fileName);

// 检查文件是否已存在
if (fs.existsSync(filePath)) {
  console.error(`❌ 错误：文章 "${fileName}" 已经存在！`);
  process.exit(1);
}

// 确保目录存在
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// 获取当前日期
const today = new Date().toISOString().split('T')[0];

// 创建文章模板
const template = `---
title: "${postId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}"
description: "文章简短描述，会显示在文章列表中"
date: "${today}"
readTime: "5 分钟"
category: "技术"
---

# ${postId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

在这里开始编写你的文章内容...

## 简介

文章简介内容。

## 主要内容

### 小节标题

文章主要内容。

- 要点 1
- 要点 2
- 要点 3

## 代码示例

\`\`\`javascript
// 代码示例
console.log("Hello World");
\`\`\`

## 总结

文章总结。
`;

// 写入文件
try {
  fs.writeFileSync(filePath, template, 'utf8');
  console.log('✅ 成功创建新文章！');
  console.log(`\n📝 文件位置：${filePath}`);
  console.log(`📋 文件名：${fileName}`);
  console.log(`🆔 文章 ID：${postId}`);
  console.log(`📅 发布日期：${today}`);
  console.log('\n💡 接下来：');
  console.log(`1. 编辑文件 content/posts/${fileName}`);
  console.log('2. 修改标题、描述、分类等信息');
  console.log('3. 编写文章内容');
  console.log('4. 运行 pnpm dev 预览效果');
} catch (error) {
  console.error('❌ 创建文件失败：', error.message);
  process.exit(1);
}
