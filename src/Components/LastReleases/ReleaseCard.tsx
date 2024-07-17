import React from "react";
import { ReleaseVideo, LogoImg } from '../LastReleases/LastReleases';

interface ReleaseCardProps {
  title: string;
  imgSrc: string;
  width?: string; 
  height?: string;
  onDelete?: () => void;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ title, imgSrc, width = "300px", height = "400px", onDelete }) => (
  <ReleaseVideo style={{ width, height }}>
    <LogoImg src={imgSrc} alt={`Logo ${title}`} />
    <h1>{title}</h1>
    {onDelete && (
      <button 
        onClick={onDelete} 
        style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Remover
      </button>
    )}
  </ReleaseVideo>
);

export default ReleaseCard;
