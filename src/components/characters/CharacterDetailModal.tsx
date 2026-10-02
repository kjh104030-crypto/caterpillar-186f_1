import React, { useState } from 'react';
import { X, Copy, Check, Zap, FileText, ShieldAlert, Activity, ClipboardCheck, Award } from 'lucide-react';
import { CharacterArchiveItem } from '../../types/lore';

interface CharacterDetailModalProps {
  character: CharacterArchiveItem;
  onClose: () => void;
}

export const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({ character, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyTemplateJson = () => {
    navigator.clipboard.writeText(JSON.stringify(character, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f131a] border-2 border-cyan-500/80 w-full max-w-3xl max-h-[90vh] overflow-y-auto cut-corner-br p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>CONFIDENTIAL_DOSSIER // {character.id}</span>
              <span>·</span>
              <span>LVL.{character.securityClearance} CLEARANCE</span>
              {character.status && (
                <>
                  <span>·</span>
                  <span className="text-emerald-400 font-bold">{character.status}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1 glitch-text">
              {character.codeName}
            </h2>
            <div className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-2">
              <span className="text-cyan-300 font-bold">{character.name}</span>
              <span>·</span>
              <span>{character.role}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyTemplateJson}
              className="p-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors cut-corner-br cursor-pointer"
              title="JSON 데이터 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-red-400 transition-colors cut-corner-br cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Basic Spec Table & Portrait */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            기본 신상 정보 및 인적 식별 (PROFILE_SPECIFICATION)
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            {character.imageUrl && (
              <div className="sm:w-52 shrink-0 relative bg-black/80 border border-cyan-800/70 cut-corner-br overflow-hidden flex flex-col justify-between group shadow-[0_0_20px_rgba(0,229,255,0.12)]">
                <div className="w-full relative h-64 sm:h-full min-h-[220px]">
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-tactical-grid opacity-15 pointer-events-none" />

                  {/* Optical status badges */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-300 bg-black/80 px-1.5 py-0.5 border border-cyan-900/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    LIVE_CAM
                  </div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-emerald-400 bg-black/80 px-1.5 py-0.5 border border-emerald-900/70">
                    MATCHED
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-center bg-black/80 backdrop-blur-xs border border-slate-800 py-1 px-2 cut-corner-br">
                    <span className="text-xs font-bold text-white font-heading tracking-wide block">
                      {character.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 truncate block">
                      {character.race}{character.subRace && ` (${character.subRace})`}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="p-3 bg-slate-900 border border-slate-800 cut-corner-br">
                <span className="text-slate-500 block text-[10px]">소속 거점/기관</span>
                <span className="text-white font-semibold text-sm">{character.factionName}</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 cut-corner-br">
                <span className="text-slate-500 block text-[10px]">종족 분류</span>
                <span className="text-cyan-400 font-semibold text-sm">
                  {character.race}
                  {character.subRace ? ` (${character.subRace})` : ''}
                </span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 cut-corner-br">
                <span className="text-slate-500 block text-[10px]">성별</span>
                <span className="text-slate-300 font-semibold text-sm">{character.gender}</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 cut-corner-br">
                <span className="text-slate-500 block text-[10px]">붕괴 저항 등급</span>
                <span className="text-amber-400 font-semibold text-sm">{character.collapseTolerance} GRADE</span>
              </div>

              {/* Extended spec fields */}
              {character.height && (
                <div className="p-3 bg-slate-900/90 border border-slate-800 cut-corner-br">
                  <span className="text-slate-500 block text-[10px]">신장 (Height)</span>
                  <span className="text-slate-200 font-semibold text-sm">{character.height}</span>
                </div>
              )}
              {character.birthday && (
                <div className="p-3 bg-slate-900/90 border border-slate-800 cut-corner-br">
                  <span className="text-slate-500 block text-[10px]">생일</span>
                  <span className="text-slate-300 font-medium text-xs truncate" title={character.birthday}>
                    {character.birthday}
                  </span>
                </div>
              )}
              {character.origin && (
                <div className="p-3 bg-slate-900/90 border border-slate-800 cut-corner-br">
                  <span className="text-slate-500 block text-[10px]">출신</span>
                  <span className="text-slate-300 font-medium text-xs truncate" title={character.origin}>
                    {character.origin}
                  </span>
                </div>
              )}
              {character.specialty && (
                <div className="p-3 bg-slate-900/90 border border-slate-800 cut-corner-br col-span-2 sm:col-span-2">
                  <span className="text-slate-500 block text-[10px]">특기</span>
                  <span className="text-emerald-300 font-medium text-xs truncate" title={character.specialty}>
                    {character.specialty}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Orlando Construct Specification */}
        <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-900/60 cut-corner-br space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold font-mono text-cyan-400 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              오를란도 이능력 및 무장 규격 (ORLANDO_SPEC)
            </h4>
            <div className="flex items-center gap-2">
              {character.orlandoWeapon.abilityType && (
                <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-950 text-purple-300 border border-purple-800">
                  계통: {character.orlandoWeapon.abilityType}
                </span>
              )}
              <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-800">
                {character.orlandoWeapon.hasOrlando ? '각성 완료 (AWAKENED)' : '미착용 (UNARMED)'}
              </span>
            </div>
          </div>

          <div className="text-sm font-semibold text-white">
            {character.orlandoWeapon.name}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {character.orlandoWeapon.abilityDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-mono">
            <div className="p-2.5 bg-black/60 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">장착 형상:</span>
              <span className="text-slate-200">{character.orlandoWeapon.manifestationForm}</span>
            </div>
            <div className="p-2.5 bg-black/60 border border-red-900/40">
              <span className="text-red-400 block text-[10px]">공명 경보 주의사항:</span>
              <span className="text-red-200/90">{character.orlandoWeapon.resonanceWarning}</span>
            </div>
          </div>
        </div>

        {/* Physical Assessment Dossier (신체 종합 검사) */}
        {character.physicalExam && (
          <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-900/60 cut-corner-br space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
              <h4 className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                신체 종합 검사 보고서 (PHYSICAL_ASSESSMENT_DOSSIER)
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-700/80 font-bold">
                  종합 판정: {character.physicalExam.overallGrade}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-3 bg-black/60 border border-slate-800 cut-corner-br">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-400">1. 내구력</span>
                  <span className={`font-semibold px-1.5 py-0.5 bg-slate-900 border ${
                    character.physicalExam.durability === '미흡' || character.physicalExam.durability === '부족'
                      ? 'text-amber-400/90 border-amber-900/60'
                      : 'text-cyan-300 border-slate-700'
                  }`}>
                    {character.physicalExam.durability}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className={`h-full ${
                      character.physicalExam.durability === '미흡' || character.physicalExam.durability === '부족'
                        ? 'bg-amber-500'
                        : 'bg-cyan-400'
                    }`} 
                    style={{ 
                      width: character.physicalExam.durability === '우수' 
                        ? '90%' 
                        : character.physicalExam.durability === '양호' 
                        ? '75%' 
                        : character.physicalExam.durability === '표준' 
                        ? '55%' 
                        : '30%' 
                    }} 
                  />
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-slate-800 cut-corner-br">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-400">2. 기동력</span>
                  <span className={`font-semibold px-1.5 py-0.5 bg-slate-900 border ${
                    character.physicalExam.mobility === '부족' || character.physicalExam.mobility === '미흡'
                      ? 'text-amber-400/90 border-amber-900/60'
                      : 'text-emerald-300 border-slate-700'
                  }`}>
                    {character.physicalExam.mobility}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className={`h-full ${
                      character.physicalExam.mobility === '부족' || character.physicalExam.mobility === '미흡'
                        ? 'bg-amber-500'
                        : 'bg-emerald-400'
                    }`} 
                    style={{ 
                      width: character.physicalExam.mobility === '우수' 
                        ? '90%' 
                        : character.physicalExam.mobility === '양호' 
                        ? '75%' 
                        : character.physicalExam.mobility === '표준' 
                        ? '55%' 
                        : '30%' 
                    }} 
                  />
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-slate-800 cut-corner-br">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-400">3. 전술 이해도</span>
                  <span className={`font-semibold px-1.5 py-0.5 bg-slate-900 border ${
                    character.physicalExam.tacticalUnderstanding === '미흡' || character.physicalExam.tacticalUnderstanding === '부족'
                      ? 'text-amber-400/90 border-amber-900/60'
                      : 'text-cyan-300 border-slate-700'
                  }`}>
                    {character.physicalExam.tacticalUnderstanding}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className={`h-full ${
                      character.physicalExam.tacticalUnderstanding === '미흡' || character.physicalExam.tacticalUnderstanding === '부족'
                        ? 'bg-amber-500'
                        : 'bg-cyan-400'
                    }`} 
                    style={{ 
                      width: character.physicalExam.tacticalUnderstanding === '우수' 
                        ? '90%' 
                        : character.physicalExam.tacticalUnderstanding === '양호' 
                        ? '75%' 
                        : character.physicalExam.tacticalUnderstanding === '표준' 
                        ? '55%' 
                        : '30%' 
                    }} 
                  />
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-slate-800 cut-corner-br">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-400">4. 오를란도 활용도</span>
                  <span className={`font-semibold px-1.5 py-0.5 bg-slate-900 border ${
                    character.physicalExam.orlandoProficiency === '미흡' || character.physicalExam.orlandoProficiency === '부족'
                      ? 'text-slate-400 border-slate-700'
                      : 'text-cyan-300 border-slate-700'
                  }`}>
                    {character.physicalExam.orlandoProficiency}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className={`h-full ${
                      character.physicalExam.orlandoProficiency === '미흡' || character.physicalExam.orlandoProficiency === '부족'
                        ? 'bg-slate-600'
                        : 'bg-cyan-400'
                    }`} 
                    style={{ 
                      width: character.physicalExam.orlandoProficiency === '우수' 
                        ? '90%' 
                        : character.physicalExam.orlandoProficiency === '양호' 
                        ? '75%' 
                        : character.physicalExam.orlandoProficiency === '표준' 
                        ? '55%' 
                        : '20%' 
                    }} 
                  />
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-amber-900/50 cut-corner-br">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-amber-200">5. 인내도</span>
                  <span className="text-amber-300 font-semibold px-1.5 py-0.5 bg-amber-950 border border-amber-700">
                    {character.physicalExam.endurance}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mb-1.5 truncate">지속적인 신체 스트레스 저항</div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full" 
                    style={{ 
                      width: character.physicalExam.endurance === '우수' 
                        ? '92%' 
                        : character.physicalExam.endurance === '양호' 
                        ? '75%' 
                        : character.physicalExam.endurance === '표준' 
                        ? '55%' 
                        : '35%' 
                    }} 
                  />
                </div>
              </div>

              <div className="p-3 bg-black/60 border border-amber-900/50 cut-corner-br">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-amber-200">
                    6. {character.physicalExam.specialAbilityName || '특수 - 지형 활용'}
                  </span>
                  <span className="text-amber-300 font-semibold px-1.5 py-0.5 bg-amber-950 border border-amber-700">
                    {character.physicalExam.specialAbilityValue || character.physicalExam.terrainUtilization || '표준'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mb-1.5 truncate">
                  {character.physicalExam.specialAbilityDesc || '고유 특수 역량 및 적성'}
                </div>
                <div className="w-full bg-slate-800 h-1.5 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full" 
                    style={{ 
                      width: (character.physicalExam.specialAbilityValue || character.physicalExam.terrainUtilization) === '우수' 
                        ? '95%' 
                        : (character.physicalExam.specialAbilityValue || character.physicalExam.terrainUtilization) === '양호' 
                        ? '75%' 
                        : (character.physicalExam.specialAbilityValue || character.physicalExam.terrainUtilization)?.includes('표준~양호')
                        ? '68%'
                        : '60%' 
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tactical / Medical Evaluations (소견) */}
        {character.evaluations && character.evaluations.length > 0 && (
          <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/60 cut-corner-br space-y-3">
            <h4 className="text-sm font-bold font-mono text-indigo-400 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              전술 의무관 및 지휘부 소견 (EVALUATION_NOTES)
            </h4>
            <div className="space-y-2">
              {character.evaluations.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-black/50 border border-slate-800/80 cut-corner-br text-xs sm:text-sm text-slate-200 leading-relaxed"
                >
                  <span className="text-indigo-400 font-mono font-bold mt-0.5 shrink-0">[{idx + 1}]</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Biography & Combat Logs Placeholders */}
        <div className="space-y-4">
          <div className="p-4 bg-slate-900/70 border border-slate-800 cut-corner-br">
            <h4 className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              {character.bioTitle || '신상 명세 및 배경 기록 (BIOGRAPHICAL_LOG)'}
            </h4>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-1">
              {character.bioNotes}
            </div>
          </div>

          <div className="p-4 bg-slate-900/70 border border-slate-800 cut-corner-br">
            <h4 className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              작전 수행 및 전술 기록 (COMBAT_RECORD)
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {character.combatLog}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs cut-corner-br transition-colors cursor-pointer"
          >
            닫기 [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
