export type WorldSection = 'overview' | 'factions' | 'characters' | 'glossary';

export type RaceType = '알토' | '콘트랄토' | '스마우토' | '앤스' | '아페' | '야레츠' | '소그' | '케토' | '하레' | '피를레크' | '인간' | '혼혈종' | '기타';

export type FactionCityId = 'caherdin' | 'agravain' | 'esperanto' | 'geococcyx' | 'firva' | 'chinoiserie' | 'mukri' | 'ahente' | 'nashdom' | 'independent';

export interface DefenseOrganization {
  name: string;
  nameEn: string;
  role: string;
  description: string;
  status: 'ACTIVE' | 'HIGH_ALERT' | 'CLASSIFIED';
  clearanceLevel: number;
  divisions: string[];
}

export interface CityFaction {
  id: FactionCityId;
  name: string;
  nameEn: string;
  locationType: string;
  locationEn: string;
  description: string;
  demographics: {
    race: string;
    percentage: number;
  }[];
  organization: DefenseOrganization;
  features: string[];
  threatLevel: 'ALPHA' | 'BETA' | 'GAMMA';
  coordinates: string;
}


export interface PhysicalExamStats {
  durability: string; // 내구력 (예: 표준)
  mobility: string; // 기동력 (예: 양호)
  tacticalUnderstanding: string; // 전술 이해도 (예: 표준)
  orlandoProficiency: string; // 오를란도 활용도 (예: 표준)
  endurance: string; // 인내도 (지속적인 신체적 스트레스를 버텨내는 정도) (예: 우수)
  terrainUtilization?: string; // 특수 - 지형 활용 (예: 우수)
  specialAbilityName?: string; // 특수 항목 명칭 (예: '특수 - 기억력', '특수 - 지형 활용')
  specialAbilityValue?: string; // 특수 항목 평가 (예: '우수')
  specialAbilityDesc?: string; // 특수 항목 설명 (예: '정보 및 취재 내용 정밀 암기')
  overallGrade: string; // 종합 판정 (예: 양호, 표준)
}

export interface CharacterArchiveItem {
  id: string;
  codeName: string;
  name: string;
  imageUrl?: string;
  factionId: FactionCityId;
  factionName: string;
  race: RaceType;
  subRace?: string; // 예: '여우'
  gender: string;
  height?: string; // 예: '170cm'
  birthday?: string; // 예: '본인이 잊었다고 함'
  origin?: string; // 예: '본인이 잊었다고 함'
  specialty?: string; // 예: '클라이밍, 실뜨기'
  role: string;
  orlandoWeapon: {
    hasOrlando: boolean;
    name?: string;
    abilityType?: string; // '형성 - 열선'
    abilityDescription?: string;
    manifestationForm?: string;
    resonanceWarning?: string;
  };
  physicalExam?: PhysicalExamStats;
  evaluations?: string[]; // 소견 목록
  collapseTolerance: 'S' | 'A' | 'B' | 'C' | 'D' | 'UNKNOWN';
  status: 'ACTIVE' | 'MONITORING' | 'RETIRED' | 'MIA' | 'EMPTY_SLOT';
  securityClearance: 1 | 2 | 3 | 4 | 5;
  bioTitle?: string; // 예: '지옵콕스 면담 기록' (기본: '신상 명세 및 배경 기록')
  bioNotes: string;
  combatLog: string;
  isTemplate?: boolean;
}

export type GlossaryCategory = '물질/기술' | '이상현상' | '종족/지성체' | '토착 생물' | '도시/기관' | '기후/지리';

export interface GlossaryTerm {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  category: GlossaryCategory;
  summary: string;
  content: string;
  dangerLevel?: 'STABLE' | 'CAUTION' | 'CRITICAL' | 'RESTRICTED';
  relatedTerms: string[];
}
