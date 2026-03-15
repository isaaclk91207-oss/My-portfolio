import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  text-align: left;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
       I am a passionate Software Engineer with strong experience in full‑stack development. 
I enjoy building scalable web and mobile applications using React, Next.js, React Native, Node.js, and FastAPI. 
I am also familiar with SQL databases, security practices like encryption and decryption, and DevOps tools such as Git and Docker. 
Beyond coding, I value teamwork, problem solving, and continuous learning. 
My goal is to contribute to innovative projects that empower students, SMEs, and communities through accessible technology.
</AboutText>
    </AboutContainer>
  );
};

export default About;