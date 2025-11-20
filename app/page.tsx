"use client";

import { useState, useMemo } from "react";
import LEGOCard from "../components/LEGOCard";
import VideoModal from "../components/VideoModal"; // Importer la modale
import { LEGOsData, type LEGO } from "../data/lego";
import Navbar from "../components/Navbar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<LEGO | null>(null); // État pour la vidéo sélectionnée

  const filteredLEGOs = useMemo(() => {
    let filtered = LEGOsData;

    // Filtrer par recherche
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (lego) =>
          lego.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lego.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery]);

  // Gérer l'ouverture de la modale
  const handleCardClick = (lego: LEGO) => {
    setSelectedVideo(lego);
  };

  // Gérer la fermeture de la modale
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-red-500">Learn By Lego</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn By Lego — apprenez à développer des fonctionnalités pour vos
            projets web et mobile, bloc par bloc, comme on construit un château
            de Lego.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLEGOs.map((lego) => (
              <LEGOCard
                key={lego.id}
                lego={lego}
                onClick={() => handleCardClick(lego)} // Passer le gestionnaire de clic
              />
            ))}
          </div>

          {filteredLEGOs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {" "}
                Aucune vidéo ne correspond à votre recherche.
              </p>
            </div>
          )}
        </section>

        <section className="text-center bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Partagez une vidéo !
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vous avez une astuce ou fonctionnalité à partager ? Transformez-la en bloc de Lego en l&apos;ajoutant.
          </p>
          <a
            href="https://github.com/Dev14Justin/learn-by-lego/blob/main/data/lego.json"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Ajouter une vidéo depuis GitHub
          </a>
        </section>
      </main>

      {/* Afficher la modale si une vidéo est sélectionnée */}
      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo.link} onClose={handleCloseModal} />
      )}

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Fait avec ❤️ par @Justin MONDJI — Learn-By-Lego 🇹🇬
          </p>
        </div>
      </footer>
    </div>
  );
}
