import Layout from 'components/Layout';
import Head from 'next/head';
import { getAllProjects } from 'services/projects';

export const getStaticProps = () => {
  const projects = getAllProjects();

  return {
    props: { projects }
  };
};

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-10">Projects</h1>
        <ul className="-mb-8">
          {projects.map((project) => (
            <li key={project.slug}>
              <div className="relative pb-8">
                <div className="relative flex items-start space-x-3">
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <b className="font-medium text-gray-900 mr-2">{project.title}</b>
                        {project.tags.map((tag, tagId) => (
                          <span
                            key={tagId}
                            className="mr-2 my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"></span>
                            </div>
                            <div className="ml-3.5 font-medium text-gray-900">{tag}</div>
                          </span>
                        ))}
                      </div>
                      <span className="whitespace-nowrap text-sm">{project.date}</span>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}