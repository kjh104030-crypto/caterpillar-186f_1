import React, { useState } from 'react';
import { 
  CloudRain, 
  Compass, 
  Layers, 
  AlertTriangle, 
  Users, 
  ChevronRight, 
  ShieldAlert, 
  Cpu, 
  ThermometerSnowflake, 
  Radio, 
  ExternalLink,
  Info
} from 'lucide-react';
import { CATERPILLAR_INFO } from '../data/initialLoreData';
import { playTacticalBeep } from '../utils/sound';

interface OverviewSectionProps {
  onNavigateToSection: (section: 'overview' | 'factions' | 'characters' | 'glossary') => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigateToSection }) => {
  const [activeTab, setActiveTab] = useState<'geography' | 'climate' | 'materials' | 'anomaly' | 'races'>('geography');

  const tabs = [
    { id: 'geography', label: '지형 및 환경', icon: Compass, code: 'SEC-01' },
    { id: 'climate', label: '기후 및 칸토', icon: ThermometerSnowflake, code: 'SEC-02' },
    { id: 'materials', label: '핵심 물질 (케루빔/오를란도)', icon: Cpu, code: 'SEC-03' },
    { id: 'anomaly', label: '이상 현상 (붕괴/오큘러)', icon: AlertTriangle, code: 'SEC-04' },
    { id: 'races', label: '원주민 이종족 체계', icon: Users, code: 'SEC-05' }
  ] as const;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Tactical Briefing Banner */}
      <div className="relative border border-slate-800 bg-[#0f131a] p-6 sm:p-8 cut-corner-br bg-tactical-grid overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-hazard-stripes-cyan opacity-20 pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest text-cyan-400">
              <span className="w-2 h-2 bg-cyan-400 inline-block" />
              <span>SECTOR_ARCHIVE // 186f</span>
              <span>·</span>
              <span>SECURITY_CLEARANCE: LVL_2</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-wide glitch-text">
              케터펄러-186f <span className="text-slate-400 text-xl font-normal">CATERPILLAR-186f</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              상시 안개와 폭우가 지속되는 미지의 세계. 대기 중 케루빔 입자의 급격한 활성화와 생명체 붕괴 재해에 맞서,
              인간과 원주민 이종족이 3개의 거점 도시를 중심으로 생존을 도모하고 있는 세계관 데이터베이스이다.
            </p>
          </div>

          {/* Tactical Diagnostic Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 bg-slate-900/80 border border-slate-800 cut-corner-br">
              <div className="text-slate-500 text-[10px]">대기 습도 / 농무</div>
              <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                <CloudRain className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                94.8 % (극상)
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 border border-slate-800 cut-corner-br">
              <div className="text-slate-500 text-[10px]">케루빔 활성 지수</div>
              <div className="text-amber-400 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                ACTIVE (변동성)
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 border border-slate-800 cut-corner-br col-span-2 sm:col-span-1">
              <div className="text-slate-500 text-[10px]">현재 계절 주기</div>
              <div className="text-white font-bold text-sm flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                칸토 전환기 (10일)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playTacticalBeep(750, 0.03);
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-all cut-corner-br whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1 py-0.2 ${isActive ? 'bg-black/20 text-black' : 'text-slate-500'}`}>
                {tab.code}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels with Arknights Layout Template */}
      <div className="bg-[#0f131a] border border-slate-800 p-6 sm:p-8 cut-corner-br">
        {/* Tab 1: Geography */}
        {activeTab === 'geography' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">ARCHIVE // SECTION_01</span>
                <h2 className="text-2xl font-bold font-heading text-white glitch-hover">
                  지형적 특징 및 환경 구조
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">FORMAT: DOSSIER_RECORD</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/60 border border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400" />
                    안개와 잦은 폭우 (대기 환경)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {CATERPILLAR_INFO.geography.details}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 border border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400" />
                    기상과 케루빔 활성도의 상관 관계
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {CATERPILLAR_INFO.geography.cherubimCorrelation}. 강수량이 증가하고 짙은 안개가 지표면을 뒤덮을수록
                    대기 중 케루빔 분진 및 금속성 공명이 강화되어 지상 요원들의 접촉 위험이 기하급수적으로 높아진다.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-900/60 border border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400" />
                    지형 스펙트럼 (지표면 구성)
                  </h3>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">01.</span>
                      <span><strong>광활한 평야:</strong> 케터펄러의 기저 지형으로 대부분을 차지하나 짙은 안개로 시계가 극도로 제한됨.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">02.</span>
                      <span><strong>거대한 수림 지대:</strong> 불연속적으로 출현하는 고밀도 수목 지대로 야생 토착 생물의 서식지.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">03.</span>
                      <span><strong>바위 산과 단애:</strong> 거대한 암벽 지대로 오큘러 군집의 우회 경로이자 험준한 지형 장벽을 형성함.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">04.</span>
                      <span><strong>동부 해안과 항만 지대:</strong> 피르바를 중심으로 낮의 무더위와 밤의 격랑이 공존하며, 최근 변이 케루빔에 의한 석호병이 확산되는 연안 수역.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">05.</span>
                      <span><strong>고산 암벽과 광산 지대:</strong> 시누아즈리가 위치한 혹한의 고산 지대로, 오큘러의 접근은 없으나 깊은 고립과 토착 생물과의 영역 분쟁이 상존함.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">06.</span>
                      <span><strong>남서부 해안 단애 및 산악 지대:</strong> 아헨테가 위치한 절벽과 굴곡진 해안선 지대로, 강한 햇빛 속 과수·목축업과 수직 입체 건축 기술 및 연안 오큘러 요격이 전개됨.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">07.</span>
                      <span><strong>북부 거친 설원 및 혹한 험지:</strong> 나슈돔이 초대형 무한궤도로 주파하는 험준한 북방 설원 지대로, 중심 난방 기둥과 강력한 타격·관통 무장을 통한 극한 생존 구역.</span>
                    </li>
                  </ul>
                </div>

                {/* Slot Template Note */}
                <div className="p-3 bg-cyan-950/20 border border-cyan-900/50 text-xs text-cyan-300 flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>설정 확장 슬롯:</strong> 필요에 따라 신규 미탐사 지역(예: 폐허 구역, 심층 균열지 등)을 
                    데이터베이스에 자유롭게 추가할 수 있는 모듈식 레이아웃이다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Climate */}
        {activeTab === 'climate' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">ARCHIVE // SECTION_02</span>
                <h2 className="text-2xl font-bold font-heading text-white glitch-hover">
                  기후 체계 및 '칸토(Canto)' 전환 주기
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">FORMAT: CYCLE_MATRIX</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cold Season */}
              <div className="p-5 bg-slate-900/60 border border-slate-800 cut-corner-br">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-400">CYCLE A // 6 MONTHS</span>
                  <span className="text-xs px-1.5 py-0.5 bg-blue-950 text-blue-300 font-mono">COLD</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">추운 계절 (한랭기)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  눈을 동반하며 쌀쌀하고 건조한 바람이 분다. 대기 온도가 급감하며 케루빔 입자의 대기 중 응결 현상이 관측된다.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                  <div>· 주요 기상: 강설, 한랭 건조풍</div>
                  <div>· 케루빔 변동: 저온 결정화</div>
                </div>
              </div>

              {/* The Canto */}
              <div className="p-5 bg-gradient-to-b from-cyan-950/40 to-slate-900/80 border border-cyan-500/50 cut-corner-br relative">
                <div className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 bg-cyan-500 text-black font-bold">
                  TRANSITION: 10 DAYS
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300">INTER-SEASON // CANTO</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-300 mb-2 glitch-text">'칸토' (Canto)</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  계절과 계절이 교체되는 단 10일간의 과도기. 하루 종일 몽환적이고 차분한 새벽 특유의 기온과 박명 기후가 
                  중단 없이 지속되는 신비로운 현상이다.
                </p>
                <div className="mt-4 pt-3 border-t border-cyan-800/50 text-xs font-mono text-cyan-300/80 space-y-1">
                  <div>· 상태: 새벽 여명 지속</div>
                  <div>· 기온: 안정적 저온 유지</div>
                </div>
              </div>

              {/* Warm Season */}
              <div className="p-5 bg-slate-900/60 border border-slate-800 cut-corner-br">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400">CYCLE B // 6 MONTHS</span>
                  <span className="text-xs px-1.5 py-0.5 bg-amber-950 text-amber-300 font-mono">WARM</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">따뜻한 계절 (온난기)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  갑작스러운 소나기와 잦은 폭우가 내리며 미지근한 대류풍이 분다. 폭우로 인해 케루빔의 활성도가 가장 위험한 수준까지 상승한다.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                  <div>· 주요 기상: 국지성 폭우, 온풍</div>
                  <div>· 케루빔 변동: 활성도 최대치 경보</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Materials */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">ARCHIVE // SECTION_03</span>
                <h2 className="text-2xl font-bold font-heading text-white glitch-hover">
                  핵심 물질 분석: 케루빔 & 오를란도
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">FORMAT: MATERIAL_SPEC</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cherubim Card */}
              <div className="border border-slate-800 bg-slate-900/70 p-6 cut-corner-br space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400">RAW_MINERAL // CHERUBIM</span>
                  <span className="px-2 py-0.5 bg-amber-950/80 text-amber-300 border border-amber-800 text-[10px] font-mono">
                    원형 사용 엄금
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">케루빔 (Cherubim)</h3>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {CATERPILLAR_INFO.coreMaterials.cherubim.characteristics}
                </p>

                {/* Sub Features: Raw State & Dust */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="p-3 bg-black/50 border border-slate-800 cut-corner-br">
                    <span className="font-bold text-cyan-400 font-mono block mb-1">■ 원초 상태 (Raw State)</span>
                    <p className="text-slate-300 leading-relaxed">
                      {CATERPILLAR_INFO.coreMaterials.cherubim.rawState}
                    </p>
                  </div>
                  <div className="p-3 bg-black/50 border border-amber-900/40 cut-corner-br">
                    <span className="font-bold text-amber-400 font-mono block mb-1">■ 분진 특성 및 제거 수칙 (Dust Dynamics)</span>
                    <p className="text-slate-300 leading-relaxed">
                      {CATERPILLAR_INFO.coreMaterials.cherubim.dustCharacteristics}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-950/30 border border-red-900/50 cut-corner-br">
                  <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 mb-1">
                    <ShieldAlert className="w-4 h-4" />
                    붕괴 유발 결함 및 가공 원칙 (CRITICAL_RISK)
                  </div>
                  <p className="text-xs text-red-200/90 leading-relaxed">
                    {CATERPILLAR_INFO.coreMaterials.cherubim.criticalRisk}
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-300 font-mono block mb-1">■ 케루빔의 문명적 영향 (Civilizational Impact)</span>
                  <p className="text-slate-400 leading-relaxed">
                    {CATERPILLAR_INFO.coreMaterials.cherubim.civilizationImpact}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400">
                    경도 한계치: <span className="text-white">모스 7~8 (석영-황옥 포화)</span>
                  </div>
                  <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400">
                    붕괴 도달 시간: <span className="text-amber-400">생체 1~1.5h / 시체 5~10m</span>
                  </div>
                </div>
              </div>

              {/* Orlando Card */}
              <div className="border border-cyan-800/60 bg-gradient-to-b from-cyan-950/20 to-slate-900/80 p-6 cut-corner-br space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">REFINED_RELIC // ORLANDO</span>
                  <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-700 text-[10px] font-mono">
                    단일 장착 한정
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">오를란도 (Orlando)</h3>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {CATERPILLAR_INFO.coreMaterials.orlando.characteristics}
                </p>

                <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 text-xs font-mono text-cyan-200">
                  <span className="text-cyan-400 font-bold">핵심 조성 원리:</span> 형태는 착용자의 무의식이, 능력은 금속이 조성한다.
                </div>

                {/* 3 Ability Categories Grid */}
                <div className="pt-1 space-y-2">
                  <div className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan-400" />
                    <span>ORLANDO_ABILITY_BRANCHES // 3대 이능력 계통군</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    {/* Metamorphosis */}
                    <div className="p-3 bg-slate-950/80 border border-emerald-900/50 cut-corner-br space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 font-mono">01. 변체 (變體)</span>
                        <span className="text-[10px] text-slate-500 font-mono">신체 변형·기능</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        생물체의 신체 기능과 물리적 구조에 직접 작용.
                      </p>
                      <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                        ↳ 소분류: 부위 변형, 신체 강화/약화, 치료/재생
                      </div>
                    </div>

                    {/* Materialization */}
                    <div className="p-3 bg-slate-950/80 border border-cyan-900/50 cut-corner-br space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-400 font-mono">02. 형성 (形成)</span>
                        <span className="text-[10px] text-slate-500 font-mono">물질·에너지 변환</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        금속 흡수 특성을 매개로 흡수된 물질/에너지를 변환.
                      </p>
                      <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                        ↳ 소분류: 물체 형성, 원소 및 에너지 발출
                      </div>
                    </div>

                    {/* Cognition */}
                    <div className="p-3 bg-slate-950/80 border border-purple-900/50 cut-corner-br space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-purple-400 font-mono">03. 사고 (思考)</span>
                        <span className="text-[10px] text-slate-500 font-mono">인지 접촉·교란</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        타 생물의 사고·인지를 접촉, 교란, 변조. 고연산 요구.
                      </p>
                      <div className="text-[10px] text-slate-400 font-mono pt-0.5">
                        ↳ 소분류: 연산 요약(단축), 발현 제약 완화
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-950/30 border border-amber-900/50 cut-corner-br">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    오를란도 공명 붕괴 법칙 (RESONANCE_LAW)
                  </div>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    {CATERPILLAR_INFO.coreMaterials.orlando.criticalRisk}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400">
                    발현 메커니즘: <span className="text-cyan-400">무의식 발현</span>
                  </div>
                  <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400">
                    공명 방지 수칙: <span className="text-cyan-400">착용 전 타물질 보관 격리</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Anomaly */}
        {activeTab === 'anomaly' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-red-400">ALERT // SECTION_04</span>
                <h2 className="text-2xl font-bold font-heading text-white glitch-hover">
                  이상 현상: 붕괴와 오큘러 (Collapse & Ocular)
                </h2>
              </div>
              <span className="text-xs font-mono text-red-500 font-bold">HAZARD_RATING: CRITICAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Collapse */}
              <div className="p-6 bg-slate-900/70 border border-red-900/40 cut-corner-br space-y-3">
                <div className="text-xs font-mono text-red-400">PHENOMENON // 01</div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  붕괴 (Collapse)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {CATERPILLAR_INFO.anomaly.collapse.definition}
                </p>
                <div className="mt-4 p-3 bg-black/40 border border-slate-800 font-mono text-xs space-y-1.5 text-slate-400">
                  <div>· 원인: 미가공 케루빔 장기 접촉 / 복수 오를란도 공명</div>
                  <div>· 도달 시간: 인간 생체 약 1~1.5시간 / 시체 급속 5~10분</div>
                  <div>· 진행 단계: 신체 분해 → 재조립 → 고등 지성 소멸 및 오큘러화</div>
                  <div>· 언어 잔존: 단편적 단어 나열 후 본능적 기괴 발성으로 퇴행</div>
                </div>
              </div>

              {/* Ocular */}
              <div className="p-6 bg-slate-900/70 border border-red-900/40 cut-corner-br space-y-3">
                <div className="text-xs font-mono text-red-400">MUTATED_ENTITY // 02</div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  오큘러 (Ocular)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {CATERPILLAR_INFO.anomaly.ocular.definition}
                </p>
                <div className="mt-4 p-3 bg-black/40 border border-slate-800 font-mono text-xs space-y-1.5 text-slate-400">
                  <div>· 약자성 표피: 지표의 날붙이, 쇳조각 등이 몸에 흡착됨</div>
                  <div>· 행동 양식: 맹목적 공격 본능, 기형적 울음소리 방출</div>
                  <div>· 종족별 편차: 모체 종족(알토, 아페 등)에 따른 신체 기형 차이</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                오큘러 대응을 위해 각 도시는 전담 기관(케 에딘, 메네실, 라자로)을 조직하여 차단 작전을 펼치고 있으며, 독립 세력 지옵콕스가 대륙 전역의 동향을 취재·분석하고 있다.
              </div>
              <button
                onClick={() => onNavigateToSection('factions')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 border border-cyan-800 hover:border-cyan-500 bg-cyan-950/30 cut-corner-br transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>주요 세력 및 아뎀 거점 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 5: Races */}
        {activeTab === 'races' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">ARCHIVE // SECTION_05</span>
                <h2 className="text-2xl font-bold font-heading text-white glitch-hover">
                  사회 구조: 케터펄러 토착 이종족 계보
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500">FORMAT: TAXONOMY_REGISTRY</span>
            </div>

            <p className="text-sm text-slate-300">
              케터펄러-186f에 서식하는 원주민들로, 인간과 유사한 모습과 높은 지성을 지니고 현재 인간과 섞여 살아가고 있다.
              다른 대륙의 종족들과는 차별화된 고유 생리적 특성을 보유한다.
            </p>

            <div className="p-4 bg-gradient-to-r from-slate-900 to-[#10141d] border border-cyan-900/60 cut-corner-br space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 bg-cyan-400" />
                <span>TAXONOMY_NOTE // 원주민 생물학적 계통 체계</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ‘앤스(Ance)’는 인간의 ‘태반류’처럼 가장 포괄적인 대분류이며, 그 산하에 아페, 알토(콘트랄토), 케토 등 다채로운 계통군과 수많은 세부 소분류들이 형성되어 공존하고 있다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Ance */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-amber-400">01. BEASTFOLK</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">수인종 대분류</span>
                </div>
                <h4 className="text-base font-bold text-white">앤스 (Ance)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  인간의 ‘태반류’처럼 전체 이종족 계통을 아우르는 대분류. 산하에 아페, 알토, 케토 등 다양한 계통과 무수한 동물 소분류를 포괄함.
                </p>
              </div>

              {/* Ape */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-emerald-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-emerald-400">02. HORNED</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">각인종</span>
                </div>
                <h4 className="text-base font-bold text-white">아페 (Ape)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  신체 온갖 부위(머리, 팔꿈치, 어깨)에 단단한 뿔이 자라나며, 머리 뿔은 15cm까지 성장. 건장한 체격(남성 187cm)을 지님.
                </p>
              </div>

              {/* Sog */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-amber-400">03. MINING_HORN</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">광산 특화 아페 분파</span>
                </div>
                <h4 className="text-base font-bold text-white">소그 (Sog)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  아페 분파 종족. 체구는 아페보다 작으나(남 173/여 170cm) 극한의 인내도로 장기 근로에 특화됨. 좁은 갱도에 맞게 뿔이 뒤통수 방향으로 누워 자람.
                </p>
              </div>

              {/* Alto */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-cyan-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-cyan-400">04. WINGED</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">여성: 콘트랄토</span>
                </div>
                <h4 className="text-base font-bold text-white">알토 (Alto)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  등에 1~3쌍의 날개가 자라나며 비행 가능. 당황 시 알토 공용어를 무의식적으로 내뱉음. 카헤르딘의 주류 인구.
                </p>
              </div>

              {/* Keto */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-purple-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-purple-400">05. DRACONIC</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">용인종</span>
                </div>
                <h4 className="text-base font-bold text-white">케토 (Keto)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  두부 각질과 무거운 장비도 가볍게 들어 올리는 근육질 파충류 꼬리를 지님. 고유어가 인간의 언어와 매우 유사함.
                </p>
              </div>

              {/* Hare */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-red-400">06. QUAD_ARM</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">내성 종족</span>
                </div>
                <h4 className="text-base font-bold text-white">하레 (Hare)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  네 개의 팔을 가진 종족. 산모의 붕괴 피폭 돌연변이로 태동하여 종족으로 굳어짐. 혼혈종이 많으며 타 종족 대비 붕괴에 대한 내성이 극히 뛰어남.
                </p>
              </div>

              {/* Pirlek */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-sky-400 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-sky-400">07. CORAL_TAIL</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">연안 해양종</span>
                </div>
                <h4 className="text-base font-bold text-white">피를레크 (Pirlek)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  케토와 어패류 앤스의 자손. 산호 뿔, 질긴 푸른 비늘 꼬리, 두꺼운 폐와 넓은 흉골을 지님. 피르바에 다수 거주하나 석호병 내성이 낮음.
                </p>
              </div>

              {/* Hybrids */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 cut-corner-br hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-cyan-300">08. HYBRIDS</span>
                  <span className="text-[10px] px-1.5 bg-slate-800 text-slate-300">융합 혈통</span>
                </div>
                <h4 className="text-base font-bold text-white">혼혈종 (Hybrids)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  인간-이종족, 혹은 서로 다른 이종족 간 결합으로 두 종족의 형질이 융합된 세대. 이동 도시 에스페란토 등에서 치열하게 공존함.
                </p>
              </div>

              {/* Indigenous Fauna */}
              <div className="p-4 bg-slate-900/60 border border-emerald-900/50 cut-corner-br hover:border-emerald-500 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-emerald-400">09. WILD FAUNA</span>
                  <span className="text-[10px] px-1.5 bg-emerald-950 text-emerald-300 border border-emerald-800">무지성 자연 동물</span>
                </div>
                <h4 className="text-base font-bold text-white">토착 생물 (Fauna)</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  지성을 갖춘 이종족과 달리 자연 생태계에 속하는 무지성 야생 동물. 케루빔 노출 시 오큘러로 변이될 위험이 있어 상시 경계함.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
