import React from 'react';
import { Users, Building2 } from 'lucide-react';
import { CityFaction } from '../../types/lore';

interface CityDetailCardProps {
  city: CityFaction;
}

export const CityDetailCard: React.FC<CityDetailCardProps> = ({ city }) => {
  return (
    <div className="space-y-6">
      {/* Demographics Card */}
      <div className="p-6 bg-slate-900/60 border border-slate-800 cut-corner-br space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold font-mono text-white tracking-wider">
            거주민 인구 구성비 (DEMOGRAPHIC BREAKDOWN)
          </h3>
        </div>

        <div className="space-y-3">
          {city.demographics.map((demo, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{demo.race}</span>
                <span className="font-mono text-cyan-400 font-bold">{demo.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-amber-400 transition-all duration-500"
                  style={{ width: `${demo.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographical Advantages Card */}
      <div className="p-6 bg-slate-900/60 border border-slate-800 cut-corner-br space-y-3">
        <h3 className="text-sm font-bold font-mono text-white tracking-wider flex items-center gap-2">
          <Building2 className="w-4 h-4 text-slate-400" />
          도시 방어 지형 특성 (TERRAIN ATTRIBUTES)
        </h3>
        <ul className="space-y-2 text-xs text-slate-300">
          {city.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">▪</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Extension Template Slot */}
      <div className="p-4 border border-dashed border-slate-700 bg-slate-950/40 cut-corner-br text-xs text-slate-400 space-y-1">
        <div className="font-mono text-cyan-400 font-semibold">[FACILITY_EXTENSION_SLOT]</div>
        <p>
          도시별 상세 구획(외벽 방어선, 오를란도 연구 공방, 대피 격벽 등)의 하위 설정 및 사령관 인물 설정을
          추가 배치할 수 있는 모듈형 슬롯이다.
        </p>
      </div>
    </div>
  );
};
