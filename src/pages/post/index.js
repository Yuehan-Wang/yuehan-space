import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default function Post({ posts }) {
  return (
    <div>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/post/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => ({
    slug: filename.replace(/\.html$/, ''),
    title: filename.replace(/\.html$/, '').replace(/-/g, ' '),
  }));

  return {
    props: {
      posts,
    },
  };
}
