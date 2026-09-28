import React from 'react';
import { Shield } from 'lucide-react';
import { DefenseOrganization } from '../../types/lore';

interface OrgProfileCardProps {
  organization: DefenseOrganization;
}

export const OrgProfileCard: React.FC<OrgProfileCardProps> = ({ organization }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-900/50 cut-corner-br space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono text-cyan-400 tracking-wider">전담 붕괴 대응 기관</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-800">
          {organization.status}
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-bold font-heading text-white">
          {organization.name}
          <span className="text-slate-400 text-sm font-normal ml-2">
            ({organization.nameEn})
          </span>
        </h3>
        <div className="text-xs text-cyan-300/90 font-mono mt-0.5">
          {organization.role}
        </div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">
        {organization.description}
      </p>

      {/* Sub-Divisions */}
      <div className="pt-4 border-t border-slate-800 space-y-2">
        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <span>작전 편제 분과 (DEPLOYED DIVISIONS):</span>
        </div>
        <div className="space-y-2">
          {organization.divisions.map((div, idx) => (
            <div
              key={idx}
              className="p-2.5 bg-slate-950 border border-slate-800/80 text-xs text-slate-200 flex items-center gap-2 cut-corner-br"
            >
              <span className="text-cyan-400 font-mono text-[11px]">0{idx + 1}.</span>
              <span>{div}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
