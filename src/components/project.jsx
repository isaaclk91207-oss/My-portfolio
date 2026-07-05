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
    {
      title: 'Project 4',
      description: 'This is my Fieldbook project for farmers. It is a platform to connect farmers with experts and provide them with the necessary information and resources.',
      technologies: ['React(Native)', 'Node.js (Express)', 'Neon'],
      liveLink: 'https://fieldbook2026.pages.dev',
    },
    {
      title: 'Project 5',
      description: 'This is my Fieldmessenger project for farmers. It is a platform to connect farmers with experts and provide them with the necessary information and resources.',
      technologies: ['React(Native)', 'Python(Socket)', 'Neon'],
      liveLink: 'https://fieldmessenger2026.pages.dev',
    },
    {
       title: 'Project 5',
      description: 'This project is my own idea and it is a platform for businesses AI assistant. This project is still in development and it is not live yet.This is a MVP status project and teamwork project but my own idea.BIOS AI is for business industry.',
      technologies: ['Next.js', 'Node.js(For MVP)', 'MySQL'],
      liveLink: 'https://chat.biosai.website',
    },
    {
      title: 'Project 6',
      description: 'This is my Personal AI project. It is a memory-based AI project. Phase 1: basic chatbot functionality is working fine. Phase 2: conversation history management is implemented and operational. Phase 3: integrated a sqlite3 database to store conversation history, also working fine. The project is production-ready and includes a complete workflow (User -> Input -> History -> SystemPrompt -> OpenAI client -> LLM response -> History update -> screen).',
      technologies: ['Next.js', 'Python(Flask)', 'sqlite3'],
      liveLink: 'https://personalai-omega.vercel.app',
    }
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