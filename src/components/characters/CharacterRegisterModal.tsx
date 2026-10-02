import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CharacterArchiveItem, FactionCityId, RaceType } from '../../types/lore';

interface CharacterRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (character: CharacterArchiveItem) => void;
}

export const CharacterRegisterModal: React.FC<CharacterRegisterModalProps> = ({
  isOpen,
  onClose,
  onRegister
}) => {
  const [newChar, setNewChar] = useState<Partial<CharacterArchiveItem>>({
    codeName: '',
    name: '',
    factionId: 'caherdin',
    factionName: '카헤르딘',
    race: '알토',
    gender: '미지정',
    role: '',
    orlandoWeapon: {
      hasOrlando: true,
      name: '',
      abilityDescription: '',
      manifestationForm: '',
      resonanceWarning: '단일 장착 유지. 타 오를란도 접촉 시 붕괴 위험'
    },
    collapseTolerance: 'B',
    status: 'ACTIVE',
    securityClearance: 3,
    bioNotes: '',
    combatLog: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChar.codeName) return;

    const created: CharacterArchiveItem = {
      id: `CHAR-CAT-${Date.now().toString().slice(-4)}`,
      codeName: newChar.codeName || 'UNNAMED_OPERATOR',
      name: newChar.name || '미정 인원',
      factionId: (newChar.factionId as FactionCityId) || 'independent',
      factionName:
        newChar.factionId === 'caherdin'
          ? '카헤르딘'
          : newChar.factionId === 'agravain'
          ? '아그라베인'
          : newChar.factionId === 'esperanto'
          ? '에스페란토'
          : newChar.factionId === 'geococcyx'
          ? '지옵콕스'
          : newChar.factionId === 'firva'
          ? '피르바'
          : newChar.factionId === 'chinoiserie'
          ? '시누아즈리'
          : newChar.factionId === 'mukri'
          ? '무크리'
          : newChar.factionId === 'ahente'
          ? '아헨테'
          : newChar.factionId === 'nashdom'
          ? '나슈돔'
          : '소속 미정',
      race: (newChar.race as RaceType) || '기타',
      gender: newChar.gender || '미지정',
      role: newChar.role || '미배정',
      orlandoWeapon: {
        hasOrlando: newChar.orlandoWeapon?.hasOrlando ?? true,
        name: newChar.orlandoWeapon?.name || '오를란도 무장',
        abilityDescription: newChar.orlandoWeapon?.abilityDescription || '발현 이능력 기록 슬롯',
        manifestationForm: newChar.orlandoWeapon?.manifestationForm || '장착 형상 슬롯',
        resonanceWarning: newChar.orlandoWeapon?.resonanceWarning || '공명 위험 방지 수칙 준수 요망'
      },
      collapseTolerance: (newChar.collapseTolerance as 'S' | 'A' | 'B' | 'C' | 'D' | 'UNKNOWN') || 'B',
      status: (newChar.status as 'ACTIVE' | 'MONITORING' | 'RETIRED' | 'MIA' | 'EMPTY_SLOT') || 'ACTIVE',
      securityClearance: (newChar.securityClearance as 1 | 2 | 3 | 4 | 5) || 3,
      bioNotes: newChar.bioNotes || '[기본 프로필 템플릿]',
      combatLog: newChar.combatLog || '[작전 기록 템플릿]'
    };

    onRegister(created);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f131a] border-2 border-cyan-500/80 w-full max-w-2xl max-h-[90vh] overflow-y-auto cut-corner-br p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(0,229,255,0.2)]"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">REGISTER_NEW // OPERATOR_SLOT</span>
            <h3 className="text-xl font-bold font-heading text-white">신규 캐릭터 슬롯 등록</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-400 mb-1">코드네임 *</label>
              <input
                type="text"
                required
                value={newChar.codeName}
                onChange={(e) => setNewChar({ ...newChar, codeName: e.target.value })}
                placeholder="예: SHADOW // 크로우"
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-slate-400 mb-1">본명 / 식별명</label>
              <input
                type="text"
                value={newChar.name}
                onChange={(e) => setNewChar({ ...newChar, name: e.target.value })}
                placeholder="예: 레이나"
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-mono text-slate-400 mb-1">소속 도시</label>
              <select
                value={newChar.factionId}
                onChange={(e) => setNewChar({ ...newChar, factionId: e.target.value as FactionCityId })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              >
                <option value="caherdin">카헤르딘 (케 에딘)</option>
                <option value="agravain">아그라베인 (메네실)</option>
                <option value="esperanto">에스페란토 (라자로)</option>
                <option value="geococcyx">지옵콕스 (독립 이동 기지)</option>
                <option value="firva">피르바 (사카나 자경대)</option>
                <option value="chinoiserie">시누아즈리 (요아 공병단)</option>
                <option value="mukri">무크리 (고라이 방호대)</option>
                <option value="ahente">아헨테 (슈흘리카 방위대)</option>
                <option value="nashdom">나슈돔 (프롯스자시트)</option>
                <option value="independent">소속 미정</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-slate-400 mb-1">종족</label>
              <select
                value={newChar.race}
                onChange={(e) => setNewChar({ ...newChar, race: e.target.value as RaceType })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              >
                <option value="알토">알토 (날개)</option>
                <option value="콘트랄토">콘트랄토 (여성 알토)</option>
                <option value="스마우토">스마우토 (귀깃 날개 알토 분파)</option>
                <option value="앤스">앤스 (수인)</option>
                <option value="아페">아페 (각인종)</option>
                <option value="야레츠">야레츠 (전투 특화 아페 분파)</option>
                <option value="소그">소그 (광산 특화 아페 분파)</option>
                <option value="케토">케토 (용인종)</option>
                <option value="하레">하레 (4완/내성)</option>
                <option value="피를레크">피를레크 (산호뿔/비늘꼬리)</option>
                <option value="인간">인간</option>
                <option value="혼혈종">혼혈종</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-slate-400 mb-1">붕괴 저항 등급</label>
              <select
                value={newChar.collapseTolerance}
                onChange={(e) => setNewChar({ ...newChar, collapseTolerance: e.target.value as 'S' | 'A' | 'B' | 'C' | 'D' | 'UNKNOWN' })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              >
                <option value="S">S 등급 (최상/하레)</option>
                <option value="A">A 등급 (우수)</option>
                <option value="B">B 등급 (보통)</option>
                <option value="C">C 등급 (취약)</option>
                <option value="D">D 등급 (극도로 취약)</option>
                <option value="UNKNOWN">미검측</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-mono text-slate-400 mb-1">담당 보직 및 역할</label>
            <input
              type="text"
              value={newChar.role}
              onChange={(e) => setNewChar({ ...newChar, role: e.target.value })}
              placeholder="예: 해무 고속 요격원, 산악 단애 저지관..."
              className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
            />
          </div>

          {/* Orlando details */}
          <div className="p-4 bg-slate-950 border border-slate-800 cut-corner-br space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-cyan-400 font-bold">오를란도 이능력 설정</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newChar.orlandoWeapon?.hasOrlando}
                  onChange={(e) =>
                    setNewChar({
                      ...newChar,
                      orlandoWeapon: {
                        ...newChar.orlandoWeapon,
                        hasOrlando: e.target.checked
                      }
                    })
                  }
                  className="rounded"
                />
                <span className="text-slate-300">오를란도 장착 여부</span>
              </label>
            </div>

            {newChar.orlandoWeapon?.hasOrlando && (
              <div className="space-y-3">
                <input
                  type="text"
                  value={newChar.orlandoWeapon?.name || ''}
                  onChange={(e) =>
                    setNewChar({
                      ...newChar,
                      orlandoWeapon: {
                        ...newChar.orlandoWeapon,
                        hasOrlando: true,
                        name: e.target.value
                      }
                    })
                  }
                  placeholder="오를란도 무장 명칭 (예: 오를란도: 설격)"
                  className="w-full p-2 bg-slate-900 border border-slate-700 text-white cut-corner-br outline-none"
                />
                <textarea
                  rows={2}
                  value={newChar.orlandoWeapon?.abilityDescription || ''}
                  onChange={(e) =>
                    setNewChar({
                      ...newChar,
                      orlandoWeapon: {
                        ...newChar.orlandoWeapon,
                        hasOrlando: true,
                        abilityDescription: e.target.value
                      }
                    })
                  }
                  placeholder="발현 이능력 설명..."
                  className="w-full p-2 bg-slate-900 border border-slate-700 text-white cut-corner-br outline-none"
                />
              </div>
            )}
          </div>

          {/* Bio notes */}
          <div>
            <label className="block font-mono text-slate-400 mb-1">인물 배경 프로필 (공란 가능)</label>
            <textarea
              rows={3}
              value={newChar.bioNotes}
              onChange={(e) => setNewChar({ ...newChar, bioNotes: e.target.value })}
              placeholder="캐릭터의 출신, 성격, 행동 양식 등을 입력하세요..."
              className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-slate-300 font-mono text-xs cut-corner-br cursor-pointer hover:bg-slate-700"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-heading text-xs cut-corner-br cursor-pointer transition-colors"
          >
            슬롯 추가 및 등록
          </button>
        </div>
      </form>
    </div>
  );
};
