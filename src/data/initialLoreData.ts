import { CityFaction, CharacterArchiveItem, GlossaryTerm } from '../types/lore';

export const CATERPILLAR_INFO = {
  codename: 'CATERPILLAR-186f',
  koreanName: '케터펄러-186f',
  designation: 'SECTOR-186f // UNCARTED_TERRAIN',
  classification: 'RESTRICTED_ENVIRONMENT',
  status: 'HIGH_PRECIPITATION_ZONE',
  geography: {
    summary: '안개와 폭우가 상시 지속되는 저조도 암애 평야 및 고립 생태계',
    details: '안개가 자주 끼며 비 또한 잦다. 안개와 폭우가 짙어질수록 대기 중 케루빔 활성도가 급격히 증가한다. 전체적으로 어두운 환경이 유지되며, 외지인은 케터펄러에 대해 거의 알지 못한다. 기본적으로 광활한 평야가 펼쳐져 있으나 불연속적으로 거대한 수림 지대나 기암 절벽의 바위 산이 나타난다.',
    cherubimCorrelation: '강수량 및 농무 밀도와 케루빔 활성도는 비례 관계를 형성함'
  },
  climate: {
    cycleName: '칸토 주기 (Canto Cycle)',
    details: '6개월 간격으로 따뜻한 계절과 추운 계절이 교대된다. 계절과 계절이 전환되는 10일간의 과도기를 "칸토(Canto)"라고 부르며, 이 기간에는 상시 새벽 특유의 냉기와 기후가 유지된다.',
    warmSeason: '따뜻한 계절: 급격한 소나기 및 미지근한 대류풍 발생, 식생 급성장',
    coldSeason: '추운 계절: 폭설 동반, 쌀쌀하고 건조한 바람, 케루빔 응고 현상'
  },
  coreMaterials: {
    cherubim: {
      name: '케루빔 (Cherubim)',
      category: '원형 만능 금속 (Universal Allotropic Metal)',
      attributes: ['초고경도·초경량·성형 용이', '합금 결함 전무', '주변 금속 흡수 및 경화', '포화 상태(모스 7~8)와 잉여 분진 방출', '선택적 결정 구조 견인력'],
      characteristics: '케터펄러 전역에서 발견되는 금속. 극도로 단단하고 가벼우며 성형이 용이할 뿐만 아니라, 다른 금속과 결합하여 합금을 제작하더라도 물성상의 결함이 발생하지 않는 독특한 특성을 지닌다. 이러한 특성 때문에 한때는 사실상 만능에 가까운 금속으로 여겨졌으며, 각종 산업과 무기, 구조물의 소재로 활용되었다. 케루빔과 동일하거나 유사한 결정 구조를 가진 물질에 선택적으로 끌림을 보인다.\n\n그러나 케루빔은 주변의 금속을 흡수하는 특성을 지닌다. 흡수한 금속은 케루빔의 물성에 영향을 주며, 이에 따라 케루빔의 경도와 분진 발생량이 점차 증가한다. 다만 그 변화가 무한정 지속되는 것은 아니며, 경도는 모스 굳기계 기준 석영(7)과 황옥(8) 사이의 수준에 도달할 시 포화 상태에 도달해 더 증가하지 않고 일정하게 유지된다. 이 상태에서도 금속을 흡수하려는 성질은 여전히 나타나지만 포화 상태이기에 잉여 금속을 분진으로 뿜어낸다.\n\n분진 발생량은 경도에 비례하여 증가한다. 경도가 높아질수록 새로운 물질을 받아들일 수 없는 포화 상태에 가까워져 금속이 흡수되는 속도가 더뎌지지만 그만큼 분진이 더더욱 흩뿌려진다. 이 분진은 케루빔이 띄는 비슷한 구조의 물체를 끌어당기려는 성질에 끌어당겨져 케루빔으로부터 일정 범위를 벗어나지 않는다. 이 분진의 확산 범위는 케루빔의 크기가 커질수록 끌어당기는 성질이 강해지기 때문에 오히려 좁아진다.',
      rawState: '금속을 흡수하기 이전의 케루빔을 "원초 상태의 케루빔"이라 부른다. 이 상태에서는 케루빔의 분진 특성이 나타나지 않기 때문에 경도와 분진 활성화율이 상대적으로 낮으며, 다른 금속이나 재료와의 가공에도 유리하다. 다른 금속을 흡수한 형태의 케루빔은 흔하지만, 원초 상태의 케루빔을 발견하는 것은 극히 희귀하다.',
      dustCharacteristics: '붕괴 현상을 일어나게 하는 주된 원인. 케루빔이 주변 금속을 흡수하며 남기는 가루가 공기 중을 떠다니며 붕괴를 발생시킨다. 바깥에서부터 파고드는 것이기에 분진 농도를 낮춰 붕괴 속도를 늦출 수 있지만, 이미 피하조직까지 파고든 분진은 완전히 제거하지 못한다. 피하조직으로 파고들기 전에 분진이 묻은 부분을 도려내거나 긁어낸다면 제거할 수 있다.',
      civilizationImpact: '단순한 산업 재료를 넘어 케터펄러 문명 전반에 영향을 끼친 물질이다. 금속을 흡수하는 특성과 붕괴 현상 때문에 기존의 산업과 무기 체계가 크게 변화했으며, 케루빔을 피하고 통제하기 위한 기술과 사회 구조 역시 함께 발전했다. 한편 케루빔은 위험성만을 가진 물질도 아니다. 오를란도의 개발처럼 인류가 그 특성을 통제하고 활용하려는 기술 역시 존재하며, 그 결과 케루빔은 문명을 위협하는 재해의 근원이면서 동시에 문명이 의존하는 중요한 자원이라는 양면적인 위치를 차지하게 되었다.',
      criticalRisk: '장시간 접촉한 생명체는 신체가 분해된 후 재조립되는 "붕괴"를 겪는다. 붕괴 내성은 종마다 다르나 인간은 대략 1시간~1시간 30분 정도 버틸 수 있다. 반면 면역과 생체 저항이 전무한 시체는 불과 5분~10분 사이에 급속 붕괴하여 오큘러로 변한다. 현재 케루빔은 그 자체가 지닌 위험성 때문에 원형, 즉 케루빔 단독으로 그대로 사용되는 사례가 거의 없으며, 원초 상태의 케루빔을 가공하여 위험성을 억제하거나 다른 형태로 활용하려는 기술이 발달했다. 그 대표적인 결과물이 오를란도이다.'
    },
    orlando: {
      name: '오를란도 (Orlando)',
      category: '극한 가공체 (Refined Cherubim Construct)',
      attributes: ['원초 케루빔 기반 제작', '무의식 형상 고정', '금속 조성에 따른 이능력 발현', '단일 착용 원칙(공명 법칙)'],
      characteristics: '붕괴 위험을 억제하기 위해 제작된 특수한 케루빔 매개체. 주변 금속을 흡수하지 않아 비교적 가공이 쉬운 원초 상태의 케루빔을 가공하여 제작한다.\n\n오를란도는 신체에 착용하는 방식으로 사용되며, 착용자의 무의식에 잠재된 모습에 따라 형태가 고정된다. 제조 과정에서 다양한 금속의 성질과 원초 상태의 케루빔이 결합하면서, 일반적인 금속으로는 설명하기 어려운 이능력이 발현된다. 형태는 착용자의 무의식이, 능력은 금속이 조성한다.',
      criticalRisk: '공명 법칙 (절대 금기): 오를란도에는 절대적인 금기가 하나 존재한다. 복수의 오를란도를 동시에 착용하거나 서로 접촉시키는 행위는 금지된다. 서로 다른 오를란도가 접촉할 경우 매개체 사이에서 공명이 발생하며, 이 현상으로 인해 붕괴가 즉각적으로 진행될 수 있다. 이 때문에 오를란도는 기본적으로 하나만 사용하는 것이 원칙이다.'
    }
  },
  anomaly: {
    collapse: {
      title: '붕괴 (Collapse)',
      definition: '케루빔 또는 오를란도 공명 피폭으로 인해 생명체의 육체가 해체된 후 기괴한 형태로 재조립되는 불가역적 재해 현상. 고등 지성이 파괴되고 극단적인 본능과 짧은 단어 수준의 파편화된 언어만 남음.'
    },
    ocular: {
      title: '오큘러 (Ocular)',
      definition: '붕괴를 겪은 생명체를 지칭하는 공식 용어. 팔이 비정상적으로 신장되거나 다리가 퇴화하는 등 기형적인 육신을 띰. 약한 자성을 띠는 변이 피부 조직으로 인해 주변의 날붙이나 금속 파편이 신체에 꽂혀 있는 경우가 많음. 이성이 전무하며 본능적인 기형적 울음소리를 방출함. 피폭 전 종족 특성에 따라 변이 형태가 달라짐.'
    }
  }
};

export const CITIES_DATA: CityFaction[] = [
  {
    id: 'caherdin',
    name: '카헤르딘',
    nameEn: 'Caherdin',
    locationType: '이종족 자립형 대형 이동 도시 (Self-Sustaining Mobile Citadel)',
    locationEn: 'Autonomous Industrial Mobile Citadel',
    description: '이종족을 중심으로 구성된 대형 이동 도시. 오큘러와 붕괴 확산 초기 생존 집단을 주축으로 건설되었으며, 식량·자원·부품·에너지를 자체 생산하는 높은 자립성을 갖췄다. 종족별 특성을 살린 특화 산업과 보수·재활용 인프라가 발달했으나, "차이를 쓸모 있게 만들어야 한다"는 가치관 속에서 직업 고정관념과 보수적 유지 편중이라는 과제를 안고 있다.',
    threatLevel: 'BETA',
    coordinates: 'MOBILE_PLATFORM // RECYCLED_INDUSTRIAL_GRID',
    demographics: [
      { race: '이종족 (알토, 케토, 앤스 등)', percentage: 82 },
      { race: '혼혈종', percentage: 12 },
      { race: '인간', percentage: 6 }
    ],
    organization: {
      name: '케 에딘',
      nameEn: 'Ke Edin',
      role: '카헤르딘 전담 재난 대응 및 아뎀 구조·산업시설 유지 기구',
      description: '현장 구조와 오큘러 제압뿐 아니라 아뎀의 노후 구조물과 핵심 산업·동력 시설의 붕괴 위험을 상시 감시·관리하는 복합 기구. 구조·제압 인력 외에 공학, 정비, 의료, 산업 안전 인력이 폭넓게 융합되어 재난 대응과 도시 유지를 동시에 수행한다.',
      status: 'ACTIVE',
      clearanceLevel: 4,
      divisions: [
        '대(對)오큘러 외곽 정찰·제압대 (Vanguard Recon & Strike Corps)',
        '민간인 구조 및 사체 긴급수습반 (Civilian Rescue & Casualty Recovery)',
        '아뎀 노후 구조·동력 안전공학국 (Citadel Structure & Power Engineering)',
        '케루빔 오염 조사 및 산업시설 격리반 (Cherubim Containment & Remediation)'
      ]
    },
    features: [
      '식량·자원·부품·에너지의 상당 부분을 자체 조달하는 높은 자립 순환계',
      '철거 대신 보수·전환을 거듭해 여러 시대의 설비와 구조물이 공존하는 거대 플랫폼',
      '종족별 신체 특성과 직업이 결합된 고도의 장인 기술 및 수리·재활용 산업'
    ]
  },
  {
    id: 'agravain',
    name: '아그라베인',
    nameEn: 'Agravain',
    locationType: '인간 중심 표준화 대형 이동 도시 (Standardized Mobile Citadel)',
    locationEn: 'Standardized Administrative & Industrial Mobile Citadel',
    description: '인간을 중심으로 구성된 대형 이동 도시. 오큘러와 붕괴 확산 초기 카헤르딘 다음으로 안전한 생활권과 안정적인 문명 체계를 확보하기 위해 건설되었으며, 이후 행정·산업·연구의 중심지로 발전했다. 규격, 교육, 의료, 교통, 산업 등 전 영역의 철저한 표준화를 통해 높은 시스템 안정성을 확보했으나, "모두가 같은 기준 아래에서 살아야 함께 살아남을 수 있다"는 가치관 속에서 예외적 개체 및 신기술 도입의 경직성과 높은 제도 수정 비용이라는 과제를 안고 있다.',
    threatLevel: 'ALPHA',
    coordinates: 'MOBILE_PLATFORM // STANDARDIZED_GRID_CORE',
    demographics: [
      { race: '인간', percentage: 78 },
      { race: '혼혈종', percentage: 14 },
      { race: '이종족 (아페 등)', percentage: 8 }
    ],
    organization: {
      name: '메네실',
      nameEn: 'Menesil',
      role: '아그라베인 전담 붕괴 예방·관리 및 규정 감독·표준 대응 기구',
      description: '오큘러 제압과 민간인 구조뿐만 아니라 붕괴 현상의 예방과 관리, 도시 내 케루빔 취급 규정의 엄격한 감독을 총괄하는 기구. 표준화된 장비와 행동 지침에 따라 현장과 행정 업무를 폭넓게 수행하나, 급변하는 현장에서 규정 준수와 즉각적인 인명 구조 사이의 딜레마를 겪는다.',
      status: 'HIGH_ALERT',
      clearanceLevel: 5,
      divisions: [
        '대(對)오큘러 표준 기동제압대 (Standardized Ocular Suppression Wing)',
        '민간인 구조 및 사체 수습 절차감독반 (Civilian Rescue & Casualty Protocol)',
        '케루빔 취급 규정 감독 및 시설검사국 (Cherubim Compliance & Facility Inspection)',
        '붕괴 위험 지역 통제 및 원인조사반 (Risk Zone Containment & Cause Investigation)'
      ]
    },
    features: [
      '시설·교육·의료·교통·산업 전 분야에 구축된 철저한 표준화 규격망',
      '호환성 검증과 단계적 적용을 바탕으로 한 높은 시스템 안정성 및 행정·연구 인프라',
      '문서화된 규정과 행동 지침 기반의 체계적인 케루빔 취급 및 붕괴 예방 감독 체계'
    ]
  },
  {
    id: 'esperanto',
    name: '에스페란토',
    nameEn: 'Esperanto',
    locationType: '다종족 공존 이동 도시 (Coexistence Mobile City)',
    locationEn: 'Multi-Species Mobile Citadel',
    description: '이종족과 인간이 섞여 사는 이동 도시. 다양한 문화와 생활 방식이 섞이며 독특한 도시 문화를 형성했다. 그러나 다양한 종족이 한 공간을 같이 사용하는 만큼 여러 사항이 상충한다. 대표적으로 복잡한 미로 같은 섹터 구조가 있으며, 서로 다른 종족들의 생활 환경을 수용하기 위해 한 섹터 안에서도 환경과 시설의 구성 등이 크게 다르다. 도시의 이름은 서로 다른 존재들이 함께 살아갈 수 있는 사회를 만들려 노력했던 \'에스페란토 데 베네프\'의 이름에서 따왔으나, 이상적인 통합 대신 끊임없이 타협하고 배려하고 갈등하며 치열하게 살아간다.',
    threatLevel: 'GAMMA',
    coordinates: 'MOBILE_PLATFORM // LABYRINTH_SECTOR_GRID',
    demographics: [
      { race: '이종족 (하레, 앤스, 아페 등)', percentage: 48 },
      { race: '인간', percentage: 34 },
      { race: '혼혈종', percentage: 18 }
    ],
    organization: {
      name: '라자로',
      nameEn: 'Lazaro',
      role: '최전선 현장 인명 구조 및 대(對)오큘러 진압대',
      description: '붕괴 대응 기관... 이라곤 하나 현장직에 가깝다. 붕괴와 오큘러로부터 사람을 직접 구하는 현장 대응 조직에 가깝다. 도시 외부에 고립된 민간인의 구조, 오큘러의 제압, 사망자의 수습, 붕괴 위험 지역의 통제 등을 담당하며, 다양한 종족이 공존하는 에스페란토의 특성상 종족별 생리학과 약학 역시 발전했다.',
      status: 'ACTIVE',
      clearanceLevel: 4,
      divisions: [
        '외부 고립 민간인 수색구조대 (External Civilian Rescue Wing)',
        '대(對)오큘러 긴급 기동제압반 (Rapid Suppression Strike Force)',
        '사망자 긴급 수습 및 오염 차단조 (Casualty Recovery & Containment)',
        '종족별 생리학·특수 약학 의무국 (Poly-Species Physio-Pharmacology Div)'
      ]
    },
    features: [
      '종족별 상이한 생활 환경을 수용하기 위해 미로처럼 구축된 복합 섹터 구조',
      '외부 고립자 구조 및 급속 붕괴 방지를 위한 신속한 사망자 수습 체계',
      '다양한 종족 공존 환경을 기반으로 한 종족별 특화 생리학 및 약학 인프라'
    ]
  },
  {
    id: 'geococcyx',
    name: '지옵콕스',
    nameEn: 'Geococcyx',
    locationType: '독립 개조 이동식 섹터 기지 (Independent Mobile Sector Base)',
    locationEn: 'Mobile Sector Newsroom & Intelligence Hub',
    description: '"정확하고 믿을 수 있는 정보를 전달한다"를 모토로 삼고 있는 독립 정보 언론 세력. 거대 이동 도시에서 소형 섹터 하나를 분리해 개조한 독자적인 이동식 기지를 거점으로 삼고 있다. 어느 도시나 국가에도 예속되지 않은 민간 사설 사업체로, 대륙 각지를 누비며 정보를 수집하고 이를 기사 및 첩보로 엮어 판매한다. 정보와 기사의 가격은 표준 규격 없이 정보의 희소성, 중요도, 취재 과정의 위험도와 소요 비용 등을 고려해 지옵콕스가 직접 책정한다.',
    threatLevel: 'BETA',
    coordinates: 'INDEPENDENT_SECTOR // TRANS-CONTINENTAL_ROVING',
    demographics: [
      { race: '이종족 (혼혈·각종 이종족)', percentage: 52 },
      { race: '인간', percentage: 48 }
    ],
    organization: {
      name: '지옵콕스 보도국 & 현장취재단',
      nameEn: 'Geococcyx Press & Field Intelligence',
      role: '대륙 전역 심층 취재·정보 분석 및 이동식 통신망 운영',
      description: '오큘러 출몰 지역, 붕괴 위험 구역, 각 이동 도시의 내부 정세까지 가리지 않고 현장 취재를 감행하는 독립 언론 기구. 고도의 이동 통신 장비와 기동 취재 인력을 갖추고 있다.',
      status: 'ACTIVE',
      clearanceLevel: 3,
      divisions: [
        '전선 잠입 기동취재반 (Vanguard Field Press Unit)',
        '대륙 정세·정보 심층분석국 (Strategic Intelligence Analysis)',
        '이동 섹터 기지 관제·방위팀 (Sector Navigation & Defense Team)',
        '특수 통신 암호화 및 유통국 (Encrypted Dispatch & Editorial Bureau)'
      ]
    },
    features: [
      '대형 이동 도시에서 분리·개조하여 자율 기동 능력을 확보한 소형 섹터 기지',
      '특정 도시·국가에 얽매이지 않는 독립적 취재 및 독자적 정보 가격 책정 체계',
      '대륙 각지의 오큘러 동향, 붕괴 현장, 도시 간 기밀을 망라하는 정밀 정보망'
    ]
  },
  {
    id: 'firva',
    name: '피르바',
    nameEn: 'Firva',
    locationType: '동부 해안 항만 도시 (Eastern Coastal Port City)',
    locationEn: 'Eastern Seaboard Harbor Metropolis',
    description: '동부 해안 지대에 자리 잡은 항만 도시. 수려하고 아름다운 해안 경관을 자랑하지만, 낮에는 무더운 날씨가 이어지고 밤이 되면 거친 파도가 휘몰아치는 혹독한 해양 환경이 공존한다. 어업을 주된 생계 수단으로 삼는 주민들이 많으며 특산품인 건어물이 대륙 전역에 유명하다. 활성화된 어업의 규모만큼 연안과 항구 주변에 수많은 어선과 선박이 정박해 있다. 원초 상태의 케루빔을 해안 등대의 광원으로 활용하고 있어 등대지기는 피폭과 붕괴 위험으로 기피되는 직업이다. 최근 연안에 \'밤바람의 유령\'이 출몰한다는 흉흉한 소문과 함께 신체에 산호가 돋아나는 \'석호병\'이 번지며 긴장이 고조되고 있다.',
    threatLevel: 'BETA',
    coordinates: 'EASTERN_SEABOARD // PORT_COASTAL_SHELF',
    demographics: [
      { race: '피를레크 (케토×어패류 앤스)', percentage: 38 },
      { race: '이종족 (케토, 앤스 등)', percentage: 34 },
      { race: '인간 및 혼혈종', percentage: 28 }
    ],
    organization: {
      name: '사카나',
      nameEn: 'Sakana',
      role: '피르바 자경대 및 항구·해역 방위 치안대',
      description: '피르바의 치안 유지와 항구의 어부들을 보호하는 민간 자경대. 본래 도시 밖 외곽 순찰은 드물었으나, 최근 해역에서 급격히 유행하는 석호병의 감염 경로를 통제하고 항구를 통한 외부 유입을 차단하기 위해 피르바 당국의 요청으로 수역 통제권을 확대하고 있다.',
      status: 'HIGH_ALERT',
      clearanceLevel: 3,
      divisions: [
        '항구 치안 및 어선 보호대 (Harbor Security & Fisher Guard)',
        '석호병 검역 및 유입 차단반 (Coral Disease Quarantine Unit)',
        '외곽 연안 수역 순찰대 (Coastal Waters Patrol Wing)',
        '선박 격리 및 석호체 대응조 (Vessel Quarantine & Specimen Taskforce)'
      ]
    },
    features: [
      '원초 상태의 미가공 케루빔을 광원으로 활용하는 위험천만한 연안 등대 인프라',
      '거대한 어선단과 건어물 가공 산업이 발달한 동부 최대 해안 항만 네트워크',
      '석호병 확산 차단을 위한 외곽 해안 수역 및 항구 진입선박 전면 통제 체계'
    ]
  },
  {
    id: 'chinoiserie',
    name: '시누아즈리',
    nameEn: 'Chinoiserie',
    locationType: '고산 고립 산악 광산 도시 (Alpine Highland Mining Bastion)',
    locationEn: 'High-Altitude Mineral & Machinery Citadel',
    description: '험준한 고산 지대에 자리 잡은 산악 도시. 온난기는 물론 계절 전환기인 칸토에도 살을 에는 혹한이 지속된다. 해발 고도가 매우 높은 암벽 지대에 위치한 덕분에 오큘러의 직접적인 침범 위협은 사실상 전무하지만, 그만큼 외부 문명과의 왕래가 제한되어 고립되어 있으며 험준한 산악에 원래 서식하던 야생 토착 생물들과 잦은 마찰을 빚는다. 광산 채굴업과 중장비 제조 기술을 핵심 생계 수단으로 삼으며, 거친 산악 암반을 뚫기 위한 독자적인 굴착 및 다목적 중장비 기술이 고도로 발달했다.',
    threatLevel: 'BETA',
    coordinates: 'ALPINE_RIDGE // HIGHLAND_MINE_DEEP_GRID',
    demographics: [
      { race: '소그 (광산 특화 아페 분파)', percentage: 46 },
      { race: '이종족 (아페, 하레 등)', percentage: 32 },
      { race: '인간 및 혼혈종', percentage: 22 }
    ],
    organization: {
      name: '요아',
      nameEn: 'Yoah',
      role: '시누아즈리 광산 채굴단 및 다목적 중장비 공병 길드',
      description: '광산 채굴을 본업으로 삼으며 중장비 제작 및 정비를 겸하는 기술자·광부 조직. 다채로운 기능이 하나로 통합된 \'멀티툴\' 형태의 다목적 중장비를 능숙하게 설계·운용한다. 장비에 장황하고 긴 명칭을 붙이는 기묘한 버릇이 있어 주민들은 주로 \'다목적 중장비\'로 줄여 부른다. 가끔 광맥에 눈이 멀어 지나치게 과격하게 암반을 발파·굴착하다가 도시 당국의 제지를 받기도 한다.',
      status: 'ACTIVE',
      clearanceLevel: 3,
      divisions: [
        '심부 암반 발파 및 채굴대 (Deep Bedrock Excavation Unit)',
        '복합 다목적 중장비 개발공방 (Multi-Tool Machinery Foundry)',
        '고산 토착 생물 방어 및 안전통제대 (Fauna Deterrence & Tunnel Safety)',
        '광물 제련 및 구조 안정성 검사반 (Ore Smelting & Structural Audit)'
      ]
    },
    features: [
      '해발 수천 미터 고산 지대에 형성되어 오큘러 침입이 차단된 천연 요새 환경',
      '온난기와 칸토에도 혹한이 이어지는 냉대 기후 및 고립된 자급형 광업 경제',
      '‘멀티툴’ 철학에 기반한 독자적인 고출력 다목적 굴착·토목 중장비 엔지니어링'
    ]
  },
  {
    id: 'mukri',
    name: '무크리',
    nameEn: 'Mukri',
    locationType: '평야 방벽 농업 및 무구 공방 도시 (Plain Bastion & Armament Citadel)',
    locationEn: 'Fortified Plain Citadel of Arms & Harvest',
    description: '평야에 자리 잡은 도시. 주변이 탁 트여 있어 오큘러의 접근을 막기 위한 거대한 장벽이 도시를 둘러싸고 있다. 붕괴 사태 이후 끊임없이 오큘러와 싸워왔으며, 그 과정에서 오큘러를 처리하는 기술과 그 부산물을 활용하는 기술, 그리고 이를 응용한 각종 무구가 발달했다. 외부에 대한 의존을 줄이기 위해 식량과 생활 물자의 자급자족 체계를 오랜 시간에 걸쳐 발전시켜 왔으며, 필요한 자원은 자체적으로 생산하거나 오큘러를 포함한 주변 환경에서 확보한다. 동시에 다른 도시 및 지역과의 거래도 활발하다. 오랜 세월 오큘러와 맞서 싸워온 탓에 무크리에서는 전투가 일상적인 문화의 일부로 자리 잡았으며, 방어와 사냥, 무구 제작, 훈련 등의 분야가 발달했고 도시의 안전을 지키는 일을 명예로운 일로 여기는 풍조 역시 강하다. 매년 추수철에는 한 해의 수확을 마치고 무사히 살아남은 것을 기념하는 대규모 축제인 ‘무크라오제’가 열린다.',
    threatLevel: 'BETA',
    coordinates: 'GREAT_PLAIN // BASTION_WALL_SECTOR_MKR',
    demographics: [
      { race: '야레츠 (전투 특화 아페 분파)', percentage: 48 },
      { race: '인간 및 혼혈종', percentage: 32 },
      { race: '이종족 (아페, 앤스, 케토 등)', percentage: 20 }
    ],
    organization: {
      name: '고라이',
      nameEn: 'Gorai',
      role: '무크리 장벽 방호대, 치안 유지 및 무구 수련·사냥단',
      description: '무크리의 호전적인 문화 속에서 뛰어난 전투력을 지닌 이들이 모인 집단. 주로 도시의 거대한 장벽과 외곽에서 오큘러를 처리하고 치안을 유지하며, 필요에 따라 오큘러의 사냥과 부산물 회수에도 참여한다. 전투와 무구에 익숙한 이들이 많은 만큼 일부 고라이는 수련장을 운영하며 무구의 사용법과 전투 기술을 가르친다. 또한 오큘러와의 실전 경험을 바탕으로 새로운 무구의 시험과 전투 방식의 개선에 적극적으로 관여한다.',
      status: 'HIGH_ALERT',
      clearanceLevel: 4,
      divisions: [
        '거대 장벽 요격 및 수성 방호대 (Great Wall Rampart Garrison)',
        '외곽 오큘러 사냥 및 부산물 회수조 (Ocular Hunt & Salvage Unit)',
        '전통 무구 시험 및 전술 수련원 (Armament Trial & Combat Dojo)',
        '도시 치안 및 추수 방호 순찰대 (Harvest Guard & Peacekeeper Wing)'
      ]
    },
    features: [
      '탁 트인 광활한 평야 환경에서 오큘러를 완벽 차단하는 거대한 환상 장벽 요새',
      '오큘러 부산물을 정밀 가공하여 제작하는 독자적인 무구 및 실전 전투 기술',
      '식량·생활 물자 자급자족 체계와 활발한 대외 무역, 그리고 생존을 기리는 ‘무크라오제’'
    ]
  },
  {
    id: 'ahente',
    name: '아헨테',
    nameEn: 'Ahente',
    locationType: '남서부 해안 단애·산악 건축 및 축제 도시 (Southwestern Cliff & Coastal Festival Citadel)',
    locationEn: 'Citadel of Cliffs, Architecture & Perpetual Festivals',
    description: '케터펄러 남서부에 자리 잡은 해안 산악 도시. 내륙 방면이 가파른 산과 험준한 절벽으로 가로막혀 있어, 도시 전체가 깎아지른 절벽과 산비탈, 그리고 굴곡진 해안선을 따라 유기적으로 축조되었다. 토양이 척박하고 일조량이 강렬하여 일반적인 곡물 농경 대신 과수 재배와 산악 목축업을 주된 생업으로 삼는다. 험준한 단애 지형에 거주지를 구축해야 했던 역사로 인해 독보적인 산악 입체 건축 기술이 발달했으며, 비례와 중심의 조형미를 숭상한다. 매월 초 당대 최고의 건축가와 조각가를 선발하는 ‘베 뒤테(Be Dutte)’를 비롯해 1년 내내 다채로운 축제가 이어져 ‘축제의 도시’로 불린다. 시민들은 건전한 경쟁과 치열한 논쟁을 일종의 축제이자 유희로 여기며, 승패보다는 기량을 겨루는 과정 그 자체에 높은 가치를 둔다.',
    threatLevel: 'BETA',
    coordinates: 'SOUTHWEST_SECTOR // CLIFF_COASTLINE_AHT',
    demographics: [
      { race: '스마우토 (알토 분파 유익종)', percentage: 42 },
      { race: '인간 및 혼혈종', percentage: 35 },
      { race: '이종족 (알토, 앤스, 케토 등)', percentage: 23 }
    ],
    organization: {
      name: '슈흘리카',
      nameEn: 'Shuhlica',
      role: '아헨테 해안 방벽 수비대, 연안 오큘러 소탕 및 도시 치안 총괄대',
      description: '아헨테의 공식 붕괴 대응 및 치안 방위 기관. 주로 거주민의 일상 치안을 보호하며, 절벽과 해안선이 맞닿은 도시의 지리적 특성상 바다와 조간대에서 기어올라오는 연안형 오큘러들의 요격 및 소탕을 전담한다. 대단히 엄격하고 혹독한 실전 훈련과 전술 교육을 거친 정예 인원으로만 선발되며, 아헨테 청년들 사이에서는 슈흘리카 입단을 인생의 큰 명예이자 목표로 삼는 이들이 많다. 연 2회 개최되는 종합 무예 경연 축제 ‘메타르테’의 우승자에게는 입단 특전이 부여되지만, 메타르테 우승자가 아니더라도 엄격한 정규 선발 시험과 훈련을 통과하면 누구나 입단할 수 있다.',
      status: 'ACTIVE',
      clearanceLevel: 4,
      divisions: [
        '해안 단애 초계 및 연안 오큘러 요격대 (Coastal Cliff Interception Wing)',
        '절벽 계단가 및 수직 도시 치안 기동대 (Vertical Citadel Mobile Patrol)',
        '메타르테 선발 정예 수색강습대 (Metarte Elite Striker Cohort)',
        '단애 지형 구조 및 붕괴 격리 방호조 (Cliffside Rescue & Containment)'
      ]
    },
    features: [
      '가파른 절벽과 해안선을 따라 수직 조형미와 비례를 극대화한 독보적인 단애 건축 기술',
      '강렬한 햇빛과 척박한 토양을 극복한 특화 과수 재배 및 고지대 목축업',
      '경쟁과 토론을 축제로 향유하는 문화: 월간 예술제 ‘베 뒤테’와 반기 종합 무예제 ‘메타르테’'
    ]
  },
  {
    id: 'nashdom',
    name: '나슈돔',
    nameEn: 'Nashdom',
    locationType: '북부 혹한지 소형 이동 도시 (Northern Rugged Mobile Citadel, 50.40㎢)',
    locationEn: 'Compact Northern Mobile Citadel of Rugged Fortitude',
    description: '케터펄러 북부의 거친 설원과 암반 험지를 누비는 이동 도시. 공인된 아뎀 가운데 가장 작은 50.40㎢의 규모를 지니고 있다. 눈 덮인 거친 험지에서도 차질 없이 주행하기 위해 다른 이동 도시들의 무한궤도보다 훨씬 더 두껍고 거대한 특수 무한궤도 구동계를 탑재한 것이 외형적 특징이다. 도시 중심부에는 상층(생활층), 중층(지지층), 하층(동력층) 전 구역에서 올려다보이는 거대한 원주형 난방 타워가 수직으로 관통하고 있어, 극한의 북부 한파 속에서 도시 전역의 온도를 일정하게 유지한다. 척박한 북방 환경에 적응하는 과정에서 거칠고 실용적이면서도 투박한 생명력이 넘치는 독특한 건축 양식, 이른바 ‘야성미가 돋보이는 고급 판자촌’이라 불릴 만한 고유의 입체 거주 구역을 형성했다.',
    threatLevel: 'BETA',
    coordinates: 'NORTHERN_RUGGED_STEPPE // HEAVY_TRACK_NDM',
    demographics: [
      { race: '인간 및 북방계 혼혈종', percentage: 45 },
      { race: '아페 계통 (소그 및 혹한 적응 분파)', percentage: 30 },
      { race: '이종족 (앤스, 하레 등)', percentage: 25 }
    ],
    organization: {
      name: '프롯스자시트',
      nameEn: 'Protszasit',
      role: '나슈돔 공식 붕괴 대응 기관 (타격·관통 특화 요격 및 치안 유지)',
      description: '나슈돔의 공식 붕괴 대응 기관 (발음상으로는 ‘프로스자씻트’로 발음됨). 본래 험지 기후에 버티는 도시 구조물을 짓고 수리하던 민간 건축사 집단이었으나, 오큘러 침입 시 도시 구조물 보호와 수성전에서 혁혁한 공을 세우며 영향력과 인지도가 급상승함에 따라 나슈돔 자치 의회로부터 정식 붕괴 대응 기관으로 임명되었다. 다른 도시의 기관들과 마찬가지로 오큘러 제압과 거주민 치안 유지를 전담한다. 혹한 속에서 얼어붙어 경화된 오큘러의 외피와 골격을 상대해야 하므로, 날로 베어내는 무기보다는 거대한 질량으로 부수는 둔기나 장갑을 강하게 꿰뚫는 관통형 창·파일 벙커 형태의 무구를 주로 사용한다.',
      status: 'ACTIVE',
      clearanceLevel: 4,
      divisions: [
        '중장갑 충격 분쇄대 (Heavy Armor Impact & Breaker Unit)',
        '단일 관통 돌파대 (Piercing Lance & Penetration Squad)',
        '중앙 난방 기둥 방호·정밀보수조 (Central Heating Core Security & Maintenance)',
        '대형 무한궤도 기동로 정찰 및 치안대 (Heavy Track Mobility & Peacekeeper Wing)'
      ]
    },
    features: [
      '아뎀 중 최소 규모(50.40㎢)이자 험지 주파력을 극대화한 초대형 광폭 무한궤도 구동계',
      '상·중·하층을 수직 관통하며 도시 전체의 생존 온도를 조율하는 거대한 중심 난방 기둥',
      '투박함과 견고함이 공존하는 북방 고유의 양식: ‘야성미가 돋보이는 고급 판자촌’ 건축미',
      '건축사에서 발탁되어 둔기와 관통 화력을 주력으로 운용하는 정예 기관 ‘프롯스자시트’'
    ]
  }
];

export const TEMPLATE_CHARACTERS: CharacterArchiveItem[] = [
  {
    id: 'CHAR-CAT-001',
    codeName: 'THERMAL_WIRE // 요나',
    name: '요나',
    imageUrl: 'https://i.postimg.cc/15b9p8q7/from-Pix-AI-2060923180025992475-(1).png',
    factionId: 'esperanto',
    factionName: '에스페란토',
    race: '앤스',
    subRace: '여우',
    gender: '여',
    height: '170cm',
    birthday: '본인이 잊었다고 함',
    origin: '본인이 잊었다고 함',
    specialty: '클라이밍, 실뜨기',
    role: '특수 유격 및 지형 침투관',
    orlandoWeapon: {
      hasOrlando: true,
      name: '형성 - 열선 (Thermal Wire)',
      abilityType: '형성',
      abilityDescription: '주변 금속을 활용해 열전도율이 높은 고열 와이어를 뽑아낸다.',
      manifestationForm: '두꺼운 팔찌 형태',
      resonanceWarning: '단일 팔찌 착용. 복수 개 오를란도 동시 착용 또는 접촉 시 오를란도 간 공명으로 불가역적 붕괴 즉각 발현 (공명 법칙 절대 준수)'
    },
    physicalExam: {
      durability: '표준',
      mobility: '양호',
      tacticalUnderstanding: '표준',
      orlandoProficiency: '표준',
      endurance: '우수',
      terrainUtilization: '우수',
      overallGrade: '양호'
    },
    evaluations: [
      '갯과에 속하는 앤스인 탓에 칭찬을 바라는 경향이 있음(칭찬 후 일시적인 능률 향상을 보임).',
      '지형지물을 활용하여 표적을 습격하는 것에 적성을 보임.',
      '어떤 무기를 쥐여주어도 큰 편차 없이 사용함, 원거리에선 활, 근거리에선 단검 종류를 능숙하게 사용함.'
    ],
    collapseTolerance: 'B',
    status: 'ACTIVE',
    securityClearance: 3,
    bioTitle: '지옵콕스 취재 기록 (GEOCOCCYX_FIELD_LOG)',
    bioNotes: `B: 저... 그, 지옵콕스에서 나왔는데, 잠깐 취재 가능할까요?
Y: ...아, 그 기사 쓰는 거기구나. 가능하지. 몇 분 정도 걸려?
B: 아, 으흠, 감사합니다! 10분에서 15분정도 걸려요.
Y: 오케이. 편할때 시작해.

Q: 평소 어떻게 생활하고 계신가요?
A: 업무 보고, 훈련하고, 밥먹고. 훈련 비중이 높은 편이지, 언제 오큘러가 나타날지 모르니까.

Q: 취미가 있으신가요?
A: 실뜨기랑... 클라이밍. 가끔 요리도 손 대보고있는데... 어후, 오큘러들 던져줘도 되겠더라고.

Q: 선호하는 업무가 있으신가요? 있다면 그 이유는?
A: 순찰임무. 칸토 직전에 나가면 안개도 적고 바람도 선선해서 나가기 좋지. ...오큘러는 피해야겠지만?

Q: 직장 동료들과 관계는 어떠신가요?
A: 좋지. 업무때 게벨은 좀 딱딱하긴 해. 이번에 한 명 더 온다던데 걔는 어떨지 모르겠네.

Q: 최근에 고민은?
A: 에스페란토가 발전이 없어서 그게 고민이라면 고민이겠네. 그것 말고 다른건 없어.

Q: 칭찬에 약하시단 소문이 있던데 사실인가요?
A: ㅇ, 으응? 얘는 또 그걸 어디서... 쩝, 부정은 못 하겠네. 근데 이건 나랑 비슷한 앤스들은 거의 다 그래서 딱히 나만 그런건 아니야.

Q: 아까 새로 온다는 분은 어떤 분인가요?
A: 나도 주워들은거라 확실하진 않지만 꽤 특별한 녀석이 온다고 들었어. 만약 에스페란토로 온다면 클라이밍 좋아했으면 좋겠네.

Q: 오를란도가 있으시던데, 부작용 같은건 없나요?
A: 무거워. 부피도 부피지만 팔찌 모양이라서 손목에 부담이 좀 가지.

B: 취재는 끝났습니다! 적극적인 참여 감사드립니다!
Y: 뭐 이런걸 가지고. 너도 고생이 많아.
B: 하핫.. 감사합니다.`,
    combatLog: '에스페란토 심층 도관 및 지형 단애 작전 투입. 열선 와이어와 지형지물을 활용한 기습으로 표적을 제압함. 원거리 활 사격과 근접 단검 운용에 뛰어난 숙련도를 입증.',
    isTemplate: false
  },
  {
    id: 'CHAR-CAT-002',
    codeName: 'NEWS_CRAWLER // 벨록스',
    name: '벨록스',
    factionId: 'geococcyx',
    factionName: '지옵콕스',
    race: '인간',
    gender: '여',
    height: '168cm',
    birthday: '08월 10일',
    origin: '바흐엘',
    specialty: '기사거리 포착, 아웃도어',
    role: '현장 기동 취재관 및 정보 기록원',
    orlandoWeapon: {
      hasOrlando: false,
      name: '오를란도 미장착 (비보유)',
      abilityDescription: '오를란도를 보유하지 않으며 자연 신체와 야외 생존 장비 및 취재 도구에 의존함.',
      manifestationForm: '해당 없음 (자연 상태)',
      resonanceWarning: '오를란도 미착용 상태로 다중 공명 붕괴 위험 없음. 취재 시 케루빔 분진 및 변이체 노출 주의 요망.'
    },
    physicalExam: {
      durability: '표준',
      mobility: '부족',
      tacticalUnderstanding: '표준',
      orlandoProficiency: '미흡',
      endurance: '우수',
      specialAbilityName: '특수 - 기억력',
      specialAbilityValue: '우수',
      specialAbilityDesc: '취재 정보 및 현장 상황 정밀 기억·보존',
      overallGrade: '표준'
    },
    evaluations: [
      '인간이긴 하나 주변의 행동을 따라하는 습관을 보이며 이는 무의식적인 것으로 확인됨.',
      '대화 결과 대인관계에서 다른 검사자들보다 질문에 대한 대답이 2~3초 정도의 지연이 있는 것으로 확인됨.',
      '지옵콕스 소속으로써 문장력 검사 결과 어휘력은 표준 이상임이 확인됨.'
    ],
    collapseTolerance: 'C',
    status: 'ACTIVE',
    securityClearance: 3,
    bioTitle: '지옵콕스 면담 기록 (GEOCOCCYX_INTERVIEW_LOG)',
    bioNotes: `Q: 평소 생활은?
A: 일어나서... 일하고 일하고 일하고.

Q: 요즘은 어떤지?
A: 그럭저럭이요. 기사거리가 많아 좋지만 아무래도 일이 느는 거다 보니 피곤하죠.

Q: 주로 다니는 지역은?
A: 지옵콕스가 움직이는대로 움직이는 거라서 선택권은 없지만... 요즘은 동부나 남부쪽 많이 다니죠.

Q: 직장 동료들과 관계는?
A: 이것도 그럭저럭. 아이롤이나 울이랑은 자주 대화하고... 이렇게 보니 인맥 되게 좁네요.

Q: 고민은?
A: 인맥이 좁은거? 명색이 지옵콕스 기자인데 인맥이 넓질 않다보니 기사거리 건지는게 쉽지가 않아요.

Q: 지옵콕스의 규정에 대해서 불만인 점?
A: 음? 이건... 민감한 주제네요. 저희는 사설 사업체라 기사에 제한이 별로 없긴 한데 다른 세력이랑 긁어 부스럼 만들 필요는 없다보니 규정 없이도 알아서 사리고 있죠.

Q: 마지막으로 묻고싶은건?
A: 원래 면담은 제 일이였는데 왜 제가 면담받고 있죠?`,
    combatLog: '지옵콕스 이동식 섹터 기지 발진 현장 취재 임무 수행. 격전 구역 인근에서 기사거리 포착 및 현장 기록 완수. 기동력 부족에도 불구하고 높은 인내도로 험지 퇴각 성공.',
    isTemplate: false
  },
  {
    id: 'CHAR-CAT-003',
    codeName: 'BREACHER // 게벨',
    name: '게벨',
    factionId: 'esperanto',
    factionName: '에스페란토 (라자로)',
    race: '아페',
    subRace: '야레츠',
    gender: '여',
    height: '165cm (방호복 착용 시 180cm)',
    birthday: '동반한 우야마의 발언에 따라 07월 13일로 확인됨',
    origin: '무크리',
    specialty: '연기, 버티기',
    role: '현 라자로 3팀 \'브리칭\' 팀장',
    orlandoWeapon: {
      hasOrlando: true,
      name: '변체 - 바닥걸음',
      abilityType: '변체',
      abilityDescription: '일시적으로 근력 및 반사신경 상승.',
      manifestationForm: '중장갑 방호복 내부 신체 결속형 변체',
      resonanceWarning: '가끔 근육통이 발생하여 방호복 착용 시 거슬림. 추가 오를란도 접촉 금지.'
    },
    physicalExam: {
      durability: '표준',
      mobility: '양호',
      tacticalUnderstanding: '양호',
      orlandoProficiency: '표준',
      endurance: '우수',
      specialAbilityName: '특수 - 연기력',
      specialAbilityValue: '표준~양호 사이',
      specialAbilityDesc: '방호복 착용/미착용 상태를 완벽히 분별하는 연기 적성',
      overallGrade: '양호'
    },
    evaluations: [
      '항시 방호복을 착용하고 있으나, 이것이 어떤 콤플렉스 때문은 아닌 것으로 확인됨.',
      '의외로 특기를 보인 것은 연기력으로, 방호복을 착용한 상태와 착용하지 않은 상태를 정확히 분별함.',
      '여러 무기를 사용하긴 하나 근접 둔기류를 사용할 때 적성이 좋았음.'
    ],
    collapseTolerance: 'A',
    status: 'ACTIVE',
    securityClearance: 4,
    bioTitle: '지옵콕스 취재 기록 (GEOCOCCYX_FIELD_LOG)',
    bioNotes: `B: 저... 그, 지옵콕스에서 나왔습니다. 잠깐 취재 가능할까요?
G: 그 기자 집단인가? ...시간은 있으니 상관 없다.
B: 아, ㄱ, 감사합니다! 10분에서 15분정도 걸려요.
G: 알겠다.

Q: 평소에 어떻게 생활하고 계신가요?
A: 업무, 훈련, 식사, 임무. 주로 오큘러 제압을 맡는다.

Q: 요즘 특별히 바뀐 일이 있으신가요?
A: .....섹터 간 이동이 잦아졌다. 요즘들어 종족간 대립이 잦다.

Q: 선호하는 업무가 있으신가요? 있다면 그 이유는?
A: 없다.
Q: 엇... 없는 이유라도 말씀해 주실 수 있으신가요?
A: 업무보단 휴식을 선호한다.

Q: 아, 요나 씨가 게벨씨에 대해 말씀하시던데, 요나 씨에 대해 어떻게 생각하시나요?
A: 분위기를 파악하고 풀 줄 아는 사람이다.

Q: 최근에 고민은?
A: 팀장으로써의 역량이 부족한 것은 아닌지 생각한다.

Q: 혹시... 방호복 속 모습을 보여주실 수 있나요?
A: 어렵지 않다.
Q: ...ㅇ, 우와...
A: 별 문제라도?
Q: 아뇨, 그냥... 조금 놀랐어요.

Q: 오를란도가 있으시던데, 부작용 같은건 없나요?
A: 가끔 근육통이 생겨서 방호복을 착용하는데 거슬린다.

Q: 마지막으로... 이번에 새로 오신다는 분이 있는데 혹시 아시는게 있나요?
A: 팀장으로써 우선적으로 정보를 확인할 권리는 있으나... 그 자에 대해선 아는 정보가 없다.

B: 취재는 끝났습니다! 적극적인 참여 감사드립니다!
G: 방호복은 다시 착용해도 되겠나?
B: 아, 네! 그럼요. 방호복 속 모습은... 되게 의외시네요.
G: 자주 듣는다.`,
    combatLog: '라자로 3팀 \'브리칭\' 선봉 돌파 작전 완수. 근접 둔기류를 운용하여 붕괴체 방어선 강습 돌파 및 섹터 내 종족 간 분쟁 완충 구역 확보.',
    isTemplate: false
  },
  {
    id: 'CHAR-CAT-004',
    codeName: 'SMELT_FLAME // 프에논',
    name: '프에논',
    factionId: 'chinoiserie',
    factionName: '시누아즈리',
    race: '앤스',
    subRace: '늑대',
    gender: '여',
    height: '165cm',
    birthday: '01월 11일',
    origin: '시누아즈리',
    specialty: '채굴, 감정',
    role: '시누아즈리 광산 심부 채굴 및 광물 감정관',
    orlandoWeapon: {
      hasOrlando: true,
      name: '형성 - 제련',
      abilityType: '형성',
      abilityDescription: '불을 방출한다. 고열 화염으로 암반 파쇄 및 고순도 광석 제련을 보조함.',
      manifestationForm: '목걸이 형태',
      resonanceWarning: '단일 목걸이 착용 준수. 타 오를란도 접촉 시 화염 역류 및 신체 붕괴 위험'
    },
    physicalExam: {
      durability: '표준',
      mobility: '미흡',
      tacticalUnderstanding: '미흡',
      orlandoProficiency: '양호',
      endurance: '우수',
      specialAbilityName: '특수 - 시각공간능력',
      specialAbilityValue: '양호',
      specialAbilityDesc: '복잡한 갱도 지형 파악 및 광맥 공간 구조 인지',
      overallGrade: '표준'
    },
    evaluations: [
      '독립적인 성향이 강한 것으로 확인됨.',
      '타인과의 상호작용에서 영향을 표준 이상으로 받음.',
      '시누아즈리 자체에선 기동력이 미흡하나 지상에선 양호한 기동력을 보임.'
    ],
    collapseTolerance: 'B',
    status: 'ACTIVE',
    securityClearance: 3,
    bioNotes: '시누아즈리 출신의 앤스(늑대) 여성 광부 겸 광물 감정관. 신장 165cm, 생일은 1월 11일. 독립적인 성향이 강하면서도 타인과의 상호작용에 영향을 깊게 받는 섬세한 면모가 있다. 고산과 갱도 지형에 특화된 시각공간능력과 불을 방출하는 목걸이형 오를란도 \'형성 - 제련\'을 활용하여 험준한 암반 채굴과 원석 감정에서 독보적인 기여를 한다.',
    combatLog: '시누아즈리 심부 갱도 발파 지원 임무 수행. 목걸이형 제련 화염으로 암벽 균열 확장 및 고위험 잔해물 용융 제거. 거친 환경 속에서도 높은 인내도로 장시간 채굴 임무 완수.',
    isTemplate: false
  },
  {
    id: 'CHAR-CAT-005',
    codeName: 'DISRUPTOR // 엘피우스',
    name: '엘피우스',
    factionId: 'chinoiserie',
    factionName: '시누아즈리',
    race: '앤스',
    subRace: '늑대',
    gender: '여',
    height: '165cm',
    birthday: '11월 16일',
    origin: '시누아즈리',
    specialty: '통제, 감독',
    role: '시누아즈리 현장 총괄 감독관 및 전술 통제관',
    orlandoWeapon: {
      hasOrlando: true,
      name: '사고 - 변심',
      abilityType: '사고',
      abilityDescription: '대상의 피아식별을 방해한다. 오큘러 또는 적성 개체의 신경망 및 인지 계통을 교란함.',
      manifestationForm: '끌과 비슷한 형태',
      resonanceWarning: '단일 파지 필수. 추가 오를란도 동시 기동 시 착용자 본인의 인지 체계 혼선 및 붕괴 위험'
    },
    physicalExam: {
      durability: '미흡',
      mobility: '표준',
      tacticalUnderstanding: '우수',
      orlandoProficiency: '표준',
      endurance: '부족',
      specialAbilityName: '특수 - 지휘력',
      specialAbilityValue: '우수',
      specialAbilityDesc: '작전 통제 감독 및 전술 지휘 체계 조율',
      overallGrade: '표준'
    },
    evaluations: [
      '자신의 한계나 강점을 명확히 알고 있음.',
      '전투 능력은 평균 이하이나 지휘나 전술 이해도 자체는 높은 것으로 확인됨.',
      '시누아즈리 자체에선 신체 능력이 미흡하나 지상에선 표준까지 올라가는 것으로 확인됨.'
    ],
    collapseTolerance: 'B',
    status: 'ACTIVE',
    securityClearance: 4,
    bioNotes: '시누아즈리 소속의 앤스(늑대) 여성 현장 감독관. 신장 165cm, 생일은 11월 16일. 자신의 육체적 한계와 지휘관으로서의 강점을 명확히 파악하고 있는 냉철한 전략가이다. 직접적인 교전 능력은 낮으나 높은 전술 이해도와 뛰어난 지휘력으로 광산 및 방어 대원들을 효과적으로 통제하며, 끌 형태의 오를란도 \'사고 - 변심\'을 통해 적의 피아식별을 교란한다.',
    combatLog: '시누아즈리 외곽 고산 토착 생물 침입 사태 시 전술 지휘반 통제. 끌 형태의 변심 이능력으로 침범 개체들의 피아인식을 교란시켜 방어선 사수 성공.',
    isTemplate: false
  },
  {
    id: 'CHAR-CAT-006',
    codeName: 'CORVUS // 제피로스',
    name: '[미정] 작전 대원',
    factionId: 'caherdin',
    factionName: '카헤르딘 (케 에딘)',
    race: '알토',
    gender: '여성 (콘트랄토)',
    role: '해무 고공 정찰 및 급폭',
    orlandoWeapon: {
      hasOrlando: true,
      name: '오를란도: 풍절(風切)',
      abilityDescription: '대기 중의 수증기와 기류를 압축하여 예리한 진공 칼날로 사출하는 비가시적 참격',
      manifestationForm: '비행 날개 깃털 형상의 백금 뱅글 (단일 장착)',
      resonanceWarning: '타 오를란도 접근 엄격 차단. 이중 장착 시 즉각적 신경 붕괴 진행'
    },
    collapseTolerance: 'A',
    status: 'ACTIVE',
    securityClearance: 4,
    bioNotes: '[캐릭터 기본 프로필 템플릿 슬롯] 카헤르딘 상공에서 짙은 해무 속 오큘러의 접근을 탐지하는 고공 정찰관. 당황할 경우 알토 공용어로 격렬하게 반응하는 특성이 있음.',
    combatLog: '[작전 기록 슬롯] 186f 해역 정찰 임무 중 오큘러 7개체 궤멸 확인.',
    isTemplate: true
  },
  {
    id: 'CHAR-CAT-007',
    codeName: 'IRON_WALL // 발레리아',
    name: '[미정] 방호 작전관',
    factionId: 'agravain',
    factionName: '아그라베인 (메네실)',
    race: '인간',
    gender: '남성',
    role: '산악 단애 중장갑 방호',
    orlandoWeapon: {
      hasOrlando: true,
      name: '오를란도: 견벽(堅壁)',
      abilityDescription: '전방 5미터 범위에 케루빔 반발 척력장을 전개하여 날붙이를 흡착한 오큘러의 돌진을 무력화함',
      manifestationForm: '육중한 방패 중앙에 압착 결합된 팔각형 인장',
      resonanceWarning: '정격 내구성 유지 중. 파손 균열 감지 시 즉각 폐기 절차 개시 필요'
    },
    collapseTolerance: 'B',
    status: 'ACTIVE',
    securityClearance: 3,
    bioNotes: '[캐릭터 기본 프로필 템플릿 슬롯] 아그라베인 북벽 방위선 2번 초소장. 붕괴에 취약한 인간의 한계를 극복하기 위해 엄격한 케루빔 접촉 방호복 착용 수칙을 준수함.',
    combatLog: '[작전 기록 슬롯] 메네실 북벽 수성전에서 오를란도 척력장으로 전선 사수.',
    isTemplate: true
  },
  {
    id: 'CHAR-CAT-008',
    codeName: 'TETRA // 하칸',
    name: '[미정] 심층 격리관',
    factionId: 'esperanto',
    factionName: '에스페란토 (라자로)',
    race: '하레',
    gender: '남성',
    role: '심층 붕괴 돌파 및 격리 수색',
    orlandoWeapon: {
      hasOrlando: false,
      name: '미장착 (자연 내성 운용)',
      abilityDescription: '오를란도를 장착하지 않고, 하레 종족 고유의 4완 완력과 높은 붕괴 내성만을 기반으로 근접 타격 무기 운용',
      manifestationForm: '없음 (오를란도 미소지)',
      resonanceWarning: '공명 위험 없음 (오를란도 미착용 상태)'
    },
    collapseTolerance: 'S',
    status: 'ACTIVE',
    securityClearance: 4,
    bioNotes: '[캐릭터 기본 프로필 템플릿 슬롯] 네 개의 팔을 자유자재로 다루는 하레 종족 선봉원. 산모의 케루빔 피폭 돌연변이로 탄생한 하레 종족 특성상, 붕괴에 대해 다른 종족 대비 압도적인 면역력을 지님.',
    combatLog: '[작전 기록 슬롯] 라자로 지하 격리구역 붕괴체 근접 제압 성공.',
    isTemplate: true
  },
  {
    id: 'CHAR-CAT-009',
    codeName: 'DRACO // 카엘룸',
    name: '[미정] 유격 사령관',
    factionId: 'caherdin',
    factionName: '카헤르딘 (케 에딘)',
    race: '케토',
    gender: '남성',
    role: '중거리 강습 및 꼬리 격투',
    orlandoWeapon: {
      hasOrlando: true,
      name: '오를란도: 용염(龍炎)',
      abilityDescription: '케토 종족의 타격 꼬리 말단에 열 에너지를 무의식적으로 방출하여 케루빔 흡착 금속을 순간 용융시킴',
      manifestationForm: '꼬리 기저부에 감겨 있는 나선형 흑색 고리',
      resonanceWarning: '단일 장착 유지. 타 오를란도 접촉 시 꼬리 말단부터 붕괴 괴사 유발 위험'
    },
    collapseTolerance: 'A',
    status: 'ACTIVE',
    securityClearance: 3,
    bioNotes: '[캐릭터 기본 프로필 템플릿 슬롯] 머리의 뿔과 강력한 파충류 꼬리를 가진 케토 종족. 꼬리로 중량급 화기나 물건을 자유자재로 조작하며 인간과 유사한 독자 언어를 구사함.',
    combatLog: '[작전 기록 슬롯] 해상 부유 도크 야간 기습 방어전 참가.',
    isTemplate: true
  },
  {
    id: 'CHAR-CAT-010',
    codeName: 'CORONA // 실비아',
    name: '[미정] 전초 중대장',
    factionId: 'agravain',
    factionName: '아그라베인 (메네실)',
    race: '아페',
    gender: '여성',
    role: '돌격 및 거점 제압',
    orlandoWeapon: {
      hasOrlando: true,
      name: '오를란도: 극각(戟角)',
      abilityDescription: '신체에 자라난 각질 뿔을 촉매 삼아 반경 10m 내의 금속성 잔해를 자력으로 제어 및 탄막 투사',
      manifestationForm: '어깨 돌출 뿔에 각인된 미세 룬 슬롯',
      resonanceWarning: '신체 일체형 장착 상태. 추가 오를란도 파지 절대 엄금'
    },
    collapseTolerance: 'B',
    status: 'MONITORING',
    securityClearance: 3,
    bioNotes: '[캐릭터 기본 프로필 템플릿 슬롯] 신장 182cm의 아페(각인종) 여성 대원. 어깨와 머리에 12cm가 넘는 강인한 뿔이 자라나 있으며 강인한 골격을 지님.',
    combatLog: '[작전 기록 슬롯] 186f 고지대 수림 지대 정찰 임무 완수.',
    isTemplate: true
  },
  {
    id: 'CHAR-CAT-EMPTY-01',
    codeName: 'RESERVE // [코드네임 미정]',
    name: '[사용자 신규 입력용 슬롯 1]',
    factionId: 'independent',
    factionName: '소속 미정 (신규 슬롯)',
    race: '기타',
    gender: '미지정',
    role: '[역할 및 보직 입력 대기]',
    orlandoWeapon: {
      hasOrlando: false,
      name: '[오를란도 무장 명칭 입력 슬롯]',
      abilityDescription: '[발현 이능력 설명 입력 슬롯]',
      manifestationForm: '[발현 형상 및 착용 부위 입력 슬롯]',
      resonanceWarning: '[공명 및 붕괴 주의사항 입력 슬롯]'
    },
    collapseTolerance: 'UNKNOWN',
    status: 'EMPTY_SLOT',
    securityClearance: 1,
    bioNotes: '새로운 캐릭터 설정을 채워 넣을 수 있는 공란 템플릿 슬롯이다. 우측 편집 또는 신규 등록 기능을 통해 원하는 세계관 속 캐릭터의 정보(종족, 오를란도 이능력, 소속 도시)를 자유롭게 기록할 수 있다.',
    combatLog: '[미기록] 신규 작전 데이터 대기 중...',
    isTemplate: true
  }
];

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    id: 'TERM-01',
    code: 'DOC-186F-01',
    title: '케터펄러-186f',
    titleEn: 'Caterpillar-186f',
    category: '기후/지리',
    summary: '안개와 폭우가 잦고 케루빔 활성도가 상시 변동하는 고립된 세계관의 본무대.',
    content: '외지인에게 거의 알려지지 않은 고립 구역. 광활한 평야를 기본으로 불규칙한 대삼림과 바위산이 형성되어 있다. 짙은 안개와 폭우가 동반될수록 대기 중 케루빔의 활성도가 급상승하며 붕괴 재해의 위험이 격화된다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['칸토', '케루빔', '붕괴']
  },
  {
    id: 'TERM-02',
    code: 'MAT-CRB-01',
    title: '케루빔',
    titleEn: 'Cherubim',
    category: '물질/기술',
    summary: '극도로 단단하고 가벼우며 성형이 쉬운 금속. 주변 금속을 흡수하여 경도(모스 7~8 포화)와 분진을 증폭시키며, 원초 상태와 분진 및 문명적 영향을 포괄하는 핵심 물질.',
    content: `케터펄러 전역에서 발견되는 금속. 극도로 단단하고 가벼우며 성형이 용이할 뿐만 아니라, 다른 금속과 결합하여 합금을 제작하더라도 물성상의 결함이 발생하지 않는 독특한 특성을 지닌다. 이러한 특성 때문에 한때는 사실상 만능에 가까운 금속으로 여겨졌으며, 각종 산업과 무기, 구조물의 소재로 활용되었다. 케루빔과 동일하거나 유사한 결정 구조를 가진 물질에 선택적으로 끌림을 보인다.

그러나 케루빔은 주변의 금속을 흡수하는 특성을 지닌다. 흡수한 금속은 케루빔의 물성에 영향을 주며, 이에 따라 케루빔의 경도와 분진 발생량이 점차 증가한다. 다만 그 변화가 무한정 지속되는 것은 아니며, 경도는 모스 굳기계 기준 석영(7)과 황옥(8) 사이의 수준에 도달할 시 포화 상태에 도달해 더 증가하지 않고 일정하게 유지된다. 이 상태에서도 금속을 흡수하려는 성질은 여전히 나타나지만 포화 상태이기에 잉여 금속을 분진으로 뿜어낸다.

분진 발생량은 경도에 비례하여 증가한다. 경도가 높아질수록 새로운 물질을 받아들일 수 없는 포화 상태에 가까워져 금속이 흡수되는 속도가 더뎌지지만 그만큼 분진이 더더욱 흩뿌려진다. 이 분진은 케루빔이 띄는 비슷한 구조의 물체를 끌어당기려는 성질에 끌어당겨져 케루빔으로부터 일정 범위를 벗어나지 않는다. 이 분진의 확산 범위는 케루빔의 크기가 커질수록 끌어당기는 성질이 강해지기 때문에 오히려 좁아진다.

■ 원초 상태 (Raw State)
금속을 흡수하기 이전의 케루빔을 '원초 상태의 케루빔'이라 부른다. 이 상태에서는 케루빔의 분진 특성이 나타나지 않기 때문에 경도와 분진 활성화율이 상대적으로 낮으며, 다른 금속이나 재료와의 가공에도 유리하다.
현재 케루빔은 그 자체가 지닌 위험성 때문에 원형, 즉 케루빔 단독으로 그대로 사용되는 사례가 거의 없으며, 원초 상태의 케루빔을 가공하여 위험성을 억제하거나 다른 형태로 활용하려는 기술이 발달했다. 그 대표적인 결과물이 오를란도이다. 추가로, 다른 금속을 흡수한 형태의 케루빔은 흔하다. 원초 상태의 케루빔을 발견하는 것이 희귀할 뿐이다.

■ 분진 (Cherubim Dust)
붕괴 현상을 일어나게 하는 주된 원인. 케루빔이 주변 금속을 흡수하며 남기는 가루가 공기 중을 떠다니며 붕괴를 발생시킨다. 바깥에서부터 파고드는 것이기에 분진 농도를 낮춰 붕괴 속도를 늦출 수 있지만, 이미 피하조직까지 파고든 분진은 완전히 제거하지 못한다. 피하조직으로 파고들기 전에 분진이 묻은 부분을 도려내거나 긁어낸다면 제거할 수 있다.

■ 케루빔의 문명적 영향 (Civilizational Impact)
케루빔은 단순한 산업 재료를 넘어 케터펄러 문명 전반에 영향을 끼친 물질이다. 금속을 흡수하는 특성과 붕괴 현상 때문에 기존의 산업과 무기 체계가 크게 변화했으며, 케루빔을 피하고 통제하기 위한 기술과 사회 구조 역시 함께 발전했다.
한편 케루빔은 위험성만을 가진 물질도 아니다. 오를란도의 개발처럼 인류가 그 특성을 통제하고 활용하려는 기술 역시 존재하며, 그 결과 케루빔은 문명을 위협하는 재해의 근원이면서 동시에 문명이 의존하는 중요한 자원이라는 양면적인 위치를 차지하게 되었다.`,
    dangerLevel: 'CRITICAL',
    relatedTerms: ['오를란도', '붕괴', '오큘러']
  },
  {
    id: 'TERM-03',
    code: 'MAT-ORL-02',
    title: '오를란도',
    titleEn: 'Orlando',
    category: '물질/기술',
    summary: '붕괴 위험을 억제하기 위해 원초 상태의 케루빔으로 제작된 특수 매개체. 착용자의 무의식이 형태를, 금속이 이능력을 조성하며 공명 법칙을 엄수함.',
    content: `붕괴 위험을 억제하기 위해 제작된 특수한 케루빔 매개체. 주변 금속을 흡수하지 않아 비교적 가공이 쉬운 원초 상태의 케루빔을 가공하여 제작한다.

오를란도는 신체에 착용하는 방식으로 사용되며, 착용자의 무의식에 잠재된 모습에 따라 형태가 고정된다. 제조 과정에서 다양한 금속의 성질과 원초 상태의 케루빔이 결합하면서, 일반적인 금속으로는 설명하기 어려운 이능력이 발현된다. 형태는 착용자의 무의식이, 능력은 금속이 조성한다.

■ 발현 이능력 3대 계통군
1. 변체(變體, Metamorphosis): 생명체의 신체 기능과 물리적 구조에 직접 영향을 미치는 계통 (부위 변형, 신체 역량 강화·약화, 치료 및 재생).
2. 형성(形成, Materialization): 케루빔 본연의 금속 흡수 특성을 매개로 흡수된 금속이나 에너지를 변환·구현하는 계통 (고체 물체 형성, 원소 및 에너지 방출).
3. 사고(思考, Cognition): 타 생명체의 사고와 인지 체계에 간섭하는 계통 (접촉, 교란, 감각 변조 및 연산 부담 요약).

■ 공명 법칙 (Law of Resonance)
오를란도에는 절대적인 금기가 하나 존재한다. 복수의 오를란도를 동시에 착용하거나 서로 접촉시키는 행위는 금지된다.
서로 다른 오를란도가 접촉할 경우 매개체 사이에서 공명이 발생하며, 이 현상으로 인해 붕괴가 즉각적으로 진행될 수 있다. 이 때문에 오를란도는 기본적으로 하나만 사용하는 것이 원칙이다.`,
    dangerLevel: 'RESTRICTED',
    relatedTerms: ['케루빔', '붕괴']
  },
  {
    id: 'TERM-04',
    code: 'ANO-CLP-01',
    title: '붕괴',
    titleEn: 'Collapse',
    category: '이상현상',
    summary: '케루빔 피폭으로 생명체의 육신이 해체·재조립되는 불가역적 재해. 생체는 1~1.5시간, 시체는 5~10분 소요.',
    content: '케루빔 접촉이나 오를란도 공명 피폭 시 발생하는 불가역적 신체 변이 재해이다. 육체가 세포 단위로 분해된 후 기괴한 형상으로 재조립된다.\n\n생명체마다 체질적 내성이 상이하나, 인간은 대략 1시간~1시간 30분가량 노출 시 붕괴에 도달한다. 반면 면역 방어 기제가 정지된 시체는 불과 5분~10분 사이에 급속 붕괴가 진행되어 오큘러로 변한다. 붕괴된 개체는 고등 지성과 기억을 온전히 상실하며, 본능적인 공격성과 기괴한 비명만을 표출한다.',
    dangerLevel: 'CRITICAL',
    relatedTerms: ['케루빔', '오큘러', '하레']
  },
  {
    id: 'TERM-05',
    code: 'ANO-OCU-02',
    title: '오큘러',
    titleEn: 'Ocular',
    category: '이상현상',
    summary: '붕괴를 거쳐 기괴하게 왜곡된 변이체. 팔이 늘어나거나 다리가 결손되며 자성 피부를 띰.',
    content: '케루빔 붕괴를 겪은 생명체(및 급속 변이된 시체)의 총칭이다. 팔이 비정상적으로 기괴하게 늘어나거나 다리가 결손되는 등 끔찍한 기형 형상을 나타낸다.\n\n변이된 피부 조직이 약한 자성을 띠어 지표나 잔해 속 날붙이, 칼날, 금속 파편들이 온몸에 흡착되어 박혀 있는 경우가 흔하다. 피폭 전 종족 특성에 따라 외형과 행동 패턴에 차이가 있으며, 거점 도시의 방벽을 위협하는 주요 재해 요인이다.',
    dangerLevel: 'CRITICAL',
    relatedTerms: ['붕괴', '케루빔', '카헤르딘', '메네실', '라자로']
  },
  {
    id: 'TERM-06',
    code: 'CLI-CNT-01',
    title: '칸토',
    titleEn: 'Canto',
    category: '기후/지리',
    summary: '6개월 주기 온난기와 한랭기가 교대되는 사이의 10일간의 새벽빛 과도기.',
    content: '케터펄러-186f의 독특한 계절 순환 메커니즘. 6개월 간격의 따뜻한 계절과 추운 계절이 뒤바뀔 때 찾아오는 10일간의 기간. 이 동안은 하루 종일 몽환적이고 서늘한 새벽의 기온과 옅은 박명 날씨가 지속된다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['케터펄러-186f']
  },
  {
    id: 'TERM-07',
    code: 'SOC-ALT-01',
    title: '알토 & 콘트랄토',
    titleEn: 'Alto & Contralto',
    category: '종족/지성체',
    summary: '등에 날개가 돋아난 비행 가능 유익종. 여성 개체는 콘트랄토로 명명됨.',
    content: '인간과 흡사한 외형이나 등 뒤에 1쌍에서 최대 3쌍에 이르는 날개가 자라나는 종족. 여성 알토는 전통적으로 "콘트랄토"라 불린다. 극도로 당황하거나 놀랐을 때 타 종족은 식별할 수 없는 독자 언어(알토 공용어, 주로 거친 은어)를 무의식중에 구사한다. 카헤르딘의 주류 인구층.',
    dangerLevel: 'STABLE',
    relatedTerms: ['카헤르딘', '앤스', '이종족']
  },
  {
    id: 'TERM-08',
    code: 'SOC-ANC-02',
    title: '앤스',
    titleEn: 'Ance',
    category: '종족/지성체',
    summary: '동물의 귀와 꼬리 등 생물학적 특징을 보유한 온화한 수인 종족군.',
    content: '‘앤스’는 단일 종만을 뜻하는 것이 아니며, 인간의 ‘태반류’처럼 가장 포괄적인 대분류이다. 그 산하에 여우, 늑대, 고양이, 맹수 등 모체 동물의 감각 기관과 외형적 특징(귀, 꼬리, 발톱 등)이 발현된 수많은 소분류 종족들이 분포한다. 케터펄러의 토착 종족 중 가장 큰 범주를 차지하며, 인간과 오랜 기간 중립적인 공존 관계를 맺어왔다. 돌발 상황이나 공포에 직면할 경우 해당 모체 동물의 울음소리를 내는 생리적 반사 습성이 있다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['아페', '알토 & 콘트랄토', '케토', '이종족']
  },
  {
    id: 'TERM-09',
    code: 'SOC-APE-03',
    title: '아페',
    titleEn: 'Ape',
    category: '종족/지성체',
    summary: '신체 각 부위에 견고한 각질 뿔이 돋아나는 건장한 체격의 각인종.',
    content: '머리뿐만 아니라 팔꿈치나 어깨 등 신체 전반에 단단한 골격 각질 뿔이 자라나는 종족. 성체의 경우 머리의 뿔이 15cm 이상 성장하기도 한다. 인간보다 월등히 큰 평균 체격(남성 187cm, 여성 179cm)을 지녀 중장갑 보병이나 산악 방어선에서 강한 활약을 보인다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['아그라베인', '앤스', '이종족']
  },
  {
    id: 'TERM-10',
    code: 'SOC-KTO-04',
    title: '케토',
    titleEn: 'Keto',
    category: '종족/지성체',
    summary: '뿔과 강인한 파충류 꼬리를 가진 용인 형태의 고대 원주민 종족.',
    content: '용을 연상케 하는 두부 뿔과 강력한 근육질의 파충류 꼬리를 지닌 종족. 꼬리의 힘이 매우 강하여 무거운 장비나 물건을 들어 올리는 데 능숙하다. 고유 언어 체계가 있으나 발음과 어순이 인간의 언어와 매우 유사하게 들린다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['카헤르딘', '앤스', '이종족']
  },
  {
    id: 'TERM-11',
    code: 'SOC-HRE-05',
    title: '하레',
    titleEn: 'Hare',
    category: '종족/지성체',
    summary: '네 개의 팔을 지녔으며 붕괴에 대해 압도적 저항력을 보유한 변이 종족.',
    content: '과거 임신 중인 인간 산모가 케루빔 피폭에 의한 경미한 붕괴 현상을 겪었을 때, 태아에게 일어난 유전자 돌연변이가 대대로 정착되어 형성된 4완 종족. 순혈종보다 타 종족과의 혼혈종 비율이 높다. 다른 모든 종족에 비해 케루빔 붕괴에 대한 체질적 내성이 극도로 뛰어나 위험 지대 작전에 우선 투입된다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['붕괴', '에스페란토', '라자로']
  },
  {
    id: 'TERM-12',
    code: 'SOC-HYB-06',
    title: '혼혈종 (하이브리드)',
    titleEn: 'Hybrids',
    category: '종족/지성체',
    summary: '인간과 이종족, 또는 서로 다른 이종족 간 결합으로 탄생한 다원적 융합 세대.',
    content: '인간과 이종족, 혹은 서로 다른 이종족(예: 알토와 앤스, 케토와 아페) 간의 결합을 통해 태어난 혼혈 혈통. 양측의 신체적 특질(날개와 동물 귀의 동시 발현, 골격 뿔과 4완 구조 등)이 복합적으로 계승되며, 이동 도시 에스페란토에서 가장 높은 인구 비율을 차지하고 있다. 붕괴 저항도 역시 부모 세대의 유전적 조합에 따라 유동적인 스펙트럼을 나타낸다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['이종족', '에스페란토', '하레']
  },
  {
    id: 'TERM-12-FAUNA',
    code: 'ECO-FAU-01',
    title: '토착 야생 생물군 (자연 동물)',
    titleEn: 'Indigenous Fauna',
    category: '토착 생물',
    summary: '인간형 지성을 갖춘 이종족과 명확히 구분되는, 케터펄러 야생 자연 생태계를 구성하는 무지성 동물군.',
    content: '고등 언어와 도구 사용 능력을 보유한 원주민 이종족(알토, 앤스, 아페 등)과 달리, 지구의 자연 동물처럼 순수한 본능과 야생 생태계 사슬에 속해 있는 생물종이다.\n\n상시 짙은 안개와 폭우, 케루빔 농무에 적응하여 야간 시각과 청각, 수중 호흡 기관 등이 특화되어 있으며, 붕괴에 노출될 경우 공격적인 야생 오큘러 변이체로 쉽게 전락하므로 거점 도시 외곽 방벽에서는 야생 생물군의 접근을 정밀 감시하고 있다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['오큘러', '붕괴']
  },
  {
    id: 'TERM-12-FAUNA-MIST',
    code: 'ECO-FAU-02',
    title: '해무 비행수 및 심해 회유어',
    titleEn: 'Mist Flyers & Abyssal Swarms',
    category: '토착 생물',
    summary: '카헤르딘 외곽 대양과 단애 절벽에 서식하는 비지성 해양·비행 야생 동물.',
    content: '폭우와 해무 속을 활공하는 맹금류 형태의 토착 조류와 대심도 바다를 유영하는 거대 어류군. 케루빔 미세 분진을 먹이 사슬을 통해 축적하므로 장기 접촉 시 독성 위험이 있어 가공 식량화 시 엄격한 케루빔 정화 프로토콜을 거쳐야 한다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['카헤르딘', '케루빔']
  },
  {
    id: 'TERM-13',
    code: 'CIT-CAH-01',
    title: '카헤르딘 & 케 에딘',
    titleEn: 'Caherdin & Ke Edin',
    category: '도시/기관',
    summary: '이종족 중심의 자립형 대형 이동 도시 카헤르딘과, 현장 제압·구조부터 아뎀 구조물 및 산업시설의 붕괴 안전까지 총괄하는 복합 재난대응·도시유지 기구 케 에딘.',
    content: '■ 카헤르딘 (Caherdin)\n이종족을 중심으로 구성된 대형 이동 도시. 오큘러와 붕괴 현상이 확산되던 초기부터 살아남은 집단을 중심으로 건설되었으며, 외부 환경과 다른 도시로부터의 의존을 최소화하기 위해 도시 자체에서 식량·자원·부품·에너지의 상당 부분을 생산하는 자립형 도시로 발전했다.\n\n카헤르딘은 다양한 종족의 생활 방식을 하나로 통합하기보다 각 종족의 특성을 도시의 유지를 위해 적극적으로 사용한다. 그 결과 종족별로 특화된 산업과 기술이 발달했으며, 직업과 생활권이 종족의 특성과 강하게 연결되어 있다. 이는 도시의 높은 생산성과 자립성을 유지하는 데 기여했지만, 동시에 종족에 따른 직업 고정관념과 사회적 갈등을 낳기도 했다.\n\n또한 카헤르딘은 오랜 역사를 가진 아뎀 가운데 하나로, 건설 이후 수차례의 확장과 개조를 거쳤다. 새로운 기술이 도입될 때마다 기존 시설을 철거하기보다는 보수하거나 다른 용도로 전환하는 방식이 선호되었기 때문에, 도시 곳곳에는 서로 다른 시대의 구조물과 설비가 공존한다. 수리와 재활용 기술은 이미 도시의 중요한 산업으로 자리 잡았다.\n\n카헤르딘은 새로운 것을 만드는 것만큼이나 이미 존재하는 것을 보존하고 활용하는 것을 중요하게 여긴다. 이러한 성향은 도시의 문화와 가치관에도 깊게 남아 있다. 에스페란토가 \'너는 다르지만 같이 살아야 한다\'라면, 카헤르딘은 \'너는 다르니까 그 차이를 어떻게든 쓸모 있게 만들어야 한다.\'에 가깝다.\n\n물론 이런 가치관이 항상 이득을 가져오진 않는다. 장인 정신이 보수적인 성향으로 변모하고, 변화보단 유지를 택하게 되어가며 한 분야에 특화된 자가 일시적으로 자리를 비우기라도 한다면 그에 관한 시스템이 주춤하거나 멈출 수밖에 없다.\n\n■ 케 에딘 (Ke Edin)\n카헤르딘의 붕괴 대응 기관. 현장 구조와 오큘러 제압뿐만 아니라 아뎀의 구조물과 산업시설에서 발생하는 붕괴 위험을 감시하고 관리한다.\n\n도시 외부의 오큘러 정찰 및 제압, 민간인 구조, 사체 수습, 케루빔 오염 지역 조사, 붕괴 발생 지역의 격리 등을 담당하며, 필요할 경우 도시의 동력시설과 주요 산업시설에 발생한 케루빔 관련 사고에도 직접 투입된다.\n\n카헤르딘의 자립적인 산업 구조와 오래된 설비를 관리해야 하기 때문에 케 에딘은 구조·제압 인력뿐 아니라 공학, 정비, 의료, 산업 안전 분야의 인력까지 폭넓게 포함하는 조직으로 발전했다. 이 때문에 케 에딘은 붕괴 대응 기관이라기보다 재난 대응 조직과 도시 유지 기관의 성격을 동시에 갖는다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['알토 & 콘트랄토', '케토', '이동 도시 (아뎀)', '오큘러', '붕괴']
  },
  {
    id: 'TERM-14',
    code: 'CIT-AGR-02',
    title: '아그라베인 & 메네실',
    titleEn: 'Agravain & Menesil',
    category: '도시/기관',
    summary: '인간 중심의 표준화된 대형 이동 도시 아그라베인과, 규정과 지침에 따라 붕괴 예방·케루빔 취급 감독 및 현장 제압을 수행하는 대응 기구 메네실.',
    content: '■ 아그라베인 (Agravain)\n인간을 중심으로 구성된 대형 이동 도시. 오큘러와 붕괴 현상이 확산되던 초기, 카헤르딘 다음으로 안전한 생활권과 안정적인 문명 체계를 확보하기 위해 건설되었으며 이후 도시의 규모와 인구가 증가하면서 세 이동 도시 중 행정, 산업, 연구의 중심지 가운데 하나로 발전했다.\n\n아그라베인은 도시 전체에 통용될 수 있는 공통된 기준과 규칙을 세우는 것을 중시한다. 시설의 규격, 교육 과정, 의료 체계, 교통망, 산업 공정 등 가능한 많은 영역을 표준화하여 누구나 같은 체계 안에서 생활하고 일할 수 있도록 만들어졌다.\n\n이러한 성향은 거대한 이동 도시를 안정적으로 유지하는 데 큰 도움이 되었다. 특정 개인이나 종족의 경험 대신 문서화된 규정과 표준화된 절차를 바탕으로 인력이 교체되어도 시설과 산업이 비교적 안정적으로 유지된다. 또한 새로운 기술을 도입할 때에도 기존 체계와의 호환성을 검증하고 단계적으로 적용하는 방식을 선호한다.\n\n그러나 지나친 표준화는 언제나 효율적인 결과만을 가져오지는 않았다. 개인이나 집단, 소수보다는 전체적인 기준을 우선하게 되면서, 기존 규정으로는 다루기 어려운 상황이나 예외적인 개체를 받아들이는 데 취약한 모습을 보이기도 한다. 새로운 방법이 기존 체계와 충돌할 경우 그것이 실제로 더 효율적이더라도 도입이 지연되는 경우가 있으며, 한 번 정착한 규정과 제도는 수정하는 데 상당한 시간과 비용이 필요하다.\n\n결국 아그라베인의 사회는 “모두가 같은 기준 아래에서 살아야 함께 살아남을 수 있다”는 생각 아래로 뭉쳤다.\n\n■ 메네실 (Menesil)\n아그라베인의 붕괴 대응 기관. 오큘러의 제압과 민간인 구조뿐만 아니라 붕괴 현상의 예방과 관리, 도시 내 케루빔 취급 규정의 감독 등을 담당한다.\n\n메네실은 규정과 절차를 가장 중시하는 조직으로, 현장 인력 역시 표준화된 장비와 행동 지침에 따라 움직이는 것을 원칙으로 한다. 붕괴 위험 지역의 통제, 케루빔 취급 시설의 검사, 사체 수습 절차의 감독, 오큘러 발생 원인 조사 등 현장과 행정 양쪽의 업무를 폭넓게 담당한다.\n\n다만 규정을 중시하는 만큼, 예측하기 어려운 현장 상황에서는 오히려 대응이 늦어지는 경우도 있다. 규정상 허용되지 않은 행동을 선택해 생명을 구할 것인지, 규정을 지켜 추가적인 위험을 막을 것인지가 메네실 내부에서 반복적으로 논쟁되는 문제이기도 하다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['아페', '오를란도', '이동 도시 (아뎀)', '오큘러', '붕괴']
  },
  {
    id: 'TERM-15',
    code: 'CIT-ESP-03',
    title: '에스페란토 & 라자로',
    titleEn: 'Esperanto & Lazaro',
    category: '도시/기관',
    summary: '이종족과 인간이 섞여 살며 미로 같은 섹터 구조를 형성한 이동 도시 에스페란토와, 최전선에서 인명 구조와 사체 수습을 전담하는 현장 대응 조직 라자로.',
    content: '■ 에스페란토 (Esperanto)\n이종족과 인간이 섞여 사는 이동 도시. 다양한 문화와 생활 방식이 섞이며 독특한 도시 문화를 형성했다. 그러나 다양한 종족이 한 공간을 같이 사용하는 만큼 여러 사항이 상충한다. 대표적으로 복잡한 미로같은 섹터 구조가 있다. 서로 다른 종족들의 생활 환경을 수용하기 위해 한 섹터 안에서도 환경, 시설의 구성 등이 크게 다르다.\n\n도시의 이름은 서로 다른 존재들이 함께 살아갈 수 있는 사회를 만드려 노력했던 \'에스페란토 데 베네프\'의 이름에서 따왔다. 그러나 통합 대신 끝없는 타협과 갈등이 찾아왔다. 모두가 같이 살아가야 했기에 끊임없이 타협하고 배려하고 갈등하며 치열하게 살아간다.\n\n■ 라자로 (Lazaro)\n붕괴 대응 기관... 이라곤 하나 현장직에 가깝다. 붕괴와 오큘러로부터 사람을 직접 구하는 현장 대응 조직에 가깝다.\n\n도시 외부에 고립된 민간인의 구조, 오큘러의 제압, 사망자의 수습, 붕괴 위험 지역의 통제 등을 담당하며, 다양한 종족이 공존하는 에스페란토의 특성상 종족별 생리학과 약학 역시 발전했다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['하레', '앤스', '이동 도시 (아뎀)', '오큘러', '붕괴']
  },
  {
    id: 'TERM-16',
    code: 'CIT-ADM-00',
    title: '이동 도시 (아뎀)',
    titleEn: 'Mobile City (Adem)',
    category: '도시/기관',
    summary: '오큘러의 위협을 피해 문명을 보존하기 위해 건조된 50.40~75.40㎢ 규모의 거대 이동 플랫폼. 섹터 단위 구획과 3층 구조(생활층·지지층·동력층)를 갖춘 방주이자 문명의 구조적 족쇄.',
    content: '케터펄러의 기술력을 총동원하여 건조된 거대한 이동형 플랫폼. 오큘러의 위협을 회피하여 안전한 생활권을 확보하고, 폐쇄된 환경 속에서도 문명을 유지·발전시키기 위해 탄생했다. 이러한 이동 도시들을 총칭하여 ‘아뎀(Adem)’이라 부른다.\n\n가장 거대한 아뎀의 면적은 약 75.40㎢에 달하며, 가장 작은 아뎀조차 50.40㎢에 달한다. 명칭 그대로 거대한 이동 ‘도시’ 그 자체이며, 방대한 규모를 효율적으로 관리하기 위해 전체 영역을 여러 섹터(Sector)로 구획한다. 섹터는 아뎀을 구성하는 기본 단위로, 각각 독립적인 구조와 시설을 갖추며 서로 맞물려 하나의 거대한 도시를 형성한다.\n\n아뎀은 크게 상층·중층·하층의 세 층으로 구분된다. 상층은 주거·상업·행정·의료 등의 시설이 위치한 생활층, 중층은 도시 전체를 지지하고 각종 물류·설비가 집중된 지지층, 하층은 도시의 동력기관과 발전·에너지 시설이 집중된 동력층이다. 생활층은 지상으로부터 상당히 높은 위치에 있기 때문에 사람과 물자의 출입은 주로 각 섹터의 가장자리에 설치된 대형 엘리베이터를 통해 이루어진다.\n\n그러나 아뎀의 건조에는 막대한 시간과 자원, 인력이 소모되었다. 문제는 도시가 완성된 이후에도 끝나지 않았다. 거대한 초중량 도시를 기동하고 유지하기 위해서는 지속적인 에너지와 자원의 공급이 필요했으며, 인구가 증가할수록 주거지와 식량 생산 플랜트, 의료·교통 시설 등의 인프라 역시 끊임없이 확충해야 했다.\n\n그 결과 새로운 혁신 기술을 개발할 여력이 생길 때마다 이를 도시의 유지와 확장에 우선적으로 투입해야 했다. 기술 자체는 꾸준히 발전했지만, 그 발전으로 얻은 생산력의 상당 부분이 다시 증가한 인구와 방대한 인프라를 지탱하는 데 소모되었다. 그 결과 이동 도시 건조 이전과 비교해 새로운 기술이 실용화되는 속도는 수십 배 가까이 느려졌다.\n\n결국 아뎀은 문명을 오큘러로부터 보호하는 데에는 성공했지만, 동시에 그 문명이 더 빠르게 도약하는 것을 가로막는 거대한 구조적 부담이자 족쇄가 되었다. 케터펄러의 문명은 아뎀 위에서 끊임없이 한 걸음씩 앞으로 나아갔으며, 그때마다 발전으로 얻은 자원을 다시 도시의 유지와 확장에 투입해야 했다. 그렇게 발전과 현상 유지 사이에서 한 걸음 나아가고, 그만큼의 무게를 다시 짊어지는 과정이 영구적으로 반복되고 있다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['케터펄러-186f', '오큘러', '카헤르딘 & 케 에딘', '아그라베인 & 메네실', '에스페란토 & 라자로']
  },
  {
    id: 'TERM-17',
    code: 'CUR-PEAK-01',
    title: '화폐 체계 (피크)',
    titleEn: 'Currency System (Peak)',
    category: '물질/기술',
    summary: '케터펄러 전역에서 유통되는 비금속 지폐 화폐의 범용 총칭. 케루빔의 금속 오염 위험으로 인해 금속 주화가 배제되고 비금속 보안 인쇄 기술이 발달했으며, 지역별 환율 및 물물교환이 공존한다.',
    content: '케터펄러에서는 지역과 도시, 그리고 복수의 도시가 연합하여 형성된 국가마다 각기 고유한 화폐를 사용한다. 각 도시와 국가는 독자적인 화폐를 발행하며, 그 형태와 명칭, 액면가 및 실질 가치 역시 제각기 다르다. 그럼에도 케터펄러 전역에서는 이러한 화폐들을 총칭하여 ‘피크(Peak)’라 부른다.\n\n따라서 피크는 특정한 단일 화폐를 가리키는 고유명사가 아니라, 케터펄러 전역에서 유통되는 모든 화폐를 아우르는 범용적인 총칭이다. 실제 거래 현장에서는 각 도시와 국가가 발행하는 고유 화폐 단위를 구분하여 사용하며, 서로 다른 피크 사이에는 별도의 환율이 적용된다.\n\n현재 가장 널리 사용되는 화폐 형태는 종이 지폐이다. 주변 금속을 흡수하여 변질을 일으키는 케루빔의 특성상, 금속으로 주조된 주화는 케루빔 분진에 노출될 경우 물성이 변하거나 오염될 치명적인 위험이 있어 대량 유통에 적합하지 않기 때문이다. 이러한 이유로 케터펄러에서 금속 화폐는 사실상 사장되었다.\n\n이에 따라 각 도시와 국가는 종이와 비금속성 복합 소재를 바탕으로 독자적인 지폐를 인쇄·발행하며, 위조를 방지하기 위해 특수 섬유 배합, 화학 감응 잉크, 다층 미세 인쇄 등 고도의 비금속 보안 기술을 적용한다.\n\n한편 화폐의 신용도가 불안정하거나 서로 다른 화폐 규격이 충돌하는 접경 지대, 혹은 외곽 개척지에서는 여전히 전통적인 물물교환이 자연스럽게 이루어지기도 한다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['케루빔', '이동 도시 (아뎀)', '카헤르딘 & 케 에딘', '아그라베인 & 메네실', '에스페란토 & 라자로']
  },
  {
    id: 'TERM-18',
    code: 'FAC-GEO-01',
    title: '지옵콕스',
    titleEn: 'Geococcyx',
    category: '도시/기관',
    summary: '"정확하고 믿을 수 있는 정보를 전달한다"를 모토로 삼는 독립 정보 세력. 이동 도시의 소형 섹터를 분리·개조한 이동식 기지를 거점으로 대륙 전역의 기사와 첩보를 수집·판매한다.',
    content: '“정확하고 믿을 수 있는 정보를 전달한다”\n\n지옵콕스(Geococcyx)는 위의 슬로건을 절대적인 모토로 삼고 활동하는 독립 정보·언론 세력이다. 거대한 이동 도시(아뎀)에서 소형 섹터 하나를 물리적으로 분리한 뒤, 자체 기동 및 항법 장치와 심층 통신 설비를 증설 개조하여 독자적인 이동식 기지로 삼았다.\n\n특정 이동 도시나 연합 국가에 소속되어 있지 않은 순수 사설 사업체로, 케터펄러 대륙 전역의 격전지, 오큘러 출몰 구역, 각 도시의 정치·산업 동향 등 광범위한 정보를 수집해 기사 형태로 엮어 유통·판매한다.\n\n취재된 기사와 정보의 가격에는 고정된 정량 기준이 존재하지 않는다. 정보 자체의 희소성과 전략적 중요성, 취재 과정에서 대원들이 감수한 위험도와 투입된 경비 등을 종합적으로 고려하여 지옵콕스 측에서 독자적으로 결정한다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['이동 도시 (아뎀)', '화폐 체계 (피크)', '카헤르딘 & 케 에딘', '아그라베인 & 메네실', '에스페란토 & 라자로']
  },
  {
    id: 'TERM-19',
    code: 'CIT-FIR-01',
    title: '피르바 & 사카나',
    titleEn: 'Firva & Sakana',
    category: '도시/기관',
    summary: '동부 해안의 항만 도시 피르바와, 치안 유지 및 최근 석호병 유행에 대응해 해역 통제권을 확대한 자경대 사카나.',
    content: '■ 피르바 (Firva)\n동부 해안 지대에 자리 잡은 대표적인 해양 항만 도시. 수려하고 아름다운 해안 경관을 지녔으나, 낮에는 극심한 무더위가 기승을 부리고 밤이 되면 거친 파도가 휘몰아치는 혹독한 기후 환경이 특징이다.\n\n주민 대다수가 어업을 생계 수단으로 삼고 있으며, 피르바산 건어물은 대륙 전역에서 높은 가치로 거래되는 특산품이다. 어업이 고도로 활성화된 만큼 항구와 연안에는 수많은 어선과 선박이 밀집해 있다. 원초 상태의 케루빔을 해안 등대의 광원으로 활용하고 있어 등대지기는 피폭과 붕괴 위험으로 기피되는 직업 중 하나이다. 최근에는 연안에 \'밤바람의 유령\'이 출몰한다는 소문이 돌고 있다.\n\n■ 사카나 (Sakana)\n피르바의 민간 치안 자경대. 주로 도시 내부의 치안을 유지하고 항구에서 어부들의 안전을 보호하는 임무를 수행한다.\n\n본래 피르바 시외로 순찰을 나가는 일은 드물었으나, 최근 신체에 산호가 돋아나는 \'석호병\'이 해역 일대에 급격히 유행함에 따라 시 당국의 공식 요청으로 감염 경로 통제와 항구 주변의 외부 유입 차단에 투입되었다. 이에 따라 피르바는 사카나를 중심으로 외곽 해안과 인근 수역에 대한 물리적 통제권을 대폭 확대하고 있다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['피를레크', '석호병', '케루빔', '붕괴']
  },
  {
    id: 'TERM-20',
    code: 'SOC-PIR-05',
    title: '피를레크',
    titleEn: 'Pirlek',
    category: '종족/지성체',
    summary: '케토와 어패류 모체 앤스 사이에서 태어난 이종족. 화려한 산호 뿔, 푸른 비늘 꼬리, 발달된 흉골이 특징이나 석호병에 취약하다.',
    content: '케토와 어패류를 모체로 삼은 앤스 사이의 혈통에서 비롯된 이종족. 피르바를 비롯한 동부 연안 지대에 다수가 거주한다.\n\n외형적으로는 산호처럼 화려하게 뻗은 두부 뿔과 푸른 비늘로 덮인 꼬리가 두드러진다. 해양 환경에 적응하여 두꺼운 폐와 넓은 흉골을 갖추고 있어 강한 호흡량과 심폐 내구력을 자랑한다. 특히 푸른 비늘 꼬리는 매우 질기고 유연하여 지형지물에 감아 고속으로 이동하거나 거친 암벽·선박 위에서 신체 균형을 잡는 데 탁월하다.\n\n그러나 신체 특성상 체내 광물질 반응성이 높아 최근 연안에 확산된 석호병(산호 잠식 질환)에 대한 면역 내성이 타 종족보다 유독 취약하다는 치명적인 약점을 안고 있다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['케토', '앤스', '피르바 & 사카나', '석호병']
  },
  {
    id: 'TERM-21',
    code: 'DIS-COR-01',
    title: '석호병 (석호체)',
    titleEn: 'Lagoon Coral Sickness (Coralform)',
    category: '이상현상',
    summary: '바닷속에서 금속과 산호를 흡수한 케루빔에 의해 신체에서 산호가 자라나 숙주를 잠식하고 공격체(석호체)로 변이시키는 치명적 감염 질환.',
    content: '감염자의 생체 내부와 피부 표면에서 단단한 산호가 돋아나 자라나는 기괴하고 치명적인 생체 질환. 바닷속 해저에서 주변 금속과 해양 산호를 동시에 흡수·반응한 변이 케루빔 입자가 주요 발병 원인으로 추정된다.\n\n감염이 시작되면 체내에 뿌리를 내린 산호가 숙주의 영양분과 생체 에너지를 급속도로 흡수하며 전신을 잠식해 나간다. 잠식에 걸리는 시간은 환자의 체질에 따라 짧게는 6시간에서 길어도 만 하루(24시간)에 불과할 정도로 급격하다.\n\n신체 잠식이 완료되어 의식이 소멸하고 산호에 전신이 침탈당한 숙주를 ‘석호체(Coralform)’라 부른다. 석호체로 변이한 개체는 자아를 잃고 주변에 있는 다른 살아있는 생명체를 맹목적으로 추적·공격하는 위험체로 돌변한다.',
    dangerLevel: 'CRITICAL',
    relatedTerms: ['케루빔', '붕괴', '오큘러', '피르바 & 사카나', '피를레크']
  },
  {
    id: 'TERM-22',
    code: 'CIT-CHI-01',
    title: '시누아즈리 & 요아',
    titleEn: 'Chinoiserie & Yoah',
    category: '도시/기관',
    summary: '오큘러의 침입이 닿지 않는 고산 암벽에 자리 잡은 광산 도시 시누아즈리와, 광산 채굴 및 다목적 멀티툴 중장비 개발을 총괄하는 공병 집단 요아.',
    content: '■ 시누아즈리 (Chinoiserie)\n험준한 고산 지대에 자리 잡은 산악 도시. 온난기는 물론 계절 전환기인 칸토에도 살을 에는 듯한 추위가 사계절 내내 지속된다.\n\n해발 고도가 매우 높은 암벽 지대에 위치한 덕분에 오큘러의 직접적인 위협은 사실상 전무하지만, 그만큼 외부 문명과의 왕래가 차단되어 깊은 고립 상태에 놓여 있다. 또한 험준한 산악 일대에 원래 서식하고 있던 토착 야생 생물들과 잦은 마찰과 영역 분쟁을 겪고 있다. 도시 거주민들은 주로 광산 채굴업과 정밀 제조 기술을 핵심 생계 수단으로 삼고 있으며, 산악 암반 지형에 특화된 중장비 및 채굴 장비 제작 기술이 발달했다.\n\n■ 요아 (Yoah)\n시누아즈리의 광산 채굴과 중장비 제작을 전담하는 공병 기술자 및 광부 연합.\n\n광산 채굴을 본업으로 삼으면서도, 험준한 현장에서 필요한 다양한 공학적 기능이 하나로 통합된 ‘멀티툴’ 성격의 복합 중장비를 자체 설계·제작한다. 제작된 장비마다 지나치게 길고 장황한 이름을 붙이는 기묘한 습관이 있어, 도시 거주민들은 이를 일일이 부르지 않고 그저 ‘다목적 중장비’ 정도로 줄여 부른다. 가끔 풍부한 광맥을 채굴하려는 열정이 지나쳐 위험 구역을 과격하게 발파·굴착하다가 시 당국으로부터 제재를 받기도 한다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['소그', '토착 생물', '오큘러', '화폐 체계 (피크)']
  },
  {
    id: 'TERM-23',
    code: 'SOC-SOG-06',
    title: '소그',
    titleEn: 'Sog',
    category: '종족/지성체',
    summary: '아페에서 분파된 이종족. 아페보다 체구는 작으나 월등한 인내도와 장기 근로 적합성을 지녔으며, 좁은 갱도 환경에 맞추어 뿔이 이마에서 뒤통수 방향으로 자라난다.',
    content: '아페(Apé) 계통에서 갈라져 나와 고산 암반 및 지하 광산 환경에 적응한 분파 이종족. 시누아즈리의 주류 거주민을 형성하고 있다.\n\n원류인 아페에 비해 체구는 다소 작은 편으로(평균 신장 남성 173cm, 여성 170cm), 좁고 험준한 암벽 갱도 이동에 유리한 신체 구조를 갖추었다. 그러나 지속적인 신체적 스트레스와 육체적 피로를 버텨내는 인내도(Endurance) 수치가 타 종족에 비해 압도적으로 높아, 오랜 시간 지속되는 광산 굴착이나 고된 장기 근로에 극도로 특화되어 있다.\n\n아페 계통의 고유 형질인 뿔을 지니고 있으나, 협소한 광산 갱도를 수시로 드나들며 천장에 걸리지 않도록 머리 위쪽으로 솟아나는 대신 이마에서 뒤통수 방향을 향해 완만하게 누워 자라나는 독특한 유선형 형태를 띤다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['아페', '시누아즈리 & 요아', '토착 생물']
  },
  {
    id: 'TERM-24',
    code: 'CIT-MKR-01',
    title: '무크리 & 고라이',
    titleEn: 'Mukri & Gorai',
    category: '도시/기관',
    summary: '평야에 위치해 거대한 장벽으로 오큘러를 막아내며 자급자족 체계와 무구 제작이 발달한 도시 무크리와, 도시 장벽 수성과 치안 및 무구 수련을 총괄하는 고라이 집단.',
    content: '■ 무크리 (Mukri)\n평야에 자리 잡은 도시. 주변이 탁 트여 있어 오큘러의 접근을 막기 위한 거대한 장벽이 도시를 둘러싸고 있다.\n\n붕괴 사태 이후 끊임없이 오큘러와 싸워왔으며, 그 과정에서 오큘러를 처리하는 기술과 그 부산물을 활용하는 기술, 그리고 이를 응용한 각종 무구가 발달했다. 외부에 대한 의존을 줄이기 위해 식량과 생활 물자의 자급자족 체계를 오랜 시간에 걸쳐 발전시켜 왔으며, 필요한 자원은 자체적으로 생산하거나 오큘러를 포함한 주변 환경에서 확보한다. 동시에 다른 도시 및 지역과의 거래도 활발하다.\n\n오랜 세월 오큘러와 맞서 싸워온 탓에 무크리에서는 전투가 일상적인 문화의 일부로 자리 잡았다. 방어와 사냥, 무구 제작, 훈련 등의 분야가 발달했으며, 도시의 안전을 지키는 일을 명예로운 일로 여기는 풍조 역시 강하다. 매년 추수철에는 대규모 축제인 ‘무크라오제’가 열린다.\n\n■ 고라이 (Gorai)\n무크리의 호전적인 문화 속에서 뛰어난 전투력을 지닌 이들이 모인 집단.\n\n주로 도시의 장벽과 외곽에서 오큘러를 처리하고 치안을 유지하며, 필요에 따라 오큘러의 사냥과 회수에도 참여한다. 전투와 무구에 익숙한 이들이 많은 만큼 일부 고라이는 수련장을 운영하며 무구의 사용법과 전투 기술을 가르친다. 또한 오큘러와의 실전 경험을 바탕으로 새로운 무구의 시험과 전투 방식의 개선에 관여하기도 한다.',
    dangerLevel: 'CAUTION',
    relatedTerms: ['오큘러', '야레츠', '무크라오제', '오를란도', '케루빔']
  },
  {
    id: 'TERM-25',
    code: 'SOC-YAR-07',
    title: '야레츠',
    titleEn: 'Yaretz',
    category: '종족/지성체',
    summary: '아페에서 분파된 종족. 굵은 뼈와 질긴 근육으로 전투와 경비에 적합하나, 드물게 태어나는 왜소 체구 개체는 편견과 차별을 겪기도 한다.',
    content: '아페(Apé)에서 갈라져 나온 종족. 굵은 뼈와 질긴 근육을 지녀 전투에 적합한 신체적 특성을 가지고 있으며, 이러한 이유로 무크리에서는 전투원과 경비 인력으로 활동하는 야레츠가 많다.\n\n그러나 드물게 이례적으로 체구가 작은 야레츠가 태어나기도 한다. 이들은 같은 야레츠임에도 전형적인 종족상에서 벗어났다는 이유로 은근한 차별과 편견을 경험하며, 실제 전투 능력과 관계없이 약자로 취급되는 경우도 있다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['아페', '무크리 & 고라이', '소그', '게벨']
  },
  {
    id: 'TERM-26',
    code: 'CUL-MKR-02',
    title: '무크라오제',
    titleEn: 'Mukraoje Festival',
    category: '도시/기관',
    summary: '무크리에서 매년 추수철마다 열리는 최대 규모의 축제. 한 해의 추수를 무사히 마치고 살아남은 생존을 기념하며 술잔과 음식을 나눈다.',
    content: '무크리에서 추수철마다 열리는 최대 규모의 축제. 한 해의 추수를 무사히 마친 것을 기념하며 사람들은 술잔과 음식을 나누고 서로의 수확을 축하한다.\n\n오큘러와의 싸움이 일상인 무크리에서 무사히 추수를 마쳤다는 것은 단순히 식량을 확보했다는 의미를 넘어 또 한 해를 살아남았다는 의미를 가진다. 때문에 무크라오제는 무크리 사람들에게 매우 중요한 공동체 축제로 자리 잡았다.',
    dangerLevel: 'STABLE',
    relatedTerms: ['무크리 & 고라이', '야레츠', '오큘러']
  },
  {
    id: 'TERM-27',
    code: 'CIT-AHT-01',
    title: '아헨테 & 슈흘리카',
    titleEn: 'Ahente & Shuhlica',
    category: '도시/기관',
    summary: '남서부 해안과 가파른 절벽을 따라 지어져 건축과 축제가 발달한 도시 아헨테와, 연안 오큘러 요격 및 치안을 맡는 정예 방위 기구 슈흘리카.',
    content: `■ 아헨테 (Ahente)
케터펄러 남서부에 자리 잡은 해안 산악 도시. 내륙으로 영토를 확장하기에는 험준한 산과 절벽으로 둘러싸여 있었기에, 도시 전체가 깎아지른 절벽과 산비탈, 그리고 굴곡진 해안선을 따라 층층이 지어졌다.
땅이 척박하고 햇빛이 매우 강렬하여 일반적인 농경 대신 과수 재배와 산악 목축을 주된 생업으로 삼는다. 가파른 절벽과 산세에 거주지를 구축해야 했던 역사적 배경 덕분에 독보적인 건축 기술이 발달했다. 비례와 중심의 조형미를 숭상하며, 매월 초 최고의 건축가와 조각가를 선발하는 '베 뒤테'를 개최한다. 그 밖에도 1년 내내 다채로운 축제가 열려 '축제의 도시'로 불리며, 시민들은 경쟁과 토론을 일종의 축제로 여겨 승패보다 그 과정 자체에 의의를 둔다.

■ 슈흘리카 (Shuhlica)
아헨테의 공식 붕괴 대응 및 치안 방위 기관.
주로 거주민 보호와 도시 내 치안 유지를 맡으며, 절벽과 해안선이 맞닿은 도시의 지리적 특성상 바다와 조간대에서 기어올라오는 연안형 오큘러들을 요격·처리한다. 대단히 혹독한 훈련과 엄격한 교육 과정을 거쳐 선발되며, 아헨테에서는 슈흘리카에 입단하는 것을 필생의 목표이자 큰 영예로 삼는 이들이 많다. 정기 무예 축제인 '메타르테' 우승자는 우선 입단 자격을 얻지만, 메타르테 우승자가 아니더라도 정규 선발 시험과 훈련을 통과하면 누구나 입단할 수 있다.`,
    dangerLevel: 'CAUTION',
    relatedTerms: ['스마우토', '베 뒤테', '메타르테', '오큘러', '피르바']
  },
  {
    id: 'TERM-28',
    code: 'SOC-SMO-08',
    title: '스마우토',
    titleEn: 'Smouto',
    category: '종족/지성체',
    summary: '알토에서 갈라져 나온 유익종 종족. 관자놀이 부근에 부엉이의 귀깃을 닮은 작은 날개가 돋아나 있는 것이 특징이다.',
    content: `알토(Alto)에서 갈라져 나온 유익종 종족. 등 뒤의 주 날개 외에도, 양쪽 관자놀이 부근에 부엉이의 귀깃(Ear tufts)과 매우 흡사한 작은 날개깃이 돋아나 있는 독특한 외형적 특징을 지닌다.

이 두부의 작은 날개깃은 기류의 미세한 변화와 고주파 소음을 감지하는 예민한 감각 기관 역할을 겸하며, 남서부 해안 절벽의 거센 돌풍 속에서도 안정적인 평형감각과 입체적인 공간 지각력을 유지하게 돕는다. 이러한 신체적 이점 덕분에 아헨테의 깎아지른 절벽 가옥 건축과 해안선 방위 분야에서 핵심적인 역할을 수행하고 있다.`,
    dangerLevel: 'STABLE',
    relatedTerms: ['알토', '아헨테 & 슈흘리카', '콘트랄토']
  },
  {
    id: 'TERM-29',
    code: 'CUL-AHT-02',
    title: '베 뒤테 & 메타르테',
    titleEn: 'Be Dutte & Metarte Festivals',
    category: '도시/기관',
    summary: '아헨테를 상징하는 2대 핵심 경연 축제. 매월 초 건축·조각의 정점을 가리는 ‘베 뒤테’와, 연 2회 무예·전투 기술을 겨뤄 슈흘리카 입단자를 선발하는 ‘메타르테’.',
    content: `■ 베 뒤테 (Be Dutte)
아헨테에서 매월 초에 정기적으로 개최되는 유서 깊은 예술·건축 축제.
가장 뛰어난 안목과 기술을 지닌 건축가와 조각가를 선발한다. 절벽과 해안이라는 극한의 지형 조건 속에서 도시를 아름답고 견고하게 축조해 온 아헨테의 자부심이 담겨 있으며, 비례와 중심의 미학을 엄격하게 심사한다.

■ 메타르테 (Metarte)
연초에 한 번, 연말에 한 번(연 2회) 개최되는 아헨테 최대 규모의 종합 무예 경연 축제.
예술과 조형을 심사하는 '베 뒤테'와 달리, 메타르테는 무예, 실전 전투 기술, 유술 등 도시의 전투 및 방위 분야 전반을 대상으로 기량을 겨루는 치열한 축제이다. 여러 종목에 걸쳐 토너먼트 형식으로 맞붙어 당대 최고의 무인을 선발하며, 이 축제에서 최종 우승한 자는 도시 방위대인 '슈흘리카'에 즉시 입단할 수 있는 특전과 영예를 얻게 된다.`,
    dangerLevel: 'STABLE',
    relatedTerms: ['아헨테 & 슈흘리카', '스마우토']
  },
  {
    id: 'TERM-30',
    code: 'CIT-NDM-01',
    title: '나슈돔 & 프롯스자시트',
    titleEn: 'Nashdom & Protszasit',
    category: '도시/기관',
    summary: '북부 혹한의 험지를 누비는 50.40㎢ 규모의 이동 도시 나슈돔과, 건축사에서 정식 붕괴 대응 기관으로 발탁되어 타격·관통 무기를 구사하는 프롯스자시트.',
    content: `■ 나슈돔 (Nashdom)
케터펄러 북부의 거친 설원과 험준한 지형을 기동하는 이동 도시. 공인된 아뎀 가운데 가장 작은 면적(50.40㎢)을 지닌 소형 플랫폼이다.
험지에서도 거침없이 기동할 수 있도록 다른 이동 도시들의 주행 구동계보다 훨씬 더 두껍고 거대한 특수 광폭 무한궤도를 장착했다. 도시의 중심에는 상층(생활층), 중층(지지층), 하층(동력층) 전 구역에서 올려다보이는 거대한 기둥 형태의 중심 난방 타워가 수직으로 관통하고 있어, 극한의 북부 한파 속에서 도시 전역의 온도를 일정하게 유지하는 중추 역할을 맡는다.
혹독한 자연환경 속에서 살아남기 위해 거칠고 실용적이면서도 투박한 생명력이 살아 숨 쉬는 독특한 건축 양식, 이른바 '야성미가 돋보이는 고급 판자촌'이라 불릴 만한 고유의 입체 거주 구역을 구축했다.

■ 프롯스자시트 (Protszasit)
나슈돔의 공식 붕괴 대응 기관 (발음상으로는 '프로스자씻트'로 불린다).
본래 혹한과 풍설을 견뎌내는 도시 구조물을 설계·시공하고 보수하던 민간 건축사 집단이었으나, 오큘러 침입 시 도시 방호와 시설 수성전에서 그 영향력과 인지도가 급상승함에 따라 나슈돔 자치 의회로부터 정식 붕괴 대응 기관으로 임명되었다.
다른 도시의 대응 기관들과 마찬가지로 오큘러 제압 및 민간인 치안 유지 등의 임무를 총괄한다. 혹한 속에서 얼어붙어 굳어진 오큘러의 단단한 외피를 상대해야 하기에, 날로 베어내는 무기보다는 거대한 질량으로 부수는 둔기나 장갑을 강하게 꿰뚫는 관통형 창·파일 벙커 형태의 무구를 주로 운용하는 것이 두드러진 특징이다.`,
    dangerLevel: 'CAUTION',
    relatedTerms: ['이동 도시 (아뎀)', '붕괴 대응 기관', '오큘러', '붕괴']
  },
  {
    id: 'TERM-31',
    code: 'ORG-CLP-00',
    title: '붕괴 대응 기관',
    titleEn: 'Collapse Defense Organizations',
    category: '도시/기관',
    summary: '각 정주 도시와 이동 도시(아뎀)에 설립·운용되는 재난 방호 단체의 총칭. 도시 자생 조직뿐 아니라 민간 집단(프롯스자시트 등)이 공식 임명되는 사례도 포괄함.',
    content: `각 정주 도시 및 거대 이동 도시(아뎀)에 설립되어 운용되는 전문 방위·재난 대응 단체의 공식 총칭.
'붕괴 대응 기관'으로 통칭되지만, 이것이 언제나 도시 자치 정부가 백지상태에서 직접 창설한 관료 기구만을 의미하지는 않는다. 나슈돔의 '프롯스자시트'처럼 본래 민간 건축사로 활동하다가 뛰어난 수성 능력과 공적을 인정받아 사후에 정식 대응 기관으로 추인·영입된 단체도 존재한다.

각 도시의 환경과 문화에 따라 고유의 특색과 주력 무장(카헤르딘의 시설 보수 공학, 아그라베인의 엄격한 지침, 에스페란토의 응급 구조, 아헨테의 연안 요격, 나슈돔의 둔기·관통 무구 등)은 상이하지만, 기본적으로 수행하는 핵심 업무는 도시마다 크게 다르지 않다.
1. 오큘러의 탐지, 요격 및 제압
2. 거주 구역 치안 유지 및 민간인 신변 보호
3. 케루빔 피폭 위험 지역 통제 및 긴급 재난 작전 수행`,
    dangerLevel: 'CAUTION',
    relatedTerms: ['이동 도시 (아뎀)', '카헤르딘 & 케 에딘', '아그라베인 & 메네실', '에스페란토 & 라자로', '나슈돔 & 프롯스자시트', '아헨테 & 슈흘리카', '오큘러']
  }
];
