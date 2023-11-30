import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default function Post({ postData }) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { id: filename.replace(/\.html$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.id}.html`);
  const contentHtml = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      postData: {
        title: params.id.replace(/-/g, ' '), // 使用文件名作为标题
        contentHtml,
      },
    },
  };
}
