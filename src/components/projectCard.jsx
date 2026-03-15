import React from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const ProjectCard = ({ title, description, technologies, liveLink, githubLink }) => {
  return (
    <ProjectCardContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <p>Technologies: {technologies.join(', ')}</p>
      {liveLink && <ProjectLink href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLink>}
      {githubLink && <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>}
    </ProjectCardContainer>
  );
};

export default ProjectCard;