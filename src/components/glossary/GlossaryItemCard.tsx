import React from 'react';
import { Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { GlossaryTerm } from '../../types/lore';
import { playTacticalBeep } from '../../utils/sound';

interface GlossaryItemCardProps {
  term: GlossaryTerm;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectRelated: (termTitle: string) => void;
}

export const GlossaryItemCard: React.FC<GlossaryItemCardProps> = ({
  term,
  isExpanded,
  onToggle,
  onSelectRelated
}) => {
  return (
    <div
      className={`border transition-all cut-corner-br overflow-hidden ${
        isExpanded
          ? 'border-cyan-500/70 bg-[#10151f] shadow-[0_0_20px_rgba(0,229,255,0.08)]'
          : 'border-slate-800 bg-[#0f131a] hover:border-slate-700 hover:bg-slate-900/50'
      }`}
    >
      {/* Term Header Row */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-mono text-xs text-cyan-400 font-semibold px-2 py-0.5 bg-slate-900 border border-slate-800 cut-corner-br">
            {term.code}
          </span>

          <div>
            <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2 glitch-hover">
              <span>{term.title}</span>
              <span className="text-slate-400 text-xs font-mono font-normal">
                [{term.titleEn}]
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
              {term.summary}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 hidden sm:inline">
            {term.category}
          </span>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 ${
              term.dangerLevel === 'CRITICAL'
                ? 'bg-red-950 text-red-300 border border-red-800'
                : term.dangerLevel === 'CAUTION'
                ? 'bg-amber-950 text-amber-300 border border-amber-800'
                : term.dangerLevel === 'RESTRICTED'
                ? 'bg-purple-950 text-purple-300 border border-purple-800'
                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            }`}
          >
            {term.dangerLevel}
          </span>

          <div className="p-1 bg-slate-800 text-slate-400 cut-corner-br">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Term Details */}
      {isExpanded && (
        <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 space-y-4 animate-fadeIn">
          <div className="p-4 bg-slate-900/80 border border-slate-800 cut-corner-br">
            <div className="text-xs font-mono text-slate-500 mb-1">상세 기록 열람 (DETAILED_CONTENT)</div>
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
              {term.content}
            </p>
          </div>

          {/* Related Terms Cross-Links */}
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1">
                <Tag className="w-3 h-3 text-cyan-400" />
                연관 참조 항목:
              </span>
              {term.relatedTerms.map((rt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playTacticalBeep(800, 0.02);
                    onSelectRelated(rt);
                  }}
                  className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-cyan-300 hover:border-cyan-400 hover:text-white cut-corner-br transition-colors cursor-pointer"
                >
                  {rt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
