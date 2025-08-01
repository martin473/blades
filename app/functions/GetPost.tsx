import {remark} from "remark";
import html from 'remark-html';
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export async function getPostData(id) {
  const fullPath = path.join('app/content', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
 
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
 
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export default getPostData