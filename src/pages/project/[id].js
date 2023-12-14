import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '../../styles/projectpage.module.css';
import { marked } from 'marked';

const projectsDirectory = 'content/projects';


export async function getStaticPaths() {
    const filenames = fs.readdirSync(projectsDirectory);
    const paths = filenames.map((filename) => {
        return {
            params: { id: filename.replace(/\.md$/, '') },
        };
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(projectsDirectory, `${params.id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        props: {
            project: { ...data, content },
        },
    };
}

export default function ProjectPage({ project }) {
    const markdownHtml = marked(project.content);

    return (
        <div className={styles.projectContent}>
            <h1>{project.title}</h1>
            <div className={styles.markdownContent}>
            <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
            </div>

        </div>
    );
}
