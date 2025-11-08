"use client";

import { LEGO } from '../data/lego';

interface LEGOCardProps {
  lego: LEGO;
}

export default function LEGOCard({ lego }: LEGOCardProps) {
  const handleCardClick = () => {
    window.open(lego.link, '_blank');
  };

  return (
    <div
      className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 border border-border cursor-pointer flex flex-col justify-between"
      onClick={handleCardClick}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold leading-6 text-card-foreground">
            {lego.name}
          </h3>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
            {lego.category}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">{lego.description}</p>
        <div className="bg-background/50 p-3 rounded-md mb-4">
            <p className="text-sm text-muted-foreground italic">❝ {lego.utilisation} ❞</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
        <div>
          <span className="font-medium">Ajouté par:</span> {lego.author}
        </div>
        <div className="text-xs">
          {new Date(lego.date_added).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
