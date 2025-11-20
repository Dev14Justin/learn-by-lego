"use client";

import { useEffect } from 'react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

// Fonction pour extraire l'ID de la vidéo YouTube
const getYouTubeVideoId = (url: string) => {
  let videoId = '';
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|[^\s]*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match) {
    videoId = match[1];
  }
  return videoId;
};

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  // Gérer la fermeture avec la touche "Echap"
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose} // Fermer en cliquant sur le fond
    >
      <div
        className="bg-background rounded-lg shadow-2xl relative w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur la vidéo
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold z-10"
          aria-label="Fermer la vidéo"
        >
          &times;
        </button>
        <iframe
          src={embedUrl}
          title="Lecteur vidéo YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
