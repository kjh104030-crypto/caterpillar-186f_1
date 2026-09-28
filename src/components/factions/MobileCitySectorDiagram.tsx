import React, { useState, useRef } from 'react';
import { 
  Building2, 
  Layers, 
  Zap, 
  ShieldAlert, 
  ArrowUpDown, 
  Info, 
  CheckCircle2, 
  ChevronRight,
  Gauge,
  Compass,
  Cpu,
  RefreshCw,
  Box
} from 'lucide-react';
import { playTacticalBeep } from '../../utils/sound';

export type TierType = 'living' | 'support' | 'power' | 'elevator';

export interface SectorItem {
  id: string;
  code: string;
  name: string;
  tier: TierType;
  tierName: string;
  gridX: number; // 0 to 5
  description: string;
  keyFacilities: string[];
  operationalRole: string;
  clearanceLevel: number;
  heightOffset: string;
  citySpecialization: {
    caherdin: string;
    agravain: string;
    esperanto: string;
  };
}

const TIER_DATA = {
  living: {
    id: 'living',
    name: '상층: 생활층',
    nameEn: 'UPPER TIER // LIVING & CIVIC SECTOR',
    color: 'emerald',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    accentColor: '#10b981',
    summary: '주거·상업·행정·의료 시설이 위치한 최상층 안전 생활권.',
    detailedFunction: '지상으로부터 상당히 높은 고도에 위치하여 지표면의 오큘러 침투와 케루빔 분진 위협을 원천적으로 차단한다. 주거 구역, 상업 지구, 종합 행정 관제탑, 종족별 전문 병동이 집중되어 있으며, 사람과 물자의 출입은 각 섹터 가장자리에 설치된 초대형 외곽 엘리베이터를 통해 이루어진다.',
    altitude: '지상 +120m ~ +190m',
    features: ['고지대 오큘러 지상 침투 차단 구조', '시민 거주·상업·교육 행정 인프라 집약', '외곽 대형 승강기 통한 철저한 출입 관제']
  },
  support: {
    id: 'support',
    name: '중층: 지지층',
    nameEn: 'MIDDLE TIER // STRUCTURAL FRAMEWORK & UTILITIES',
    color: 'cyan',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
    accentColor: '#06b6d4',
    summary: '도시 전체 초중량 구조물 지지 및 물류·환기·배전 설비 집중.',
    detailedFunction: '최소 50.40㎢에서 최대 75.40㎢에 달하는 초중량 도시 구조물을 완벽히 지탱하는 고장력 트러스 골격과 내력벽이 격자형으로 배치된 중추 완충층이다. 대규모 물류 배송 레일, 상수도 및 자원 재활용 파이프라인, 전력 배전 그리드, 케루빔 분진 정화 환기구가 집약되어 있으며 위기 시 섹터별 비상 격벽(Bulkhead)을 폐쇄해 오염을 차단한다.',
    altitude: '지상 +50m ~ +120m',
    features: ['초중량 75.4㎢ 플랫폼 지지 고장력 트러스 프레임', '대규모 물류 컨베이어 및 공기·수자원 정화 파이프라인', '섹터별 케루빔 오염 격리 비상 차단벽(Bulkhead)']
  },
  power: {
    id: 'power',
    name: '하층: 동력층',
    nameEn: 'LOWER TIER // PROPULSION & ENERGY GENERATION',
    color: 'amber',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
    accentColor: '#f59e0b',
    summary: '초대형 무한궤도 구동기관 및 터빈 발전·에너지 시설 집중.',
    detailedFunction: '거대한 이동 도시 플랫폼을 기동하고 유지하기 위한 핵심 동력기관이 밀집된 최하단 구동 구역이다. 거대 플랫폼을 지속 전진시키는 초대형 무한궤도(Crawler Tread) 구동축, 대용량 터빈 발전소, 에너지 반응 플랜트가 가동된다. 외부 지면과 직접 맞닿아 있어 외부 정찰·구조대 출격 게이트와 붕괴 대응 화망, 사망자 긴급 수습 격리소가 위치한다.',
    altitude: '지상 0m ~ +50m (구동 궤도 포함)',
    features: ['초대형 크롤러(무한궤도) 추진 드라이브 시스템', '대용량 터빈 발전기 및 에너지 변환 플랜트', '외부 수색 구조대 출격 도크 및 오염 차단 격납고']
  },
  elevator: {
    id: 'elevator',
    name: '외곽 대형 엘리베이터',
    nameEn: 'PERIMETER HEAVY VERTICAL SHAFTS',
    color: 'purple',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    accentColor: '#a855f7',
    summary: '생활층과 지상을 수직으로 연결하는 초대형 물류·인명 승강기.',
    detailedFunction: '생활층이 지상으로부터 120m 이상 높은 위치에 축조되어 있어, 사람과 대규모 물자의 출입은 각 섹터 가장자리에 설치된 초대형 외곽 엘리베이터 샤프트를 통해 이루어진다. 비상시 케루빔 오염이나 오큘러가 상층 생활권으로 침투하지 못하도록 다중 격벽 감압 챔버와 보안 검문 시스템이 작동한다.',
    altitude: '지상 0m ↔ 상층 +190m (전 층위 관통)',
    features: ['대형 산업 화물 및 민간인 수송 고속 승강기', '다중 감압 격리 챔버 및 케루빔 분진 소독 게이트', '비상시 섹터 차단 자동 록다운(Lockdown) 기능']
  }
};

const SECTORS_LIST: SectorItem[] = [
  {
    id: 'SEC-01',
    code: 'SEC-CIV-01',
    name: '중앙 행정 및 종합 사령 섹터',
    tier: 'living',
    tierName: '상층 (생활층)',
    gridX: 0,
    heightOffset: 'top-[8%]',
    description: '도시 전체의 항로 제어, 통신 중계, 아카이브 관리 및 치안을 총괄하는 중앙 통제 본부 구역.',
    keyFacilities: ['중앙 관제탑', '비상 통신 사령부', '자치 행정 의회', '기상 및 케루빔 농무 레이더'],
    operationalRole: '도시 항로 설정, 섹터별 자원 배분 및 전파 통신 관제',
    clearanceLevel: 5,
    citySpecialization: {
      caherdin: '이종족 자치 연합 회의소 및 대양 항로 자동 항법국',
      agravain: '전 영역 표준 규정 제정국 및 중앙 행정 심의 사령부',
      esperanto: '다민족 타협 조정 위원회 및 에스페란토 데 베네프 기념관'
    }
  },
  {
    id: 'SEC-02',
    code: 'SEC-RES-02',
    name: '복합 주거 및 상업 문화 섹터',
    tier: 'living',
    tierName: '상층 (생활층)',
    gridX: 1,
    heightOffset: 'top-[8%]',
    description: '시민들의 주 주거 단지와 생활 상점가, 교육 시설이 밀집한 쾌적한 안전 거주 구역.',
    keyFacilities: ['다층 모듈형 아파트', '실내 중앙 광장 상가', '기초 기술 학술원', '실내 인공 채광 돔'],
    operationalRole: '시민 복지 보장, 일상 상업 유통 및 안정적인 주거권 제공',
    clearanceLevel: 1,
    citySpecialization: {
      caherdin: '종족별 생활 양식을 반영한 개별 주거 블록 및 전통 시장',
      agravain: '규격화된 표준 유닛 주거 단지 및 통일된 공교육 아카데미',
      esperanto: '종족별 환경 수용을 위해 미로처럼 얽힌 다원적 혼합 주거 구역'
    }
  },
  {
    id: 'SEC-03',
    code: 'SEC-MED-03',
    name: '종합 의료 및 생명 안전 섹터',
    tier: 'living',
    tierName: '상층 (생활층)',
    gridX: 2,
    heightOffset: 'top-[8%]',
    description: '붕괴 조기 진단, 이종족 생리학 진료, 오큘러 외상 치료 및 백신을 연구하는 의료 시설군.',
    keyFacilities: ['대규모 종합 의료원', '붕괴 저항 연구소', '무균 격리 병동', '약학 제약 플랜트'],
    operationalRole: '붕괴 증상 억제, 이종족 응급 진료 및 케루빔 해독 연구',
    clearanceLevel: 3,
    citySpecialization: {
      caherdin: '해무 독성 정화 및 이종족 외과 전문 치료소',
      agravain: '표준화된 의료 프로토콜 및 대규모 감염 격리 병동',
      esperanto: '라자로 연동 다종족 특화 생리학·약학 통합 연구소'
    }
  },
  {
    id: 'SEC-04',
    code: 'SEC-LOG-04',
    name: '물류 집하 및 자원 환적 섹터',
    tier: 'support',
    tierName: '중층 (지지층)',
    gridX: 0,
    heightOffset: 'top-[40%]',
    description: '각 섹터와 지상 엘리베이터로부터 인입되는 원자재와 가공 부품을 분류·배송하는 물류 동맥.',
    keyFacilities: ['초고속 자기부상 컨베이어', '자동화 화물 분류 독', '비축 물자 냉동 창고', '중앙 파이프라인 정션'],
    operationalRole: '아뎀 전역 자재 수송 및 위기 대비 전략 비축 물자 관리',
    clearanceLevel: 2,
    citySpecialization: {
      caherdin: '부품 재활용 선별소 및 자립 순환 물류 허브',
      agravain: '바코드 표준 물류 관리 및 규격 부품 중앙 집하장',
      esperanto: '각 종족 생활권 맞춤 특수 화물 배송 터미널'
    }
  },
  {
    id: 'SEC-05',
    code: 'SEC-IND-05',
    name: '정밀 산업 및 구조 정비 섹터',
    tier: 'support',
    tierName: '중층 (지지층)',
    gridX: 1,
    heightOffset: 'top-[40%]',
    description: '도시의 내력 골격을 상시 보수하고, 마모된 부품과 기계 장비를 가공·수리하는 기간 정비 구역.',
    keyFacilities: ['초대형 용접·제련 공장', '트러스 내력벽 점검소', '모듈 교체 크레인 독', '케루빔 차폐 정밀 가공실'],
    operationalRole: '아뎀의 75㎢ 구조물 피로도 감시, 설비 보수 및 자급 부품 생산',
    clearanceLevel: 3,
    citySpecialization: {
      caherdin: '수십 년 된 노후 설비 개조 및 이종족 장인 기술 공방 단지',
      agravain: '표준 규격 부품 대량 정밀 양산 공장 및 호환성 검증소',
      esperanto: '다종족 도구 융합 공작소 및 긴급 방벽 보수반'
    }
  },
  {
    id: 'SEC-06',
    code: 'SEC-AGR-06',
    name: '식량 생산 및 수경 바이오 섹터',
    tier: 'support',
    tierName: '중층 (지지층)',
    gridX: 2,
    heightOffset: 'top-[40%]',
    description: '폐쇄된 이동 환경에서도 전 인구를 먹여 살릴 수 있는 대규모 고효율 수경재배 및 인공 단백질 플랜트.',
    keyFacilities: ['인공 광합성 수경재배 타워', '합성 단백질 배양조', '순환 수자원 여과소', '바이오 폐기물 리사이클러'],
    operationalRole: '도시 자립 식량 생산 및 탄소/산소 대기 순환 보조',
    clearanceLevel: 2,
    citySpecialization: {
      caherdin: '식량 완전 자립을 위한 심해 조류·어류 양식 및 순환 농업 플랜트',
      agravain: '표준 영양 배급제용 규격화된 합성 식량 고속 생산 라인',
      esperanto: '종족별 상이한 식습관을 충족하는 다품종 수경재배 단지'
    }
  },
  {
    id: 'SEC-07',
    code: 'SEC-ENG-07',
    name: '초대형 구동 크롤러 추진 섹터',
    tier: 'power',
    tierName: '하층 (동력층)',
    gridX: 0,
    heightOffset: 'top-[72%]',
    description: '험준한 평야와 황무지를 돌파하며 수만 톤의 아뎀을 이동시키는 초대형 무한궤도 구동계 구역.',
    keyFacilities: ['중합금 크롤러 트레드 휠', '초고출력 감속 기어박스', '유압 서스펜션 실린더', '궤도 긴급 정비 독'],
    operationalRole: '도시 이동 및 지형 돌파, 전복 방지 중량 분산 제어',
    clearanceLevel: 4,
    citySpecialization: {
      caherdin: '해양 부력과 육상 주행을 전환하는 개조 구동 추진계',
      agravain: '규격화된 내구성 검증 크롤러 유닛 및 자동 진단 시스템',
      esperanto: '험지 주행 충격 흡수 서스펜션 및 터널 주파 특화 엔진'
    }
  },
  {
    id: 'SEC-08',
    code: 'SEC-PWR-08',
    name: '원자로 및 터빈 발전 플랜트',
    tier: 'power',
    tierName: '하층 (동력층)',
    gridX: 1,
    heightOffset: 'top-[72%]',
    description: '도시 전체의 생활·산업·구동에 필요한 막대한 에너지를 24시간 안정 공급하는 심장부 발전 구역.',
    keyFacilities: ['고효율 터빈 발전기', '케루빔 촉매 열교환기', '초전도 에너지 저장 뱅크', '비상 예비 발전 코어'],
    operationalRole: '도시 전체 전력 공급, 동력 기관 연료 배분 및 과열 냉각',
    clearanceLevel: 5,
    citySpecialization: {
      caherdin: '자급 순환 지열·증기 하이브리드 발전 코어',
      agravain: '철저한 규정에 따라 이중 안전 제어되는 대용량 발전기',
      esperanto: '다중 연료 복합 연소 시스템 및 비상 지하 전력망'
    }
  },
  {
    id: 'SEC-09',
    code: 'SEC-DEF-09',
    name: '외곽 방어 및 현장 긴급 기동 독',
    tier: 'power',
    tierName: '하층 (동력층)',
    gridX: 2,
    heightOffset: 'top-[72%]',
    description: '지표면 오큘러 요격 화망을 가동하고, 붕괴 대응 기구 대원들이 출격 및 복귀하는 최전선 기지.',
    keyFacilities: ['대(對)오큘러 중포 방어포탑', '긴급 수색 기동정 격납고', '사체 긴급 수습 격리실', '지상 출격 램프 게이트'],
    operationalRole: '오큘러 접근 차단, 고립 민간인 구조 출격 및 급속 사체 수습 소독',
    clearanceLevel: 5,
    citySpecialization: {
      caherdin: '케 에딘 해양·지상 복합 요격 격납고 및 산업 안전 긴급 출동대',
      agravain: '메네실 표준 제압 화포 진지 및 규정 기반 사체 검역소',
      esperanto: '라자로 최전선 인명 수색 구조 도크 및 5분 이내 급속 사체 수습 시설'
    }
  }
];

interface MobileCitySectorDiagramProps {
  currentCityId?: string;
  onSelectCity?: (cityId: string) => void;
}

export const MobileCitySectorDiagram: React.FC<MobileCitySectorDiagramProps> = ({
  currentCityId = 'caherdin',
  onSelectCity
}) => {
  const [activeTierFilter, setActiveTierFilter] = useState<'all' | TierType>('all');
  const [hoveredSectorId, setHoveredSectorId] = useState<string | null>(null);
  const [hoveredTierId, setHoveredTierId] = useState<TierType | null>(null);
  const [selectedSectorId, setSelectedSectorId] = useState<string>('SEC-01');
  const [isCrossSectionView, setIsCrossSectionView] = useState<boolean>(true);

  // Tooltip mouse position tracking
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCityKey = (currentCityId === 'caherdin' || currentCityId === 'agravain' || currentCityId === 'esperanto') 
    ? currentCityId 
    : 'caherdin';

  const selectedSector = SECTORS_LIST.find((s) => s.id === selectedSectorId) || SECTORS_LIST[0];
  const hoveredSector = SECTORS_LIST.find((s) => s.id === hoveredSectorId);
  const activeTooltipTier = hoveredTierId ? TIER_DATA[hoveredTierId] : null;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleSectorHover = (sectorId: string | null, tier: TierType | null) => {
    if (sectorId && sectorId !== hoveredSectorId) {
      playTacticalBeep(920, 0.02);
    }
    setHoveredSectorId(sectorId);
    setHoveredTierId(tier);
  };

  const handleSectorClick = (sectorId: string) => {
    playTacticalBeep(650, 0.05);
    setSelectedSectorId(sectorId);
  };

  const getCityLabel = (key: string) => {
    switch (key) {
      case 'caherdin':
        return '카헤르딘 아뎀 (자립·재활용 특화)';
      case 'agravain':
        return '아그라베인 아뎀 (표준화 행정·연구)';
      case 'esperanto':
        return '에스페란토 아뎀 (다종족 미로형 공존)';
      default:
        return '아뎀 표준 규격';
    }
  };

  return (
    <div className="border border-slate-800 bg-[#0b0e14] cut-corner-br p-5 sm:p-7 relative overflow-hidden space-y-6">
      {/* Background Cyberpunk Tactical Grid & Scanline */}
      <div className="absolute inset-0 bg-tactical-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 inline-block animate-pulse" />
            <span>ADEM_ARCHITECTURE // SCHEMATIC BLUEPRINT</span>
            <span>·</span>
            <span className="text-slate-400">SCALE: 50.40 ~ 75.40 ㎢</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1 flex items-center gap-3">
            <span>이동 도시 섹터 및 3층 구조도</span>
            <span className="text-xs px-2 py-0.5 font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800 cut-corner-br">
              INTERACTIVE HUD
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            각 섹터 구역에 마우스를 올리면 <strong>생활층(상층)</strong>, <strong>지지층(중층)</strong>, <strong>동력층(하층)</strong> 및 
            <strong>외곽 대형 엘리베이터</strong>의 기능과 세부 설비 정보가 툴팁으로 표시된다.
          </p>
        </div>

        {/* City Filter Sync Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400">아뎀 모드:</span>
          {(['caherdin', 'agravain', 'esperanto'] as const).map((cKey) => {
            const isSelected = activeCityKey === cKey;
            const names = { caherdin: '카헤르딘', agravain: '아그라베인', esperanto: '에스페란토' };
            return (
              <button
                key={cKey}
                onClick={() => {
                  playTacticalBeep(780, 0.03);
                  if (onSelectCity) onSelectCity(cKey);
                }}
                className={`px-3 py-1 text-xs font-mono cut-corner-br transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {names[cKey]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Toolbars: Tier Filter Buttons & View Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 text-xs font-mono">
        {/* Tier Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            층위 필터:
          </span>
          <button
            onClick={() => {
              playTacticalBeep(800, 0.02);
              setActiveTierFilter('all');
            }}
            className={`px-2.5 py-1 cut-corner-br transition-colors cursor-pointer ${
              activeTierFilter === 'all'
                ? 'bg-slate-200 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            전체 3층 구조
          </button>
          <button
            onClick={() => {
              playTacticalBeep(850, 0.02);
              setActiveTierFilter('living');
            }}
            className={`px-2.5 py-1 cut-corner-br transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTierFilter === 'living'
                ? 'bg-emerald-500 text-black font-bold'
                : 'bg-slate-900 border border-emerald-900/60 text-emerald-400 hover:bg-emerald-950/40'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            상층: 생활층
          </button>
          <button
            onClick={() => {
              playTacticalBeep(850, 0.02);
              setActiveTierFilter('support');
            }}
            className={`px-2.5 py-1 cut-corner-br transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTierFilter === 'support'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-cyan-900/60 text-cyan-400 hover:bg-cyan-950/40'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            중층: 지지층
          </button>
          <button
            onClick={() => {
              playTacticalBeep(850, 0.02);
              setActiveTierFilter('power');
            }}
            className={`px-2.5 py-1 cut-corner-br transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTierFilter === 'power'
                ? 'bg-amber-500 text-black font-bold'
                : 'bg-slate-900 border border-amber-900/60 text-amber-400 hover:bg-amber-950/40'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            하층: 동력층
          </button>
          <button
            onClick={() => {
              playTacticalBeep(850, 0.02);
              setActiveTierFilter('elevator');
            }}
            className={`px-2.5 py-1 cut-corner-br transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTierFilter === 'elevator'
                ? 'bg-purple-500 text-black font-bold'
                : 'bg-slate-900 border border-purple-900/60 text-purple-400 hover:bg-purple-950/40'
            }`}
          >
            <ArrowUpDown className="w-3 h-3 text-purple-400" />
            외곽 승강기
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-0.5 cut-corner-br">
          <button
            onClick={() => {
              playTacticalBeep(700, 0.02);
              setIsCrossSectionView(true);
            }}
            className={`px-2.5 py-0.5 cut-corner-br transition-colors cursor-pointer ${
              isCrossSectionView ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            입체 수직 단면도
          </button>
          <button
            onClick={() => {
              playTacticalBeep(700, 0.02);
              setIsCrossSectionView(false);
            }}
            className={`px-2.5 py-0.5 cut-corner-br transition-colors cursor-pointer ${
              !isCrossSectionView ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            섹터 평면 매트릭스
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Canvas Area */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative bg-[#07090e] border border-slate-800/90 cut-corner-br p-4 sm:p-6 overflow-hidden min-h-[460px] flex flex-col justify-between"
      >
        {/* Schematic Blueprint Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Status HUD Watermark */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3 z-10 border-b border-slate-900 pb-2">
          <div className="flex items-center gap-3">
            <span>CITY_ARCHETYPE: <span className="text-cyan-400 font-bold">{getCityLabel(activeCityKey)}</span></span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline">VERTICAL_ELEVATION: 190m</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            <span>TELESCOPIC_SCAN: READY</span>
          </div>
        </div>

        {/* View Mode 1: Cross-Sectional Architectural Diagram */}
        {isCrossSectionView ? (
          <div className="relative my-auto py-2 z-10 space-y-4">
            {/* The 3 Tiers Stack with Perimeter Elevators on Both Sides */}
            <div className="grid grid-cols-12 gap-3 items-stretch">
              {/* Left Perimeter Heavy Elevator Shaft */}
              <div 
                onMouseEnter={() => handleSectorHover(null, 'elevator')}
                onMouseLeave={() => handleSectorHover(null, null)}
                className={`col-span-1 border border-purple-500/40 bg-purple-950/20 hover:bg-purple-900/40 transition-all p-2 flex flex-col justify-between items-center cut-corner-br cursor-pointer relative group ${
                  activeTierFilter === 'elevator' ? 'ring-2 ring-purple-400 bg-purple-900/40' : ''
                }`}
              >
                <div className="text-[10px] font-mono text-purple-300 rotate-180 [writing-mode:vertical-rl] tracking-widest text-center py-2">
                  [SHAFT_L // 서측 승강기]
                </div>
                <div className="p-1 bg-purple-900/80 rounded border border-purple-400/50 text-purple-200">
                  <ArrowUpDown className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-mono text-purple-400 text-center">
                  H:190m
                </div>
                <div className="absolute inset-x-0 h-0.5 bg-purple-400/60 top-1/4 animate-bounce" />
              </div>

              {/* Main Center Multi-Tier Platform (3 Tiers: Living, Support, Power) */}
              <div className="col-span-10 space-y-3">
                {/* 1. TIER 1: Upper Living Tier (상층: 생활층) */}
                <div 
                  onMouseEnter={() => handleSectorHover(null, 'living')}
                  onMouseLeave={() => handleSectorHover(null, null)}
                  className={`border transition-all cut-corner-br p-3.5 relative ${
                    activeTierFilter === 'all' || activeTierFilter === 'living'
                      ? 'border-emerald-500/60 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-emerald-950/30'
                      : 'border-slate-800/60 bg-slate-900/20 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 font-mono text-[10px] cut-corner-br font-bold">
                        TIER 01 // 상층: 생활층
                      </span>
                      <span className="text-xs text-slate-300 font-bold font-heading">
                        주거·상업·행정·의료 지구
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/80 hidden sm:inline">
                      고도: +120m ~ +190m (지상 격리 안전고도)
                    </span>
                  </div>

                  {/* 3 Sectors in Living Tier */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {SECTORS_LIST.filter((s) => s.tier === 'living').map((sec) => {
                      const isHovered = hoveredSectorId === sec.id;
                      const isSelected = selectedSectorId === sec.id;
                      return (
                        <div
                          key={sec.id}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            handleSectorHover(sec.id, 'living');
                          }}
                          onMouseLeave={() => handleSectorHover(null, 'living')}
                          onClick={() => handleSectorClick(sec.id)}
                          className={`p-2.5 border transition-all cursor-pointer cut-corner-br relative ${
                            isSelected
                              ? 'border-emerald-400 bg-emerald-900/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                              : isHovered
                              ? 'border-emerald-500 bg-slate-800/90'
                              : 'border-slate-800 bg-[#0d121a] hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                            <span className="text-emerald-400 font-bold">{sec.code}</span>
                            <span>LVL.{sec.clearanceLevel}</span>
                          </div>
                          <div className="text-xs font-bold text-white font-heading truncate">
                            {sec.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {sec.keyFacilities.slice(0, 2).join(' · ')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. TIER 2: Middle Structural Support Tier (중층: 지지층) */}
                <div 
                  onMouseEnter={() => handleSectorHover(null, 'support')}
                  onMouseLeave={() => handleSectorHover(null, null)}
                  className={`border transition-all cut-corner-br p-3.5 relative ${
                    activeTierFilter === 'all' || activeTierFilter === 'support'
                      ? 'border-cyan-500/60 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/30'
                      : 'border-slate-800/60 bg-slate-900/20 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 font-mono text-[10px] cut-corner-br font-bold">
                        TIER 02 // 중층: 지지층
                      </span>
                      <span className="text-xs text-slate-300 font-bold font-heading">
                        고장력 골격·물류·환기·자원 순환망
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80 hidden sm:inline">
                      고도: +50m ~ +120m (초중량 완충 프레임)
                    </span>
                  </div>

                  {/* 3 Sectors in Support Tier */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {SECTORS_LIST.filter((s) => s.tier === 'support').map((sec) => {
                      const isHovered = hoveredSectorId === sec.id;
                      const isSelected = selectedSectorId === sec.id;
                      return (
                        <div
                          key={sec.id}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            handleSectorHover(sec.id, 'support');
                          }}
                          onMouseLeave={() => handleSectorHover(null, 'support')}
                          onClick={() => handleSectorClick(sec.id)}
                          className={`p-2.5 border transition-all cursor-pointer cut-corner-br relative ${
                            isSelected
                              ? 'border-cyan-400 bg-cyan-900/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                              : isHovered
                              ? 'border-cyan-500 bg-slate-800/90'
                              : 'border-slate-800 bg-[#0d121a] hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                            <span className="text-cyan-400 font-bold">{sec.code}</span>
                            <span>LVL.{sec.clearanceLevel}</span>
                          </div>
                          <div className="text-xs font-bold text-white font-heading truncate">
                            {sec.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {sec.keyFacilities.slice(0, 2).join(' · ')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. TIER 3: Lower Power & Propulsion Tier (하층: 동력층) */}
                <div 
                  onMouseEnter={() => handleSectorHover(null, 'power')}
                  onMouseLeave={() => handleSectorHover(null, null)}
                  className={`border transition-all cut-corner-br p-3.5 relative ${
                    activeTierFilter === 'all' || activeTierFilter === 'power'
                      ? 'border-amber-500/60 bg-gradient-to-r from-amber-950/40 via-slate-900/60 to-amber-950/30'
                      : 'border-slate-800/60 bg-slate-900/20 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-400/60 text-amber-300 font-mono text-[10px] cut-corner-br font-bold">
                        TIER 03 // 하층: 동력층
                      </span>
                      <span className="text-xs text-slate-300 font-bold font-heading">
                        초대형 크롤러 추진계 & 원자로 발전 플랜트 & 방어 기지
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400/80 hidden sm:inline">
                      고도: 0m ~ +50m (지표면 맞춤형 중화 구동계)
                    </span>
                  </div>

                  {/* 3 Sectors in Power Tier */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {SECTORS_LIST.filter((s) => s.tier === 'power').map((sec) => {
                      const isHovered = hoveredSectorId === sec.id;
                      const isSelected = selectedSectorId === sec.id;
                      return (
                        <div
                          key={sec.id}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            handleSectorHover(sec.id, 'power');
                          }}
                          onMouseLeave={() => handleSectorHover(null, 'power')}
                          onClick={() => handleSectorClick(sec.id)}
                          className={`p-2.5 border transition-all cursor-pointer cut-corner-br relative ${
                            isSelected
                              ? 'border-amber-400 bg-amber-900/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                              : isHovered
                              ? 'border-amber-500 bg-slate-800/90'
                              : 'border-slate-800 bg-[#0d121a] hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                            <span className="text-amber-400 font-bold">{sec.code}</span>
                            <span>LVL.{sec.clearanceLevel}</span>
                          </div>
                          <div className="text-xs font-bold text-white font-heading truncate">
                            {sec.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {sec.keyFacilities.slice(0, 2).join(' · ')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ground Crawler Treads Base Rendering (초대형 무한궤도 기초) */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/80 px-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <span className="w-2 h-2 bg-amber-500/80 cut-corner-br" />
                    <span>CRAWLER_TRACKS // HEAVY-DUTY MULTI-AXIS SUSPENSION</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="w-8 h-2.5 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    GROUND CONTACT // TERRAIN_TRAVERSAL
                  </div>
                </div>
              </div>

              {/* Right Perimeter Heavy Elevator Shaft */}
              <div 
                onMouseEnter={() => handleSectorHover(null, 'elevator')}
                onMouseLeave={() => handleSectorHover(null, null)}
                className={`col-span-1 border border-purple-500/40 bg-purple-950/20 hover:bg-purple-900/40 transition-all p-2 flex flex-col justify-between items-center cut-corner-br cursor-pointer relative group ${
                  activeTierFilter === 'elevator' ? 'ring-2 ring-purple-400 bg-purple-900/40' : ''
                }`}
              >
                <div className="text-[10px] font-mono text-purple-300 [writing-mode:vertical-rl] tracking-widest text-center py-2">
                  [SHAFT_R // 동측 승강기]
                </div>
                <div className="p-1 bg-purple-900/80 rounded border border-purple-400/50 text-purple-200">
                  <ArrowUpDown className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-mono text-purple-400 text-center">
                  H:190m
                </div>
                <div className="absolute inset-x-0 h-0.5 bg-purple-400/60 top-2/3 animate-bounce" />
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: 3x3 Modular Sector Matrix */
          <div className="relative my-auto py-2 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SECTORS_LIST.map((sec) => {
                const isSelected = selectedSectorId === sec.id;
                const isHovered = hoveredSectorId === sec.id;
                const tierColor = sec.tier === 'living' ? 'emerald' : sec.tier === 'support' ? 'cyan' : 'amber';
                return (
                  <button
                    key={sec.id}
                    onMouseEnter={() => handleSectorHover(sec.id, sec.tier)}
                    onMouseLeave={() => handleSectorHover(null, null)}
                    onClick={() => handleSectorClick(sec.id)}
                    className={`text-left p-3.5 border transition-all cut-corner-br relative cursor-pointer group ${
                      isSelected
                        ? `border-${tierColor}-400 bg-slate-900 shadow-[0_0_15px_rgba(0,229,255,0.2)]`
                        : isHovered
                        ? 'border-slate-600 bg-slate-800/80'
                        : 'border-slate-800/90 bg-[#0d1117] hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className={`text-${tierColor}-400 font-bold`}>{sec.code}</span>
                      <span className="text-slate-400">{sec.tierName}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {sec.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {sec.description}
                    </p>
                    <div className="mt-3 pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>보안인가: LVL.{sec.clearanceLevel}</span>
                      <span className="text-cyan-400 font-bold flex items-center gap-1">
                        자세히 보기 <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Floating / Anchored Tooltip (Follows mouse or fixed when hovering a sector/tier) */}
        {(hoveredSector || activeTooltipTier) && (
          <div 
            className="pointer-events-none z-30 transition-all duration-75 shadow-2xl bg-[#090d14]/95 border border-cyan-500/80 p-4 cut-corner-br max-w-sm sm:max-w-md backdrop-blur-md"
            style={{
              position: 'absolute',
              left: Math.min(Math.max(mousePos.x - 140, 16), (containerRef.current?.clientWidth || 600) - 340),
              top: Math.max(mousePos.y - 180, 16),
            }}
          >
            {hoveredSector ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-800 pb-1.5">
                  <span className="px-2 py-0.5 font-bold cut-corner-br bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    {hoveredSector.tierName}
                  </span>
                  <span className="text-slate-400">{hoveredSector.code}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {hoveredSector.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {hoveredSector.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] space-y-1">
                  <div className="text-slate-400 flex items-start gap-1">
                    <span className="text-cyan-400 font-mono font-bold">주요 시설:</span>
                    <span className="text-slate-200">{hoveredSector.keyFacilities.join(', ')}</span>
                  </div>
                  <div className="text-slate-400 flex items-start gap-1">
                    <span className="text-amber-400 font-mono font-bold">도시별 특화:</span>
                    <span className="text-slate-200 font-medium">
                      {hoveredSector.citySpecialization[activeCityKey]}
                    </span>
                  </div>
                </div>
              </div>
            ) : activeTooltipTier ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-800 pb-1.5">
                  <span className={`px-2 py-0.5 font-bold cut-corner-br ${activeTooltipTier.badgeClass}`}>
                    {activeTooltipTier.nameEn}
                  </span>
                  <span className="text-slate-400">{activeTooltipTier.altitude}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {activeTooltipTier.name}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {activeTooltipTier.detailedFunction}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] space-y-1">
                  <div className="text-slate-400 font-bold font-mono text-[10px]">핵심 기능 및 메커니즘:</div>
                  <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-0.5">
                    {activeTooltipTier.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Footer Hint */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 z-10">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <Info className="w-3.5 h-3.5" />
            <span>섹터 또는 승강기를 클릭하면 하단 전술 인스펙터 패널에서 상세 명세가 고정 표시됩니다.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-400 inline-block" /> 생활층</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-cyan-400 inline-block" /> 지지층</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 inline-block" /> 동력층</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-purple-400 inline-block" /> 승강기</span>
          </div>
        </div>
      </div>

      {/* Selected Sector Detailed Inspector Panel (Click-pinned) */}
      <div className="bg-[#0f141f] border border-cyan-500/40 p-5 sm:p-6 cut-corner-br relative space-y-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
              SECTOR_TELEMETRY // DETAILED SPECIFICATION
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-400">식별 부호:</span>
            <span className="px-2 py-0.5 bg-slate-900 border border-cyan-800 text-cyan-300 cut-corner-br font-bold">
              {selectedSector.code}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Col 1: Overview & Tier Position */}
          <div className="space-y-3">
            <div>
              <div className="text-xs font-mono text-slate-400">소속 층위 & 명칭</div>
              <h3 className="text-xl font-bold font-heading text-white mt-0.5 flex items-center gap-2">
                <span>{selectedSector.name}</span>
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className={`px-2 py-0.5 text-xs font-mono cut-corner-br font-bold ${
                  selectedSector.tier === 'living' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' 
                    : selectedSector.tier === 'support'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                }`}>
                  {selectedSector.tierName}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  보안인가 LVL.{selectedSector.clearanceLevel}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 border border-slate-800/80 cut-corner-br">
              {selectedSector.description}
            </p>
          </div>

          {/* Col 2: Key Facilities & Operational Roles */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              배치 주요 시설 및 인프라
            </div>
            <div className="grid grid-cols-2 gap-2">
              {selectedSector.keyFacilities.map((fac, idx) => (
                <div key={idx} className="p-2.5 bg-slate-900/80 border border-slate-800 cut-corner-br text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{fac}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-900/60 border border-slate-800 cut-corner-br text-xs">
              <span className="text-slate-400 font-mono block mb-1">운용 핵심 목표:</span>
              <span className="text-slate-200 font-medium">{selectedSector.operationalRole}</span>
            </div>
          </div>

          {/* Col 3: Current Selected Mobile City Archetype Role */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              현재 선택 도시 ({getCityLabel(activeCityKey).split(' ')[0]}) 특화 운용상태
            </div>

            <div className="p-4 bg-slate-950/80 border border-amber-500/30 cut-corner-br space-y-2">
              <div className="text-xs font-bold text-amber-300 font-heading">
                {selectedSector.citySpecialization[activeCityKey]}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCityKey === 'caherdin' && '카헤르딘의 자립 순환 체계와 수리·재활용 인프라, 이종족별 장인 기술이 접목되어 도시의 높은 생산성을 지탱한다.'}
                {activeCityKey === 'agravain' && '아그라베인의 엄격한 표준 규격과 사전 호환성 검증 절차에 따라 예외 없이 표준화된 장비와 절차로 운영된다.'}
                {activeCityKey === 'esperanto' && '다양한 종족들의 상이한 환경 조건을 포용하기 위해 미로처럼 구획되어 있으며, 타협과 갈등 속에서 공존한다.'}
              </p>
            </div>

            {/* Quick 3-Tier Summary Indicator */}
            <div className="p-2.5 bg-slate-900/40 border border-slate-800/80 cut-corner-br flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>외곽 승강기 연동 상태:</span>
              <span className="text-emerald-400 font-bold">NORMAL // SHAFT_LINKED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
