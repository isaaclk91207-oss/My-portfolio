import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SocialLinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const NeedHelpLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting'); // Set status to submitting

    try {
      const response = await fetch('https://formspree.io/f/xkoqvrpr', { // Replace with your Formspree endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      {formStatus === 'success' && (
        <p style={{ color: 'green' }}>Thank you for your message! I'll get back to you soon.</p>
      )}
      {formStatus === 'error' && (
        <p style={{ color: 'red' }}>There was an error submitting your message. Please try again.</p>
      )}
      {formStatus === 'submitting' && (
        <p>Submitting...</p>
      )}
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormTextarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <FormButton type="submit" disabled={formStatus === 'submitting'}>
          {formStatus === 'submitting' ? 'Submitting...' : 'Send Message'}
        </FormButton>
      </ContactForm>
      <NeedHelpLink href="mailto: isaaclk99@gmail.com">Need Help? Contact Me</NeedHelpLink>

      <SocialLinksContainer>
        <SocialLink href="https://www.linkedin.com/in/isaaclk99/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/isaaclk91207-oss" target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
        <SocialLink href="https://line.me/ti/p/8y8vDx82wU" target="_blank" rel="noopener noreferrer">
          Line
        </SocialLink>
        <SocialLink href="https://t.me/Isaac_lk12" target="_blank" rel="noopener noreferrer">
          Telegram
        </SocialLink>
        <SocialLink href="https://www.facebook.com/share/18Gnb3RcA8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          Facebook
        </SocialLink>
        {/* Add more social media links as needed */}
      </SocialLinksContainer>
    </ContactContainer>
  );
};

export default Contact;