import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; /* Adjust as needed */
  height: 100%;
  background-color: white;
  padding: 2rem;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1001; /* Above the icon */
  overflow-y: auto; /* Enable scrolling if content is long */
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
  line-height: 1;
  &:hover {
    color: #007bff;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const Question = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  color: ${({ active }) => (active ? '#007bff' : '#333')};
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const ToggleIcon = styled.span`
  float: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-height: ${({ active }) => (active ? '500px' : '0')};
  overflow: hidden;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

const FAQ = ({ show, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Next.js, Node.js, Python and AI related technologies.',
    },
    {
      question: 'How do you approach problem-solving in your projects?',
      answer: 'I approach problem-solving by first understanding the requirements and constraints of the project.',
    },
    {
      question: 'How do you handle project communication and collaboration?',
      answer: 'I believe in clear and consistent communication. I typically use email, Slack, and video calls to keep clients informed throughout the project.', 
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'The project timeline can vary depending on the scope and complexity of the project. However, I typically provide an estimated timeline after discussing the project requirements with the client.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'My pricing structure is flexible and can be based on the project scope, complexity, and timeline. I typically provide a detailed quote after discussing the project requirements with the client.'
    },
    {
      question: 'Do you offer post-project support?',
      answer: 'Yes, I offer post-project support to ensure that the client is satisfied with the final product and to address any issues that may arise after the project is completed.'
    },
    {
      question: 'Can you provide references or examples of your previous work?',
      answer: 'Yes, I can provide references and examples of my previous work upon request. Please feel free to ask for any specific projects or technologies you are interested in.'
    },
    {
      question: 'How do you stay updated with the latest technologies and industry trends?',
      answer: 'I stay updated with the latest technologies and industry trends by regularly reading tech blogs, attending webinars and conferences, and participating in online communities related to software development and AI.'
    },
    {
      question: 'What is your availability for new projects?',
      answer: 'I am currently available for new projects. Please feel free to reach out to discuss your project requirements and timeline.'
    },
    {
      question: 'How do you ensure the quality of your work?',
      answer: 'I ensure the quality of your work by following best practices in software development, conducting thorough testing, and seeking feedback from clients throughout the development process.'
    }
  ];

  return (
    <FAQContainer show={show}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)} active={activeIndex === index}>
            {faq.question}
            <ToggleIcon>{activeIndex === index ? '−' : '+'}</ToggleIcon>
          </Question>
          <Answer active={activeIndex === index}>
            {faq.answer}
          </Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
