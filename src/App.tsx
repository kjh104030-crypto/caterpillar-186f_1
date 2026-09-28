import React, { useState, useRef, useEffect } from 'react';
import { WorldSection } from './types/lore';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { FactionsSection } from './components/factions';
import { CharacterArchiveSection } from './components/characters';
import { GlossarySection } from './components/glossary';
import { DataSchemaModal } from './components/DataSchemaModal';
import { TerminalLoadingOverlay } from './components/TerminalLoadingOverlay';
import { isSoundEnabled, setSoundEnabled } from './utils/sound';

export default function App() {
  const [currentSection, setCurrentSection] = useState<WorldSection>('overview');
  const [targetSection, setTargetSection] = useState<WorldSection>('overview');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState(false);
  
  // Transition loading screen toggle state (persisted in localStorage)
  const [transitionLoadingEnabled, setTransitionLoadingEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('caterpillar_transition_loading');
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const timeoutRef = useRef<number | null>(null);

  const handleToggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
  };

  const handleToggleTransitionLoading = () => {
    setTransitionLoadingEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('caterpillar_transition_loading', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSelectSection = (nextSection: WorldSection) => {
    if (nextSection === currentSection && !isLoading) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setTargetSection(nextSection);

    // If loading screen is disabled by user, switch immediately
    if (!transitionLoadingEnabled) {
      setCurrentSection(nextSection);
      setIsLoading(false);
      return;
    }

    // Tactical flickering overlay duration: 420ms for instant responsiveness yet distinct terminal feel
    setIsLoading(true);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentSection(nextSection);
      setIsLoading(false);
    }, 420);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-200 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Tactical Flickering Terminal Loading Overlay */}
      {transitionLoadingEnabled && (
        <TerminalLoadingOverlay
          targetSection={targetSection}
          isVisible={isLoading}
        />
      )}

      {/* Top Navigation Bar */}
      <Header
        currentSection={targetSection}
        onSelectSection={handleSelectSection}
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
        transitionLoadingEnabled={transitionLoadingEnabled}
        onToggleTransitionLoading={handleToggleTransitionLoading}
        onOpenSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentSection === 'overview' && (
          <OverviewSection onNavigateToSection={handleSelectSection} />
        )}

        {currentSection === 'factions' && (
          <FactionsSection />
        )}

        {currentSection === 'characters' && (
          <CharacterArchiveSection />
        )}

        {currentSection === 'glossary' && (
          <GlossarySection />
        )}
      </main>

      {/* Clean, Non-ornamental Footer adhering to anti-slop rules */}
      <footer className="border-t border-slate-800/80 bg-[#090b10] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-slate-300 tracking-wider">
              CATERPILLAR-186f
            </span>
            <span aria-hidden="true">·</span>
            <span>WORLD ARCHIVE DATABASE</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <button
              onClick={() => handleSelectSection('overview')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              세계관 개요
            </button>
            <button
              onClick={() => handleSelectSection('factions')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              주요 세력
            </button>
            <button
              onClick={() => handleSelectSection('characters')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              캐릭터 아카이브
            </button>
            <button
              onClick={() => handleSelectSection('glossary')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              용어 사전
            </button>
          </div>
        </div>
      </footer>

      {/* Data Schema & Template Export Modal */}
      <DataSchemaModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
      />
    </div>
  );
}
