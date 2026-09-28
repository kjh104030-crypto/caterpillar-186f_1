import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  Leaf, 
  AlertTriangle, 
  Eye, 
  Compass,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GlossaryTerm } from '../../types/lore';
import { GlossaryItemCard } from './GlossaryItemCard';
import { playTacticalBeep } from '../../utils/sound';

interface FaunaFolderSectionProps {
  terms: GlossaryTerm[];
  expandedTermId: string | null;
  onToggleTerm: (id: string) => void;
  onSelectRelated: (term: string) => void;
}

export const FaunaFolderSection: React.FC<FaunaFolderSectionProps> = ({
  terms,
  expandedTermId,
  onToggleTerm,
  onSelectRelated
}) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  const toggleFolder = () => {
    playTacticalBeep(750, 0.03);
    setIsFolderOpen((prev) => !prev);
  };

  return (
    <div className="border border-emerald-800/60 bg-[#0a1210] cut-corner-br overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.06)]">
      {/* Folder Header Bar */}
      <div 
        onClick={toggleFolder}
        className="p-5 bg-gradient-to-r from-[#0c1815] via-[#10241e] to-[#0a1210] border-b border-emerald-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 cut-corner-br group-hover:border-emerald-400 transition-colors">
            {isFolderOpen ? <FolderOpen className="w-5 h-5" /> : <Folder className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 inline-block" />
              <span>CATEGORY_ARCHIVE_DIR // 03-B</span>
              <span>·</span>
              <span>INDIGENOUS FAUNA & ECOSYSTEM</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2.5 mt-0.5">
              <span>토착 생물 아카이브</span>
              <span className="text-xs font-mono font-normal text-slate-400">
                [INDIGENOUS_FAUNA_FOLDER]
              </span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 cut-corner-br">
            {terms.length}개 야생 생물 항목 색인됨
          </span>
          <div className="p-1.5 bg-slate-800 text-slate-400 group-hover:text-white cut-corner-br transition-colors">
            {isFolderOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Fauna Ecological Briefing */}
      <div className="p-5 sm:p-6 bg-slate-950/85 border-b border-slate-800/90 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span className="font-bold tracking-wider">케터펄러 야생 자연 동물 생태 지침 (WILD ECOSYSTEM BRIEF)</span>
        </div>

        <div className="p-4 bg-gradient-to-r from-slate-900 to-[#0e1714] border border-emerald-900/40 cut-corner-br space-y-2.5">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-emerald-300">‘토착 생물’</strong>은 지성을 갖추고 문명과 언어를 영위하는 원주민 이종족(알토, 앤스, 아페, 케토, 하레 등)과 달리, 
            케터펄러 자연 야생 생태계를 구성하는 <span className="underline decoration-emerald-400 decoration-1 underline-offset-2">무지성 자연 동물군</span>을 총칭한다.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            상시 폭우와 농무, 고농도 케루빔 분진 환경 속에서 자생하며 야간 시각과 청각이 고도로 발달해 있다. 
            미가공 케루빔에 피폭될 경우 야생 오큘러 변이체로 쉽게 전환되므로 전초 방어선 및 검역국의 상시 감시대상이다.
          </p>

          {/* Tactical Badge Markers */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-black/60 border border-emerald-900/60 cut-corner-br flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">농무 적응 야간 생체 감각</span>
            </div>
            <div className="p-2.5 bg-black/60 border border-amber-900/60 cut-corner-br flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-300">케루빔 축적 시 붕괴 오큘러화 주의</span>
            </div>
            <div className="p-2.5 bg-black/60 border border-cyan-900/60 cut-corner-br flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-300">해무 조류 및 대심도 회유군</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Terms List inside Fauna Folder */}
      {isFolderOpen ? (
        <div className="p-4 sm:p-6 space-y-4 bg-[#080d0b]">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between px-1">
            <span>폴더 내 보관된 야생 생물 항목:</span>
            <span className="text-[11px] text-emerald-400">FOLDER_TREE // FAUNA</span>
          </div>

          <div className="space-y-3">
            {terms.map((term) => (
              <GlossaryItemCard
                key={term.id}
                term={term}
                isExpanded={expandedTermId === term.id}
                onToggle={() => onToggleTerm(term.id)}
                onSelectRelated={onSelectRelated}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 text-center text-xs font-mono text-slate-500 bg-[#080d0b]">
          [폴더 접힘: 클릭하여 토착 생물 {terms.length}개 세부 항목 열람]
        </div>
      )}
    </div>
  );
};
