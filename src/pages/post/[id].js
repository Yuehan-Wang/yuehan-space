import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import styles from '../../styles/markdown.module.css'

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default function Post({ postData }) {
   if (!postData) {
      return <div>Loading...</div>;
    }
  return (
    <div>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

    const filePath = path.join(postsDirectory, `${params.id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
  

    const matterResult = matter(fileContents);
    const processedContent = await remark().use(remarkGfm).use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
  

    return {
      props: {
        postData: {
          title: matterResult.data.title,
          contentHtml,
        },
      },
    };
  }