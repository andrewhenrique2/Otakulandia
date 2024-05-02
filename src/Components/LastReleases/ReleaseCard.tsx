// ReleaseCard.tsx
import React from "react";
import { ReleaseVideo, LogoImg } from '../LastReleases/LastReleases'; // Importe os estilos necessários

interface ReleaseCardProps {
  title: string;
  imgSrc: string;
  width?: string; 
  height?: string;

}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ title, imgSrc, width = "300px", height = "400px"  }) => (
  <ReleaseVideo style={{ width, height }}> {/* Defina a largura do card */}
    <LogoImg src={imgSrc} alt={`Logo ${title}`} />
    <h1>{title}</h1>
    
  </ReleaseVideo>
);

export default ReleaseCard;
