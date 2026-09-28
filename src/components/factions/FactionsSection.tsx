import React, { useState } from 'react';
import { Building2, Wrench, Compass, Radio, Anchor, Pickaxe, Activity } from 'lucide-react';
import { CITIES_DATA } from '../../data/initialLoreData';
import { CityFaction } from '../../types/lore';
import { playTacticalBeep } from '../../utils/sound';
import { OrgProfileCard } from './OrgProfileCard';
import { CityDetailCard } from './CityDetailCard';

export const FactionsSection: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('caherdin');

  const selectedCity: CityFaction = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  const getCityIcon = (id: string) => {
    switch (id) {
      case 'caherdin':
        return Wrench;
      case 'agravain':
        return Building2;
      case 'esperanto':
        return Compass;
      case 'geococcyx':
        return Radio;
      case 'firva':
        return Anchor;
      case 'chinoiserie':
        return Pickaxe;
      default:
        return Building2;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Section Header */}
      <div className="relative border border-slate-800 bg-[#0f131a] p-6 sm:p-8 cut-corner-br bg-tactical-grid">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest text-cyan-400">
          <span className="w-2 h-2 bg-cyan-400 inline-block" />
          <span>FACTION_REGISTRY // ADEM, COASTAL PORTS, ALPINE MINES & OPERATORS</span>
          <span>·</span>
          <span>STATUS: ACTIVE_INTEL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-wide glitch-text">
          주요 세력 및 도시 거점 <span className="text-slate-400 text-xl font-normal">MAJOR FACTIONS & CITADELS</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          오큘러의 창궐과 케루빔 붕괴 재해 속에서 문명을 보존하기 위해 기동하는 거대 이동 도시 플랫폼 ‘아뎀(Adem)’들과 전담 대응 기구(케 에딘, 메네실, 라자로),
          대륙을 누비는 독립 정보 세력 ‘지옵콕스’, 동부 해안의 대표 항만 도시 ‘피르바(사카나)’, 그리고 혹한의 고산 암벽 광산 도시 ‘시누아즈리(요아)’에 대한 아카이브 기록이다.
        </p>
      </div>

      {/* Citadel & Faction Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CITIES_DATA.map((city) => {
          const isSelected = city.id === selectedCityId;
          const CityIcon = getCityIcon(city.id);
          return (
            <button
              key={city.id}
              onClick={() => {
                playTacticalBeep(820, 0.04);
                setSelectedCityId(city.id);
              }}
              className={`text-left p-5 transition-all cut-corner-br cursor-pointer relative group ${
                isSelected
                  ? 'bg-gradient-to-b from-slate-900 to-[#121824] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                  : 'bg-[#0f131a] border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-cyan-400 cut-corner-br" />
              )}
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 cut-corner-br ${isSelected ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                  <CityIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono tracking-wider text-slate-400">
                  {city.threatLevel} CLASS
                </span>
              </div>

              <div className="text-xs font-mono text-cyan-400 tracking-wider">
                {city.nameEn.toUpperCase()}
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                {city.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {city.locationType}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">대응 기관:</span>
                <span className="font-bold text-white font-heading">{city.organization.name}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed City & Defense Organization Dossier Panel */}
      <div className="bg-[#0f131a] border border-slate-800 p-6 sm:p-8 cut-corner-br space-y-8">
        {/* City Profile Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>DOSSIER // {selectedCity.nameEn.toUpperCase()}</span>
              <span>·</span>
              <span>{selectedCity.coordinates}</span>
            </div>
            <h2 className="text-3xl font-bold font-heading text-white mt-1 glitch-hover flex items-center gap-3">
              <span>{selectedCity.name}</span>
              <span className="text-slate-400 text-lg font-mono font-normal">[{selectedCity.locationEn}]</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {selectedCity.description}
            </p>
          </div>

          <div className="px-4 py-3 bg-slate-900 border border-slate-800 cut-corner-br min-w-[200px]">
            <div className="text-[10px] font-mono text-slate-400">전담 방위 격리 등급</div>
            <div className="text-xl font-bold text-cyan-400 font-mono flex items-center gap-2 mt-0.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              LVL.{selectedCity.organization.clearanceLevel} DEFENSE
            </div>
          </div>
        </div>

        {/* 2-Column Split: Demographics & Dedicated Anti-Collapse Org */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Organization Dossier */}
          <div className="space-y-6">
            <OrgProfileCard organization={selectedCity.organization} />
          </div>

          {/* Right Column: Demographics & Geographical Features */}
          <div className="space-y-6">
            <CityDetailCard city={selectedCity} />
          </div>
        </div>
      </div>
    </div>
  );
};
