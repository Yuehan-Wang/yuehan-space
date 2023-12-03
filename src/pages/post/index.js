import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import styles from '../../styles/postpage.module.css';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default function Home({ groupedPosts }) {
    const years = Object.keys(groupedPosts).sort((a, b) => Number(b) - Number(a));
    return (
        <div>
          {years.map(year => (
            <div key={year}>
              <h2 className={styles.yearTitle}>{year}</h2>
              <ul className={styles.postlist}>
                {groupedPosts[year].map(({ slug, title, date }) => (
                  <li key={slug}>
                    <Link href={`/post/${slug}`}>
                      {title}
                    </Link>
                    <span className={styles.postDate}>{date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }


    export async function getStaticProps() {
        const filenames = fs.readdirSync(postsDirectory);
        let posts = filenames.map((filename) => {
          const filePath = path.join(postsDirectory, filename);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data } = matter(fileContents);
      
          return {
            slug: filename.replace(/\.md$/, ''),
            title: data.title || filename.replace(/\.md$/, '').replace(/-/g, ' '),
            date: data.date || '',
          };
        });
      

        posts = posts.filter(post => post.date).sort((a, b) => new Date(b.date) - new Date(a.date));
      

        let groupedPosts = {};
        posts.forEach(post => {
          const year = post.date.split('-')[0];
          groupedPosts[year] = groupedPosts[year] || [];
          groupedPosts[year].push(post);
        });
      
        return {
          props: {
            groupedPosts: groupedPosts,
          },
        };
      }
      
  
  
  
  