import React from 'react';
import { Volume2, VolumeX, FileCode2, Loader2, Zap } from 'lucide-react';
import { WorldSection } from '../types/lore';
import { playTabSwitchSound, playTacticalBeep } from '../utils/sound';

interface HeaderProps {
  currentSection: WorldSection;
  onSelectSection: (section: WorldSection) => void;
  soundOn: boolean;
  onToggleSound: () => void;
  transitionLoadingEnabled: boolean;
  onToggleTransitionLoading: () => void;
  onOpenSchemaModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  soundOn,
  onToggleSound,
  transitionLoadingEnabled,
  onToggleTransitionLoading,
  onOpenSchemaModal
}) => {
  const navItems: { id: WorldSection; label: string; code: string }[] = [
    { id: 'overview', label: '세계관 개요', code: '01' },
    { id: 'factions', label: '주요 세력', code: '02' },
    { id: 'characters', label: '캐릭터 아카이브', code: '03' },
    { id: 'glossary', label: '용어 사전', code: '04' }
  ];

  const handleNavClick = (section: WorldSection) => {
    playTabSwitchSound();
    onSelectSection(section);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0e14]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('overview')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-wider font-heading text-white group-hover:text-cyan-400 transition-colors glitch-hover flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-cyan-400 inline-block cut-corner-br" />
            CATERPILLAR-186f
          </span>
        </button>

        {/* Zone 2: 4 nav links, single line */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto py-1 scrollbar-none">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span className="font-mono text-[10px] text-slate-500 mr-1.5 hidden lg:inline">
                  {item.code}.
                </span>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-300 to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          {/* Transition Loading Screen Toggle Button */}
          <button
            onClick={() => {
              playTacticalBeep(transitionLoadingEnabled ? 500 : 800, 0.04);
              onToggleTransitionLoading();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium border transition-all cut-corner-br cursor-pointer whitespace-nowrap ${
              transitionLoadingEnabled
                ? 'bg-cyan-950/50 border-cyan-500/70 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
            }`}
            title={
              transitionLoadingEnabled
                ? '화면 전환 로딩 연출 활성화 상태 (클릭 시 비활성화하여 즉시 전환)'
                : '화면 전환 로딩 연출 비활성화 상태 (클릭 시 터미널 로딩창 활성화)'
            }
            aria-label="화면 전환 로딩창 토글"
          >
            {transitionLoadingEnabled ? (
              <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            ) : (
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span className="hidden sm:inline">
              {transitionLoadingEnabled ? 'LOADING_ON' : 'FAST_TRANS'}
            </span>
          </button>

          <button
            onClick={() => {
              playTacticalBeep(600, 0.05);
              onOpenSchemaModal();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300 transition-colors cut-corner-br cursor-pointer whitespace-nowrap"
            title="데이터 스키마 및 마크다운 템플릿 보기"
          >
            <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">TEMPLATE_DATA</span>
          </button>

          <button
            onClick={() => {
              playTacticalBeep(900, 0.04);
              onToggleSound();
            }}
            className={`p-2 border transition-colors cut-corner-br cursor-pointer ${
              soundOn
                ? 'bg-cyan-950/40 border-cyan-500/60 text-cyan-300'
                : 'bg-slate-900 border-slate-700 text-slate-500 hover:text-slate-300'
            }`}
            title={soundOn ? '전술 사운드 끄기' : '전술 사운드 켜기'}
            aria-label="Toggle tactical sound effects"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
