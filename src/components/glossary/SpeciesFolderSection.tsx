import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  ChevronRight, 
  GitFork, 
  Layers, 
  Tag, 
  Info,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GlossaryTerm } from '../../types/lore';
import { GlossaryItemCard } from './GlossaryItemCard';
import { playTacticalBeep } from '../../utils/sound';

interface SpeciesFolderSectionProps {
  terms: GlossaryTerm[];
  expandedTermId: string | null;
  onToggleTerm: (id: string) => void;
  onSelectRelated: (term: string) => void;
}

export const SpeciesFolderSection: React.FC<SpeciesFolderSectionProps> = ({
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
    <div className="border border-cyan-800/60 bg-[#0c1017] cut-corner-br overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.06)]">
      {/* Folder Header Bar */}
      <div 
        onClick={toggleFolder}
        className="p-5 bg-gradient-to-r from-slate-900 via-[#101724] to-[#0c1017] border-b border-cyan-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-cyan-950/80 border border-cyan-700/60 text-cyan-400 cut-corner-br group-hover:border-cyan-400 transition-colors">
            {isFolderOpen ? <FolderOpen className="w-5 h-5" /> : <Folder className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 bg-cyan-400 inline-block" />
              <span>CATEGORY_ARCHIVE_DIR // 03</span>
              <span>·</span>
              <span>SPECIES & TAXONOMY</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2.5 mt-0.5">
              <span>원주민 종족 / 지성체 아카이브</span>
              <span className="text-xs font-mono font-normal text-slate-400">
                [INDIGENOUS_RACES_FOLDER]
              </span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 bg-cyan-950 text-cyan-300 border border-cyan-800 cut-corner-br">
            {terms.length}개 세부 종족 색인됨
          </span>
          <div className="p-1.5 bg-slate-800 text-slate-400 group-hover:text-white cut-corner-br transition-colors">
            {isFolderOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Taxonomic Hierarchy Guideline Dossier */}
      <div className="p-5 sm:p-6 bg-slate-950/80 border-b border-slate-800/90 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <GitFork className="w-4 h-4 text-cyan-400" />
          <span className="font-bold tracking-wider">케터펄러 원주민 생물학적 계통 분류 체계 (TAXONOMICAL GUIDE)</span>
        </div>

        <div className="p-4 bg-gradient-to-r from-slate-900 to-[#10141d] border border-cyan-900/40 cut-corner-br space-y-3">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-cyan-300">‘앤스(Ance)’</strong>는 단일 종을 일컫는 이름이 아닌 인간의 ‘태반류’처럼 가장 포괄적인 대분류이며, 그 산하에 <strong className="text-white">아페, 알토(콘트랄토), 케토</strong> 등 다채로운 종족 계통군이 자리 잡고 있다.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            아페, 알토, 케토 등의 각 계통 아래에도 서식 환경과 외형적·생리적 특성에 따라 수많은 세부 소분류 종들이 공존하며 독자적인 문화를 형성하고 있다.
          </p>

          {/* Visual Taxonomy Hierarchy Tree */}
          <div className="pt-2 space-y-2.5 font-mono text-xs">
            {/* Level 1: Ance */}
            <div className="p-3.5 bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-700/50 cut-corner-br flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 bg-cyan-500 text-black font-bold text-[10px] cut-corner-br">
                  광역 대분류
                </span>
                <span className="text-base font-bold text-white font-heading">
                  앤스 (Ance)
                </span>
              </div>
              <div className="text-[11px] text-cyan-300/90 font-sans">
                태반류급 포괄 광역 종족군 (산하의 다양한 계통 및 동물 소분류를 포괄)
              </div>
            </div>

            {/* Level 2: Lineages under Ance */}
            <div className="pl-3 sm:pl-6 border-l-2 border-cyan-500/40 space-y-2">
              <div className="text-[11px] text-cyan-400 flex items-center gap-1.5 font-semibold">
                <span>└─ 앤스 산하 핵심 종족 계통군</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Ape */}
                <div className="p-3 bg-slate-950 border border-slate-800 cut-corner-br space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-emerald-400 font-bold">각인종 계통</span>
                  </div>
                  <div className="text-sm font-bold text-white">아페 (Ape)</div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    신체 각질 뿔 발현군 및 건장한 골격. 하위에 뿔 형상별 다수 소분류 분포.
                  </p>
                </div>

                {/* Alto */}
                <div className="p-3 bg-slate-950 border border-slate-800 cut-corner-br space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-cyan-400 font-bold">유익종 계통 (여성: 콘트랄토)</span>
                  </div>
                  <div className="text-sm font-bold text-white">알토 (Alto)</div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    등 뒤 1~3쌍 날개 보유 유익종군. 날개 깃털/피막 특성에 따른 세부 소분류.
                  </p>
                </div>

                {/* Keto */}
                <div className="p-3 bg-slate-950 border border-slate-800 cut-corner-br space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-purple-400 font-bold">용인종 계통</span>
                  </div>
                  <div className="text-sm font-bold text-white">케토 (Keto)</div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    강인한 타격 파충류 꼬리 및 두부 각질. 꼬리 골격 및 비늘형태별 소분류.
                  </p>
                </div>
              </div>

              {/* Level 3 Notice */}
              <div className="p-2.5 bg-black/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>↳ 각 종족 계통(아페, 알토, 케토 등) 하위에 수많은 생태·외형적 소분류 존재</span>
                <span className="text-cyan-400 font-mono text-[10px]">[SUB-SPECIES VARIANTS]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Terms List inside Folder */}
      {isFolderOpen ? (
        <div className="p-4 sm:p-6 space-y-4 bg-[#0a0d13]">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between px-1">
            <span>폴더 내 보관된 세부 종족 항목 목록:</span>
            <span className="text-[11px] text-cyan-400">FOLDER_TREE // SPECIES</span>
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
        <div className="p-4 text-center text-xs font-mono text-slate-500 bg-[#0a0d13]">
          [폴더 접힘: 클릭하여 종족/생물 {terms.length}개 세부 항목 열람]
        </div>
      )}
    </div>
  );
};
