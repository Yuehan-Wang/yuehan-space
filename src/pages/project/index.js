import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from '../../styles/projectpage.module.css';

const projectsDirectory = 'content/projects'

export async function getStaticProps() {
    const filenames = fs.readdirSync(projectsDirectory);
    const projects = filenames.map((filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            id: filename.replace(/\.md$/, ''),
            ...data,
        };
    });

    return {
        props: { projects },
    };
}

export default function ProjectsPage({ projects }) {
    return (
      <div className={styles.projectsPage}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Link href={`/project/${project.id}`}>

                <h2>{project.title}</h2>
                <img src={project.imageUrl} alt={project.title} />
                <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }