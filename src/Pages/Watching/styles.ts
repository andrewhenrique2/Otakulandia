import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const EpisodeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EpisodeItem = styled.li`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const AnimeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const VideoPlayer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  margin: 0 auto 20px auto;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
