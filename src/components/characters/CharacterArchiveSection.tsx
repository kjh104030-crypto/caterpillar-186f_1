import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  X, 
  Terminal
} from 'lucide-react';
import { CharacterArchiveItem } from '../../types/lore';
import { TEMPLATE_CHARACTERS } from '../../data/initialLoreData';
import { playTacticalBeep } from '../../utils/sound';
import { CharacterCard } from './CharacterCard';
import { CharacterDetailModal } from './CharacterDetailModal';
import { CharacterRegisterModal } from './CharacterRegisterModal';

const OPERATORS_STORAGE_KEY = 'caterpillar_operator_archive_v8';

export const CharacterArchiveSection: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterArchiveItem[]>(() => {
    try {
      const saved = localStorage.getItem(OPERATORS_STORAGE_KEY) || 
                    localStorage.getItem('caterpillar_operator_archive_v7') || 
                    localStorage.getItem('caterpillar_operator_archive_v6') || 
                    localStorage.getItem('caterpillar_operator_archive_v5') || 
                    localStorage.getItem('caterpillar_operator_archive_v4') || 
                    localStorage.getItem('caterpillar_operator_archive_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const yonaTemplate = TEMPLATE_CHARACTERS.find((c) => c.name === '요나');
          const veloxTemplate = TEMPLATE_CHARACTERS.find((c) => c.name === '벨록스');
          const gebelTemplate = TEMPLATE_CHARACTERS.find((c) => c.name === '게벨');
          const phoennonTemplate = TEMPLATE_CHARACTERS.find((c) => c.name === '프에논');
          const elpiusTemplate = TEMPLATE_CHARACTERS.find((c) => c.name === '엘피우스');

          const hasVelox = parsed.some((c: CharacterArchiveItem) => c.name === '벨록스' || c.codeName.includes('벨록스'));
          const hasGebel = parsed.some((c: CharacterArchiveItem) => c.name === '게벨' || c.codeName.includes('게벨'));
          const hasPhoennon = parsed.some((c: CharacterArchiveItem) => c.name === '프에논' || c.codeName.includes('프에논'));
          const hasElpius = parsed.some((c: CharacterArchiveItem) => c.name === '엘피우스' || c.codeName.includes('엘피우스'));

          let updated = parsed.map((c: CharacterArchiveItem) => {
            if (c.name?.includes('요나') || c.id === 'CHAR-CAT-001') {
              return {
                ...c,
                imageUrl: c.imageUrl || (yonaTemplate ? yonaTemplate.imageUrl : TEMPLATE_CHARACTERS[0].imageUrl),
                bioTitle: yonaTemplate?.bioTitle,
                bioNotes: yonaTemplate?.bioNotes || c.bioNotes
              };
            }
            if (c.name === '벨록스' && veloxTemplate) {
              return {
                ...c,
                bioTitle: veloxTemplate.bioTitle,
                bioNotes: veloxTemplate.bioNotes
              };
            }
            if (c.name === '게벨' && gebelTemplate) {
              return {
                ...c,
                ...gebelTemplate
              };
            }
            if (c.name === '프에논' && phoennonTemplate) {
              return {
                ...c,
                ...phoennonTemplate
              };
            }
            if (c.name === '엘피우스' && elpiusTemplate) {
              return {
                ...c,
                ...elpiusTemplate
              };
            }
            return c;
          });

          if (!hasVelox && veloxTemplate) {
            updated = [updated[0], veloxTemplate, ...updated.slice(1)];
          }

          if (!hasGebel && gebelTemplate) {
            const veloxIdx = updated.findIndex((c) => c.name === '벨록스');
            if (veloxIdx !== -1) {
              updated.splice(veloxIdx + 1, 0, gebelTemplate);
            } else {
              updated.push(gebelTemplate);
            }
          }

          if (!hasPhoennon && phoennonTemplate) {
            const gebelIdx = updated.findIndex((c) => c.name === '게벨');
            if (gebelIdx !== -1) {
              updated.splice(gebelIdx + 1, 0, phoennonTemplate);
            } else {
              updated.push(phoennonTemplate);
            }
          }

          if (!hasElpius && elpiusTemplate) {
            const phoennonIdx = updated.findIndex((c) => c.name === '프에논');
            if (phoennonIdx !== -1) {
              updated.splice(phoennonIdx + 1, 0, elpiusTemplate);
            } else {
              updated.push(elpiusTemplate);
            }
          }

          return updated;
        }
      }
    } catch {
      // ignore
    }
    return TEMPLATE_CHARACTERS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(OPERATORS_STORAGE_KEY, JSON.stringify(characters));
    } catch {
      // ignore
    }
  }, [characters]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaction, setSelectedFaction] = useState<string>('all');
  const [selectedRace, setSelectedRace] = useState<string>('all');
  const [selectedOrlando, setSelectedOrlando] = useState<string>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterArchiveItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const factions = [
    { id: 'all', label: '전체 소속' },
    { id: 'caherdin', label: '카헤르딘' },
    { id: 'agravain', label: '아그라베인' },
    { id: 'esperanto', label: '에스페란토' },
    { id: 'geococcyx', label: '지옵콕스' },
    { id: 'firva', label: '피르바' },
    { id: 'chinoiserie', label: '시누아즈리' },
    { id: 'mukri', label: '무크리' },
    { id: 'ahente', label: '아헨테' },
    { id: 'nashdom', label: '나슈돔' },
    { id: 'independent', label: '소속 미정' }
  ];

  const races: { id: string; label: string }[] = [
    { id: 'all', label: '전체 종족' },
    { id: '알토', label: '알토' },
    { id: '스마우토', label: '스마우토' },
    { id: '앤스', label: '앤스' },
    { id: '아페', label: '아페' },
    { id: '야레츠', label: '야레츠' },
    { id: '소그', label: '소그' },
    { id: '케토', label: '케토' },
    { id: '하레', label: '하레' },
    { id: '피를레크', label: '피를레크' },
    { id: '인간', label: '인간' },
    { id: '혼혈종', label: '혼혈종' },
    { id: '기타', label: '기타' }
  ];

  const filteredCharacters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return characters.filter((char) => {
      const matchesSearch =
        !query ||
        char.codeName.toLowerCase().includes(query) ||
        char.name.toLowerCase().includes(query) ||
        char.role.toLowerCase().includes(query) ||
        char.race.toLowerCase().includes(query) ||
        char.subRace?.toLowerCase().includes(query) ||
        char.specialty?.toLowerCase().includes(query) ||
        char.orlandoWeapon.name?.toLowerCase().includes(query) ||
        char.orlandoWeapon.abilityDescription?.toLowerCase().includes(query) ||
        char.evaluations?.some((e) => e.toLowerCase().includes(query)) ||
        char.bioNotes.toLowerCase().includes(query);

      const matchesFaction = selectedFaction === 'all' || char.factionId === selectedFaction;
      const matchesRace =
        selectedRace === 'all' ||
        char.race === selectedRace ||
        char.subRace === selectedRace ||
        (selectedRace === '아페' && (char.race === '아페' || char.race === '야레츠' || char.race === '소그')) ||
        (selectedRace === '알토' && (char.race === '알토' || char.race === '스마우토' || char.race === '콘트랄토'));
      const matchesOrlando =
        selectedOrlando === 'all' ||
        (selectedOrlando === 'equipped' && char.orlandoWeapon.hasOrlando) ||
        (selectedOrlando === 'none' && !char.orlandoWeapon.hasOrlando);

      return matchesSearch && matchesFaction && matchesRace && matchesOrlando;
    });
  }, [characters, searchQuery, selectedFaction, selectedRace, selectedOrlando]);

  const handleAddCharacter = (created: CharacterArchiveItem) => {
    setCharacters([created, ...characters]);
    setIsAddModalOpen(false);
    setSelectedCharacter(created);
    playTacticalBeep(1100, 0.08);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="relative border border-slate-800 bg-[#0f131a] p-6 sm:p-8 cut-corner-br bg-tactical-grid">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 bg-cyan-400 inline-block" />
              <span>PERSONNEL_DATABASE // OPERATOR_ARCHIVE</span>
              <span>·</span>
              <span>TOTAL_SLOTS: {characters.length}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-wide glitch-text">
              캐릭터 아카이브 <span className="text-slate-400 text-xl font-normal">OPERATOR REGISTRY</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              케터펄러-186f의 세력 및 부서별 작전 인원을 등록하고 관리하는 아카이브이다.
              기본 레이아웃 틀이 구축되어 있으며, 필요에 따라 신규 캐릭터 슬롯을 자유롭게 추가하거나 템플릿을 채워 넣을 수 있다.
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
            <span>신규 캐릭터 슬롯 등록</span>
          </button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-[#0f131a] border border-slate-800 p-5 cut-corner-br space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="코드네임, 인물명, 보직, 오를란도 능력 검색..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 cut-corner-br transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="space-y-3 pt-2">
          {/* Faction Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-mono mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3 text-cyan-400" /> 소속:
            </span>
            {factions.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  playTacticalBeep(650, 0.02);
                  setSelectedFaction(f.id);
                }}
                className={`px-2.5 py-1 cut-corner-br transition-colors cursor-pointer ${
                  selectedFaction === f.id
                    ? 'bg-cyan-500 text-black font-semibold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Race Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-mono mr-1 shrink-0">종족:</span>
            {races.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  playTacticalBeep(650, 0.02);
                  setSelectedRace(r.id);
                }}
                className={`px-2.5 py-1 cut-corner-br transition-colors cursor-pointer ${
                  selectedRace === r.id
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Orlando Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-mono mr-1 shrink-0">오를란도:</span>
            {[
              { id: 'all', label: '전체' },
              { id: 'equipped', label: '오를란도 장착자' },
              { id: 'none', label: '미장착/자연내성' }
            ].map((o) => (
              <button
                key={o.id}
                onClick={() => {
                  playTacticalBeep(650, 0.02);
                  setSelectedOrlando(o.id);
                }}
                className={`px-2.5 py-1 cut-corner-br transition-colors cursor-pointer ${
                  selectedOrlando === o.id
                    ? 'bg-slate-200 text-black font-semibold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Operator Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.map((char) => (
          <CharacterCard
            key={char.id}
            char={char}
            onClick={() => setSelectedCharacter(char)}
          />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="p-12 text-center bg-[#0f131a] border border-slate-800 cut-corner-br">
          <Terminal className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-300 font-heading">검색 조건과 일치하는 아카이브 슬롯이 없습니다</h3>
          <p className="text-xs text-slate-500 mt-1">검색어를 초기화하거나 필터를 변경해 보세요.</p>
        </div>
      )}

      {/* Operator Detailed Dossier Modal */}
      {selectedCharacter && (
        <CharacterDetailModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      {/* Add / Register New Slot Modal */}
      <CharacterRegisterModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onRegister={handleAddCharacter}
      />
    </div>
  );
};
