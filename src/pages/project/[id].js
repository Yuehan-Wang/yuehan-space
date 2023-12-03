import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
    return (
        <div>
            <h1>{project.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
    );
}
