import React from 'react';
import { Zap } from 'lucide-react';
import { CharacterArchiveItem } from '../../types/lore';
import { playTacticalBeep } from '../../utils/sound';

interface CharacterCardProps {
  char: CharacterArchiveItem;
  onClick: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ char, onClick }) => {
  const isSlot = char.status === 'EMPTY_SLOT';

  return (
    <div
      onClick={() => {
        playTacticalBeep(850, 0.03);
        onClick();
      }}
      className={`border p-5 cut-corner-br cursor-pointer transition-all relative group flex flex-col justify-between ${
        isSlot
          ? 'border-dashed border-slate-700 bg-slate-950/40 hover:border-cyan-500/60'
          : 'border-slate-800 bg-[#0f131a] hover:border-cyan-500/70 hover:bg-slate-900/70'
      }`}
    >
      {/* Card Top Strip */}
      <div>
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-cyan-400 inline-block" />
            <span>{char.id}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-1.5 py-0.5 bg-slate-900 border border-slate-800">
              LVL.{char.securityClearance}
            </span>
            <span
              className={`text-[10px] px-1.5 py-0.5 ${
                char.status === 'ACTIVE'
                  ? 'bg-emerald-950 text-emerald-300'
                  : char.status === 'MONITORING'
                  ? 'bg-amber-950 text-amber-300'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {char.status}
            </span>
          </div>
        </div>

        {/* Operator Visual Box */}
        <div className="relative w-full h-44 bg-gradient-to-b from-slate-900 to-black border border-slate-800/80 mb-4 flex items-center justify-center overflow-hidden cut-corner-br group-hover:border-cyan-500/40 transition-colors">
          {char.imageUrl ? (
            <>
              <img
                src={char.imageUrl}
                alt={char.name}
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f131a] via-black/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-tactical-grid opacity-15 pointer-events-none" />
              
              <div className="absolute bottom-2 left-2.5 z-10">
                <span className="text-xs font-bold text-white font-heading tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {char.race}
                  {char.subRace && (
                    <span className="text-cyan-400 font-normal ml-1">
                      ({char.subRace})
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-mono text-slate-300 block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {char.factionName}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />
              <div className="text-center p-3 z-10">
                <div className="text-2xl font-bold font-heading text-slate-300 group-hover:text-cyan-300 transition-colors">
                  {char.race}
                  {char.subRace && (
                    <span className="text-sm font-normal text-cyan-400 block -mt-0.5">
                      ({char.subRace})
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-1">
                  {char.factionName}
                </div>
              </div>
            </>
          )}

          {/* HUD crosshairs & tags */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400/90 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-slate-800">
            [TGT_LOC]
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-cyan-400 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-cyan-900/60">
            RES: {char.collapseTolerance}
          </div>
        </div>

        {/* Code Name & Personal Info */}
        <div>
          <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors glitch-hover">
            {char.codeName}
          </h3>
          <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="font-semibold text-slate-200">{char.name}</span>
            <span>·</span>
            <span className="text-slate-300">{char.role}</span>
            {char.height && (
              <>
                <span>·</span>
                <span className="text-cyan-400 font-mono text-[11px]">{char.height}</span>
              </>
            )}
          </div>
          {char.specialty && (
            <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span className="text-slate-500 font-mono">특기:</span>
              <span className="text-slate-300">{char.specialty}</span>
            </div>
          )}
        </div>

        {/* Orlando Spec Indicator */}
        <div className="mt-4 p-2.5 bg-slate-950 border border-slate-800/90 cut-corner-br text-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
              <Zap className="w-3 h-3 text-cyan-400" />
              오를란도:
            </span>
            <span className={`font-mono text-[11px] ${char.orlandoWeapon.hasOrlando ? 'text-cyan-400' : 'text-slate-500'}`}>
              {char.orlandoWeapon.hasOrlando ? '장착 (Awakened)' : '미장착 (None)'}
            </span>
          </div>
          <div className="text-slate-300 text-[11px] truncate">
            {char.orlandoWeapon.name || '미등록'}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-500">붕괴 저항: <strong className="text-white">{char.collapseTolerance}</strong></span>
        <span className="text-cyan-400 group-hover:underline">DOSSIER_VIEW →</span>
      </div>
    </div>
  );
};
