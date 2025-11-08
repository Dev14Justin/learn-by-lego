'use client';

import { useState, useMemo } from 'react';
import LEGOCard from '../components/LEGOCard';

import { LEGOsData, type LEGO } from '../data/lego';
import Navbar from '../components/Navbar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLEGOs = useMemo(() => {
    let filtered = LEGOsData;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(lego =>
        lego.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lego.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lego.utilisation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }



    return filtered;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-red-500">Learn Lego Lab</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            earnLegoLab — apprenez à développer des fonctionnalités pour vos projets web et mobile, bloc par bloc, comme on construit un château de Lego.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLEGOs.map(lego => (
              <LEGOCard key={lego.id} lego={lego} />
            ))}
          </div>

          {filteredLEGOs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg"> Aucune IA ne correspond à votre recherche.</p>
            </div>
          )}
        </section>

        <section className="text-center bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Partagez un outil IA !
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vous utilisez une IA qui n&apos;est pas dans la liste ? Contribuez à la plateforme en l&apos;ajoutant.
          </p>
          <a
            href="https://github.com/Donchaminade/ai228-hub/blob/master/data/ai.json"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Ajouter une IA sur GitHub
          </a>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Fait avec ❤️ par @Justin MONDJI — Learn-Lego-Lab 🇹🇬
          </p>
        </div>
      </footer>
    </div>
  );
}