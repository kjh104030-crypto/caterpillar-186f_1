import React, { useEffect, useState } from 'react';
import { WorldSection } from '../types/lore';
import { playTerminalAccessChirp } from '../utils/sound';

interface TerminalLoadingOverlayProps {
  targetSection: WorldSection;
  isVisible: boolean;
}

const SECTION_METADATA: Record<WorldSection, { code: string; labelEn: string; labelKo: string; clearLevel: string }> = {
  overview: {
    code: 'SEC_01_WORLD_ENV',
    labelEn: 'CATERPILLAR // ATMOSPHERIC_SYS',
    labelKo: '세계관 개요 및 환경 데이터 동기화',
    clearLevel: 'LVL.1 PUBLIC_ACCESS'
  },
  factions: {
    code: 'SEC_02_CITADEL_GRID',
    labelEn: 'TRI-CITADEL // DEFENSE_CORPS',
    labelKo: '주요 3대 세력 및 방위 기구 아카이브',
    clearLevel: 'LVL.3 CONFIDENTIAL'
  },
  characters: {
    code: 'SEC_03_OPERATOR_REG',
    labelEn: 'PERSONNEL // ORLANDO_BEARING',
    labelKo: '작전 인원 및 오를란도 적격자 명부',
    clearLevel: 'LVL.4 RESTRICTED'
  },
  glossary: {
    code: 'SEC_04_CODEX_INDEX',
    labelEn: 'CHERUBIM // CORROSION_CODEX',
    labelKo: '케터펄러 고유 물질 및 현상 사전',
    clearLevel: 'LVL.2 ENCRYPTED'
  }
};

export const TerminalLoadingOverlay: React.FC<TerminalLoadingOverlayProps> = ({
  targetSection,
  isVisible
}) => {
  const [dots, setDots] = useState('');
  const [randomHex, setRandomHex] = useState('0x7F...4A');

  const meta = SECTION_METADATA[targetSection];

  useEffect(() => {
    if (!isVisible) return;

    playTerminalAccessChirp();

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
      const hex = '0x' + Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, '0');
      setRandomHex(hex);
    }, 80);

    return () => clearInterval(interval);
  }, [isVisible, targetSection]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070a0f]/90 backdrop-blur-md pointer-events-auto select-none terminal-flicker"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px),
          radial-gradient(ellipse at center, rgba(11, 25, 44, 0.6) 0%, rgba(7, 10, 15, 0.95) 100%)
        `,
        backgroundSize: '24px 24px, 24px 24px, 100% 100%'
      }}
    >
      {/* Horizontal CRT Scanline beam moving down */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-scanline" />

      {/* Screen CRT horizontal line texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.6) 2px, rgba(0, 0, 0, 0.6) 4px)'
        }}
      />

      {/* Center Tactical Terminal Box */}
      <div className="relative w-full max-w-lg mx-4 p-6 sm:p-8 bg-[#0b0f17] border border-cyan-500/70 cut-corner-both shadow-[0_0_50px_rgba(0,229,255,0.25)] space-y-5">
        {/* Top Terminal Bar */}
        <div className="flex items-center justify-between border-b border-cyan-900/60 pb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 animate-ping inline-block" />
            <span className="font-bold tracking-wider font-heading">RHODES_OS // TERMINAL_ACCESS</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[10px]">
            <span>NODE: {randomHex}</span>
            <span className="text-cyan-300 font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-800">
              {meta.clearLevel}
            </span>
          </div>
        </div>

        {/* Tactical Crosshair / Corner markers */}
        <div className="absolute top-2 left-2 text-[8px] font-mono text-cyan-600 select-none">┌ TGT_LOCK</div>
        <div className="absolute top-2 right-2 text-[8px] font-mono text-cyan-600 select-none">SYS_OK ┐</div>
        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-cyan-600 select-none">└ PRT_186F</div>
        <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-600 select-none">AUTH_ACK ┘</div>

        {/* Center Target Info */}
        <div className="space-y-1.5 py-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400/80">
            [ACCESSING_STREAM: {meta.code}]
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-wide glitch-hover">
            {meta.labelEn}
          </div>
          <div className="text-xs text-slate-300 font-sans flex items-center gap-2 pt-1">
            <span className="inline-block w-1.5 h-1.5 bg-amber-400" />
            <span>{meta.labelKo}</span>
          </div>
        </div>

        {/* Progress Bar & Tactical Hex Dump */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyan-400 font-semibold tracking-wider">
              DECRYPTING SECTOR ARCHIVE{dots}
            </span>
            <span className="text-slate-400 font-mono">99.4% VERIFIED</span>
          </div>

          <div className="w-full h-2 bg-slate-900 border border-cyan-900/80 p-0.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-300 animate-pulse transition-all duration-300"
              style={{ width: '100%' }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1">
            <span>MEM: 0x88F2 :: BUS_FREQ: 440MHz</span>
            <span className="text-cyan-300 font-mono">PROTOCOL: CHERUBIM_SHIELD_V4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
