import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Plus, X } from 'lucide-react';
import { GlossaryCategory, GlossaryTerm } from '../../types/lore';
import { GLOSSARY_DATA } from '../../data/initialLoreData';
import { playTacticalBeep } from '../../utils/sound';
import { GlossaryItemCard } from './GlossaryItemCard';
import { GlossaryAddModal } from './GlossaryAddModal';
import { SpeciesFolderSection } from './SpeciesFolderSection';
import { FaunaFolderSection } from './FaunaFolderSection';

export const GlossarySection: React.FC = () => {
  const [terms, setTerms] = useState<GlossaryTerm[]>(GLOSSARY_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTermId, setExpandedTermId] = useState<string | null>(terms[0]?.id || null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: '전체 항목' },
    { id: '종족/지성체', label: '📁 원주민 종족 / 지성체 (폴더)' },
    { id: '토착 생물', label: '🌿 토착 생물 (폴더)' },
    { id: '물질/기술', label: '물질 / 기술' },
    { id: '이상현상', label: '이상 현상' },
    { id: '도시/기관', label: '도시 / 기관' },
    { id: '기후/지리', label: '기후 / 지리' }
  ];

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesSearch =
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === 'all' || term.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [terms, searchQuery, selectedCategory]);

  // Separate intelligent species terms into dedicated folder bundle
  const speciesTerms = useMemo(() => {
    return filteredTerms.filter((term) => term.category === '종족/지성체');
  }, [filteredTerms]);

  // Separate indigenous fauna/wild creatures terms into dedicated folder bundle
  const faunaTerms = useMemo(() => {
    return filteredTerms.filter((term) => term.category === '토착 생물');
  }, [filteredTerms]);

  // Other regular categories (Materials, Anomalies, Cities, Climate)
  const nonFolderTerms = useMemo(() => {
    return filteredTerms.filter((term) => term.category !== '종족/지성체' && term.category !== '토착 생물');
  }, [filteredTerms]);

  const toggleExpand = (id: string) => {
    playTacticalBeep(700, 0.03);
    setExpandedTermId((prev) => (prev === id ? null : id));
  };

  const handleAddTerm = (created: GlossaryTerm) => {
    setTerms([created, ...terms]);
    setExpandedTermId(created.id);
    setIsAddModalOpen(false);
    playTacticalBeep(1000, 0.06);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="relative border border-slate-800 bg-[#0f131a] p-6 sm:p-8 cut-corner-br bg-tactical-grid">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 bg-cyan-400 inline-block" />
              <span>TERMINOLOGY_DICTIONARY // CODEX</span>
              <span>·</span>
              <span>INDEXED_ENTRIES: {terms.length}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-wide glitch-text">
              용어 사전 <span className="text-slate-400 text-xl font-normal">TERMINOLOGY & CODEX</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              케터펄러-186f의 고유 물질(케루빔, 오를란도), 이상 현상(붕괴, 오큘러), 지성 원주민 및 자연 생태계, 도시 기관의
              핵심 개념을 체계화한 사전이다. <strong>‘원주민 종족/지성체’</strong>와 <strong>‘토착 생물’</strong>은 각각 전용 아카이브 폴더로 분리 구성되어 있다.
            </p>
          </div>

          <button
            onClick={() => {
              playTacticalBeep(900, 0.04);
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm font-heading cut-corner-br transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] whitespace-nowrap cursor-pointer self-start lg:self-center"
          >
            <Plus className="w-4 h-4" />
            <span>신규 용어 슬롯 추가</span>
          </button>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-[#0f131a] border border-slate-800 p-5 cut-corner-br space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="용어명, 영문 표기, 식별 코드, 혼혈종, 토착 생물 검색..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 cut-corner-br transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-xs pt-1">
          <span className="text-slate-400 font-mono mr-1 shrink-0">카테고리 필터:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playTacticalBeep(650, 0.02);
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1.5 cut-corner-br transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Glossary Content: Folders First or Filtered */}
      <div className="space-y-6">
        {/* Render Dedicated Intelligent Species Folder when category includes '종족/지성체' or 'all' */}
        {speciesTerms.length > 0 && (
          <SpeciesFolderSection
            terms={speciesTerms}
            expandedTermId={expandedTermId}
            onToggleTerm={toggleExpand}
            onSelectRelated={(related) => setSearchQuery(related)}
          />
        )}

        {/* Render Dedicated Indigenous Fauna Folder when category includes '토착 생물' or 'all' */}
        {faunaTerms.length > 0 && (
          <FaunaFolderSection
            terms={faunaTerms}
            expandedTermId={expandedTermId}
            onToggleTerm={toggleExpand}
            onSelectRelated={(related) => setSearchQuery(related)}
          />
        )}

        {/* Other Regular Categories (Materials, Anomalies, Cities, Climate) */}
        {nonFolderTerms.length > 0 && (
          <div className="space-y-4">
            {selectedCategory === 'all' && (speciesTerms.length > 0 || faunaTerms.length > 0) && (
              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-0.5 bg-slate-600" />
                <span>기타 일반 설정 항목 (MATERIALS, ANOMALIES & ORGANIZATIONS)</span>
                <span className="w-full h-px bg-slate-800" />
              </div>
            )}

            {nonFolderTerms.map((term) => (
              <GlossaryItemCard
                key={term.id}
                term={term}
                isExpanded={expandedTermId === term.id}
                onToggle={() => toggleExpand(term.id)}
                onSelectRelated={(related) => setSearchQuery(related)}
              />
            ))}
          </div>
        )}
      </div>

      {filteredTerms.length === 0 && (
        <div className="p-12 text-center bg-[#0f131a] border border-slate-800 cut-corner-br">
          <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-300 font-heading">검색된 사전 항목이 없습니다</h3>
          <p className="text-xs text-slate-500 mt-1">검색어를 지우거나 다른 카테고리를 선택해 보세요.</p>
        </div>
      )}

      {/* Add New Term Modal */}
      <GlossaryAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTerm}
      />
    </div>
  );
};
