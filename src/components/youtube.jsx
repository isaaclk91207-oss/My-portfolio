import React from 'react';
import styled from 'styled-components';

const YouTubeContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const YouTubeTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const YouTubeSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
`;

const ChannelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const ChannelAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelInfo = styled.div`
  text-align: center;
`;

const ChannelName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ChannelStats = styled.p`
  color: #666;
  font-size: 1rem;
`;

const SubscribeButton = styled.a`
  background-color: #ff0000;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cc0000;
  }
`;


const YouTube = () => {
  return (
    <YouTubeContainer>
      <YouTubeTitle>YouTube Tutorials</YouTubeTitle>
      <YouTubeSubtitle>
        Learn programming and web development through my comprehensive video tutorials
      </YouTubeSubtitle>

      <ChannelHeader>
        <ChannelAvatar 
          src="https://www.image2url.com/r2/default/images/1777784375360-8fb930a7-44b2-4721-bddc-154142b478d6.jpg" 
          alt="Isaac Codes Channel Avatar"
        />
        <ChannelInfo>
          <ChannelName>Isaac Codes</ChannelName>
        </ChannelInfo>
        <SubscribeButton 
          href="https://www.youtube.com/@isaaccodesmm" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Subscribe
        </SubscribeButton>
      </ChannelHeader>
    </YouTubeContainer>
  );
};

export default YouTube;
