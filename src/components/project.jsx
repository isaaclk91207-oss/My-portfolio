import React from 'react';
import styled from 'styled-components';
import ProjectCard from './projectCard';

const ProjectsContainer = styled.section`
  padding: 2rem;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is pluse connect website for lovers. This is just fun project.',
      technologies: ['React','Node.js','Neon'],
      liveLink: 'https://pluse-connect.vercel.app/',
      githubLink: 'https://github.com/isaaclk91207-oss/EduBridge_AI',
    },
    {
      title: 'Project 2',
      description: 'This porject is build for Ideathon competition.',
      technologies: ['Next.js', 'Python(FastAPI)', 'Neon'],
      liveLink: 'https://edu-bridge-ai-frontend.vercel.app',
      githubLink: 'https://github.com/isaaclk91207-oss/EduBridge_AI',
    },
    {
      title: 'Project 3',
      description: 'This is my telegram AI bot project Business Idea Operating System',
      technologies: ['Python','Supabase'],
      liveLink: 'https://t.me/IdeaBA_bot',
      githubLink: 'https://github.com/isaaclk91207-oss/IBOS_telegramBot',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;