import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 2rem;
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Skills = () => {
  const skills = [
    // 🌐 Frontend
    'JavaScript (ES6+)',
    'React.js',
    'Next.js',
    'React Native',
    'HTML5',
    'CSS3',

    // ⚙️ Backend
    'Node.js (Express)',
    'Python (FastAPI)',
    'PHP (basic)',

    // 🗄 Database
    'SQL (MySQL, PostgreSQL)',
    'NoSQL (MongoDB, Redis)',

    // 🔒 Security
    'Encryption/Decryption (Public & Private Key)',
    'JWT Authentication',
    'OAuth2 (basic)',

    // 🧪 Testing
    'Unit Testing (Jest, PyTest)',
    'API Testing (Postman)',
    'Integration Testing',

    // 🚀 DevOps
    'Git/GitHub',
    'Docker',
    'CI/CD (GitHub Actions)',
    'Cloud Basics (AWS/GCP)',

    // 📐 Software Engineering Concepts
    'SDLC (Agile, Waterfall)',
    'UML Diagrams',
    'Design Patterns (Singleton, Factory, Observer)',
    'System Design (Scalability, Caching, Queues)',

    // 🤝 Soft Skills
    'Problem Solving',
    'Team Collaboration',
    'Documentation',
    'Agile Project Management'
  ];


  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;