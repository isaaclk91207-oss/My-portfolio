import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #f8f8f8; /* Light background for visual separation */
`;

const ServicesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ServicesSubtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff; /* Primary color for the icon */
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Website Development',
      description: 'Frontend + Backend development using React, Next.js, Node.js, and FastAPI',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps with React Native',
    },
    {
      icon: '🗄️',
      title: 'Database Design & Integration',
      description: 'SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) schema design and integration',
    },
    {
      icon: '🔒',
      title: 'Security Implementation',
      description: 'Encryption/Decryption, JWT authentication, and secure coding practices',
    },
    {
      icon: '☁️',
      title: 'Deployment & Hosting',
      description: 'Docker, CI/CD pipelines, and cloud hosting (AWS/GCP basics)',
    },
  ];

  return (
    <ServicesContainer>
      <ServicesTitle>Services</ServicesTitle>
      <ServicesSubtitle>
        I offer a range of services to help you achieve your goals.
      </ServicesSubtitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;