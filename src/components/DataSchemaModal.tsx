import React, { useState } from 'react';
import { X, Copy, Check, FileText, Code2, Download } from 'lucide-react';
import { CATERPILLAR_INFO, CITIES_DATA, TEMPLATE_CHARACTERS, GLOSSARY_DATA } from '../data/initialLoreData';

interface DataSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataSchemaModal: React.FC<DataSchemaModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'markdown' | 'json'>('markdown');

  if (!isOpen) return null;

  const markdownTemplate = `# [케터펄러-186f] 세계관 설정 템플릿 마크다운

## 1. 세계관 개요 (Caterpillar-186f)
- **지형적 특징**: 안개가 자주 끼며 비 또한 잦음. 안개와 폭우가 짙어질수록 케루빔 활성도 증가. 외지인은 케터펄러에 대해 잘 알지 못함.
- **날씨 및 계절**: 6개월 간격 온난기/한랭기. 계절 전환 10일 과도기 '칸토(Canto)' (새벽 기온 유지).
- **핵심 물질 - 케루빔 (Cherubim)**:
  - 극도로 단단하고 가벼우며 성형이 용이한 만능 금속. 선택적 결정 구조 인력 보유.
  - 주변 금속 흡수 및 경화 (석영-황옥 사이 모스 굳기 7~8 도달 시 포화 상태 유지 및 잉여 분진 방출).
  - **원초 상태 (Raw State)**: 금속을 흡수하기 전 분진 특성이 없는 희귀 상태로 가공에 유리.
  - **분진 (Cherubim Dust)**: 붕괴 유발 원인 물질. 피하조직 침투 전 도려내거나 긁어내야 제거 가능.
  - **문명적 영향**: 산업·무기 체계 개편과 거대 이동 도시(아뎀) 발전 촉발, 재해의 근원이자 의존 자원이라는 양면성.
- **핵심 가공 물질 - 오를란도 (Orlando)**:
  - 원초 상태의 케루빔을 극한으로 가공하여 붕괴 위험을 억제한 착용형 매개체.
  - 형태는 착용자의 무의식이, 능력은 금속이 조성함 (변체·형성·사고 3대 계통군).
  - **공명 법칙 (Law of Resonance)**: 복수 개 동시 착용 및 상호 접촉 절대 금기 (즉각적 불가역 붕괴 유발, 1인 1매개체 원칙).
- **이상 현상**: 붕괴 (생명체 해체 및 재조립), 오큘러, 석호병 (케루빔의 산호/금속 흡수 변이체로 숙주 잠식 및 석호체화)
- **사회 구조 (원주민 이종족)**: 알토/콘트랄토/스마우토 (날개·귀깃), 앤스 (수인), 아페/야레츠/소그 (각인종·분파), 케토 (용인종), 하레 (4완/내성 종족), 피를레크 (산호뿔/비늘꼬리), 혼혈종, 토착 생물

## 2. 주요 세력 및 도시 거점
- **이동 도시 (아뎀, Adem)**: 오큘러를 피해 문명을 보존하기 위해 건조된 50.40~75.40㎢ 규모의 거대 이동 플랫폼 총칭
1. **카헤르딘 (Caherdin)**: 이종족 중심 자립형 이동 도시 / 수리·재활용 인프라 / 재난대응·도시유지 기구: 케 에딘 (Ke Edin)
2. **아그라베인 (Agravain)**: 인간 중심 표준화 대형 이동 도시 / 행정·산업·연구 중심 / 규정·감독 및 표준 대응 기구: 메네실 (Menesil)
3. **에스페란토 (Esperanto)**: 다종족 공존 이동 도시 / 미로형 섹터 구조 / 현장 인명 구조 및 사체 수습 조직: 라자로 (Lazaro)
4. **지옵콕스 (Geococcyx)**: 독립 개조 소형 이동식 섹터 기지 / 대륙 전역 기사·첩보 수집 및 판매 / 사설 정보 언론 세력
5. **피르바 (Firva)**: 동부 해안 항만 도시 / 어업·건어물 특산 / 케루빔 등대 / 치안 및 석호병 방위 자경대: 사카나 (Sakana)
6. **시누아즈리 (Chinoiserie)**: 고산 고립 산악 광산 도시 / 사계절 혹한 / 광업·제조업 / 채굴 및 멀티툴 중장비 길드: 요아 (Yoah)
7. **무크리 (Mukri)**: 평야 거대 방벽 도시 / 오큘러 부산물 무구 공방 및 농업 자급 체계 / 성벽 수호·치안 및 무구 수련단: 고라이 (Gorai)
8. **아헨테 (Ahente)**: 남서부 해안 절벽 도시 / 과수 재배 및 산악 목축 / 비례 건축 및 축제의 도시 / 연안 오큘러 방위대: 슈흘리카 (Shuhlica)
9. **나슈돔 (Nashdom)**: 북부 험지 소형 이동 도시 (50.40㎢) / 대형 무한궤도 / 중심 난방 기둥 / '야성적 고급 판자촌' 건축 / 둔기·관통 붕괴 대응 기관: 프롯스자시트 (Protszasit)

- **붕괴 대응 기관**: 각 도시에 설립된 오큘러 제압·치안 유지·피폭 통제 전문 기구. 도시 자체 창설 기구 외에도 민간 건축사에서 공적으로 정식 임명된 사례(프롯스자시트) 등 다양한 기원 포괄.

## 3. 캐릭터 아카이브 규격 (슬롯 예시)
- **코드네임**: [입력]
- **소속**: 카헤르딘 / 아그라베인 / 에스페란토 / 지옵콕스 / 피르바 / 시누아즈리 / 무크리 / 아헨테 / 나슈돔 / 기타
- **종족**: 알토 / 스마우토 / 앤스 / 아페 / 야레츠 / 소그 / 케토 / 하레 / 피를레크 / 인간 / 혼혈종
- **오를란도 무장**: [무장명] / [발현 이능력] / [형상] / [공명 주의사항]
- **붕괴 저항 등급**: S / A / B / C / D
- **신상 명세 및 작전 기록**: [입력 대기]

## 4. 경제 및 화폐 체계
- **통칭**: 피크 (Peak) - 도시/국가별 독자 지폐 및 환율 적용 범용 총칭
- **형태**: 케루빔 금속 변질 회피를 위한 비금속성 종이 지폐 및 다층 인쇄 보안 기술 (물물교환 병행)

## 5. 용어 사전 (Glossary)
- 신규 용어 추가 시: [용어명] / [영문] / [분류] / [위험도] / [정의]`;

  const jsonTemplate = JSON.stringify(
    {
      worldInfo: CATERPILLAR_INFO,
      factions: CITIES_DATA,
      sampleOperators: TEMPLATE_CHARACTERS,
      glossary: GLOSSARY_DATA
    },
    null,
    2
  );

  const handleCopy = (type: 'markdown' | 'json') => {
    const text = type === 'markdown' ? markdownTemplate : jsonTemplate;
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleDownload = () => {
    const text = viewMode === 'markdown' ? markdownTemplate : jsonTemplate;
    const filename = viewMode === 'markdown' ? 'caterpillar_186f_template.md' : 'caterpillar_186f_data.json';
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f131a] border-2 border-cyan-500/80 w-full max-w-4xl max-h-[90vh] overflow-hidden cut-corner-br flex flex-col shadow-[0_0_40px_rgba(0,229,255,0.2)]">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-400">DATA_ARCHIVE // SCHEMA_EXPORT</span>
            <h3 className="text-xl font-bold font-heading text-white">
              세계관 설정 템플릿 및 데이터 스키마
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(viewMode)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 font-mono text-xs cut-corner-br transition-colors cursor-pointer"
            >
              {copiedType === viewMode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedType === viewMode ? '복사됨!' : '클립보드 복사'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 font-mono text-xs cut-corner-br transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>파일 다운로드</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-slate-900 border border-slate-700 text-slate-400 hover:text-white cut-corner-br cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="px-6 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setViewMode('markdown')}
            className={`px-3 py-1 cut-corner-br cursor-pointer ${
              viewMode === 'markdown' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Markdown 포맷 (.md)
          </button>
          <button
            onClick={() => setViewMode('json')}
            className={`px-3 py-1 cut-corner-br cursor-pointer ${
              viewMode === 'json' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            JSON 데이터 구조 (.json)
          </button>
        </div>

        {/* Body Viewer */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-slate-300 bg-slate-950 flex-1 leading-relaxed">
          <pre className="whitespace-pre-wrap select-all">
            {viewMode === 'markdown' ? markdownTemplate : jsonTemplate}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
          <span>케터펄러-186f 아카이브 데이터 구조</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white cut-corner-br cursor-pointer"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
