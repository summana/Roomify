import React from 'react';
import { useLoaderData, useLocation } from 'react-router';
import { getProjects } from '../../lib/puter.action';
import type { Route } from './+types/visualizer.$id';

export async function clientLoader({ params }: Route.LoaderArgs) {
  const projects = await getProjects();
  const project = projects.find(p => p.id === params.id);
  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }
  return { project };
}

const VisualizerId = () => {
  const { project } = useLoaderData<typeof clientLoader>();
  const location = useLocation();
  const stateData = location.state || {};
  const { initialImage = project?.sourceImage, name = project?.name || 'Untitled Project' } = stateData;

  return (
   <section>
    <h1>{name}</h1>
    <div className='visualizer'>
      {initialImage && (<div className='image-container'>
        <h2>Source Image</h2>
        <img src={initialImage} alt="Source" />
      </div>)}
    </div>
   </section>
  );
};

export default VisualizerId;