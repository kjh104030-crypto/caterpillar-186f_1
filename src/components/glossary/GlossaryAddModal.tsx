import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GlossaryCategory, GlossaryTerm } from '../../types/lore';

interface GlossaryAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (term: GlossaryTerm) => void;
}

export const GlossaryAddModal: React.FC<GlossaryAddModalProps> = ({
  isOpen,
  onClose,
  onAdd
}) => {
  const [newTerm, setNewTerm] = useState<Partial<GlossaryTerm>>({
    title: '',
    titleEn: '',
    category: '물질/기술',
    summary: '',
    content: '',
    dangerLevel: 'STABLE',
    relatedTerms: []
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTerm.title) return;

    const created: GlossaryTerm = {
      id: `TERM-CAT-${Date.now().toString().slice(-4)}`,
      code: `DOC-EXT-${Date.now().toString().slice(-2)}`,
      title: newTerm.title,
      titleEn: newTerm.titleEn || 'CUSTOM_TERM',
      category: (newTerm.category as GlossaryCategory) || '물질/기술',
      summary: newTerm.summary || '신규 등록된 용어 요약 슬롯',
      content: newTerm.content || '신규 등록된 용어 상세 설명 내용이다.',
      dangerLevel: (newTerm.dangerLevel as 'STABLE' | 'CAUTION' | 'CRITICAL' | 'RESTRICTED') || 'STABLE',
      relatedTerms: newTerm.relatedTerms || []
    };

    onAdd(created);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f131a] border-2 border-cyan-500/80 w-full max-w-xl max-h-[90vh] overflow-y-auto cut-corner-br p-6 sm:p-8 space-y-5 shadow-[0_0_40px_rgba(0,229,255,0.2)]"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">ADD_ENTRY // CODEX</span>
            <h3 className="text-xl font-bold font-heading text-white">신규 용어 슬롯 추가</h3>
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
              <label className="block font-mono text-slate-400 mb-1">용어명 (한글) *</label>
              <input
                type="text"
                required
                value={newTerm.title}
                onChange={(e) => setNewTerm({ ...newTerm, title: e.target.value })}
                placeholder="예: 케루빔 여과막"
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-slate-400 mb-1">영문 표기</label>
              <input
                type="text"
                value={newTerm.titleEn}
                onChange={(e) => setNewTerm({ ...newTerm, titleEn: e.target.value })}
                placeholder="예: Cherubim Filter Grid"
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-400 mb-1">카테고리</label>
              <select
                value={newTerm.category}
                onChange={(e) => setNewTerm({ ...newTerm, category: e.target.value as GlossaryCategory })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              >
                <option value="종족/지성체">원주민 종족 / 지성체</option>
                <option value="토착 생물">토착 생물 (자연 동물)</option>
                <option value="물질/기술">물질 / 기술</option>
                <option value="이상현상">이상 현상</option>
                <option value="도시/기관">도시 / 기관</option>
                <option value="기후/지리">기후 / 지리</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-slate-400 mb-1">위험/기밀 등급</label>
              <select
                value={newTerm.dangerLevel}
                onChange={(e) => setNewTerm({ ...newTerm, dangerLevel: e.target.value as 'STABLE' | 'CAUTION' | 'CRITICAL' | 'RESTRICTED' })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
              >
                <option value="STABLE">STABLE (안정/일반)</option>
                <option value="CAUTION">CAUTION (주의)</option>
                <option value="CRITICAL">CRITICAL (위험/붕괴)</option>
                <option value="RESTRICTED">RESTRICTED (기밀/통제)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-mono text-slate-400 mb-1">한 줄 요약</label>
            <input
              type="text"
              value={newTerm.summary}
              onChange={(e) => setNewTerm({ ...newTerm, summary: e.target.value })}
              placeholder="용어의 핵심 요약을 입력하세요"
              className="w-full p-2.5 bg-slate-900 border border-slate-700 text-white cut-corner-br focus:border-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-mono text-slate-400 mb-1">상세 설명</label>
            <textarea
              rows={4}
              value={newTerm.content}
              onChange={(e) => setNewTerm({ ...newTerm, content: e.target.value })}
              placeholder="용어에 대한 구체적인 설정 및 배경 설명을 입력하세요..."
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
            사전 항목 추가
          </button>
        </div>
      </form>
    </div>
  );
};
