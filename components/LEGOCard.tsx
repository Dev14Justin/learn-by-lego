"use client";

import Image from 'next/image';
import { LEGO } from '../data/lego';

interface LEGOCardProps {
  lego: LEGO;
  onClick: (lego: LEGO) => void;
}

// Fonction pour extraire l'ID de la vidéo et générer une URL de miniature
const getYoutubeThumbnail = (url: string) => {
  let videoId = '';
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|[^\s]*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match) {
    videoId = match[1];
  }
  // Retourne une miniature de haute qualité
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export default function LEGOCard({ lego, onClick }: LEGOCardProps) {
  const thumbnailUrl = getYoutubeThumbnail(lego.link);

  return (
    <div
      className="bg-card rounded-lg shadow-lg hover:shadow-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 border border-border cursor-pointer flex flex-col justify-between overflow-hidden"
      onClick={() => onClick(lego)}
    >
      {/* Aperçu de la vidéo */}
      <div className="relative w-full aspect-video">
        <Image
          src={thumbnailUrl}
          alt={`Miniature de la vidéo ${lego.titre}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold leading-6 text-card-foreground">
              {lego.titre}
            </h3>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium flex-shrink-0 ml-2">
              {lego.category}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{lego.description}</p>
        </div>
        
        <div className="flex-grow"></div>

        <div className="flex justify-between items-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
          <div>
            <span className="font-medium">Ajouté par:</span> {lego.author}
          </div>
          <div className="text-xs">
            {new Date(lego.date_added).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
}
