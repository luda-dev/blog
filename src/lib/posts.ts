import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => {
      // 过滤掉以 _ 开头的文件和 README.md
      return fileName.endsWith(".md") && 
             !fileName.startsWith("_") && 
             fileName.toLowerCase() !== "readme.md";
    })
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || "",
        description: matterResult.data.description || "",
        date: matterResult.data.date || "",
        readTime: matterResult.data.readTime || "",
        category: matterResult.data.category || "",
      };
    });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // 使用 remark 将 markdown 转换为 HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      title: matterResult.data.title || "",
      description: matterResult.data.description || "",
      date: matterResult.data.date || "",
      readTime: matterResult.data.readTime || "",
      category: matterResult.data.category || "",
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading post ${id}:`, error);
    return null;
  }
}

export async function getAllPostIds(): Promise<{ id: string }[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => {
      // 过滤掉以 _ 开头的文件和 README.md
      return fileName.endsWith(".md") && 
             !fileName.startsWith("_") && 
             fileName.toLowerCase() !== "readme.md";
    })
    .map((fileName) => {
      return {
        id: fileName.replace(/\.md$/, ""),
      };
    });
}
