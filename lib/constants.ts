// 필터 타입 정의
export type BudgetFilter = "under100" | "100to200" | "over200";

export type RegionFilter =
  | "all"
  | "kr_all" | "kr_capital" | "kr_gyeongsang" | "kr_jeolla" | "kr_gangwon" | "kr_jeju" | "kr_chungcheong"
  | "jp_all" | "jp_hokkaido" | "jp_tohoku" | "jp_kanto" | "jp_chubu" | "jp_kinki" | "jp_chugoku" | "jp_shikoku" | "jp_kyushu";

export type EnvironmentFilter = "nature" | "urban" | "cafe" | "coworking";

export type SeasonFilter = "spring" | "summer" | "fall" | "winter";

// 필터 옵션 상수
export const BUDGET_OPTIONS: { value: BudgetFilter; label: string }[] = [
  { value: "under100", label: "100만원 미만" },
  { value: "100to200", label: "100~200만원" },
  { value: "over200", label: "200만원 이상" },
];

export const REGION_OPTIONS = {
  all: { value: "all" as const, label: "전체" },
  korea: [
    { value: "kr_all" as const, label: "한국 전체" },
    { value: "kr_capital" as const, label: "수도권" },
    { value: "kr_gyeongsang" as const, label: "경상도" },
    { value: "kr_jeolla" as const, label: "전라도" },
    { value: "kr_gangwon" as const, label: "강원도" },
    { value: "kr_jeju" as const, label: "제주도" },
    { value: "kr_chungcheong" as const, label: "충청도" },
  ],
  japan: [
    { value: "jp_all" as const, label: "일본 전체" },
    { value: "jp_hokkaido" as const, label: "홋카이도 지방" },
    { value: "jp_tohoku" as const, label: "도호쿠 지방" },
    { value: "jp_kanto" as const, label: "간토 지방" },
    { value: "jp_chubu" as const, label: "주부 지방" },
    { value: "jp_kinki" as const, label: "긴키 지방" },
    { value: "jp_chugoku" as const, label: "주고쿠 지방" },
    { value: "jp_shikoku" as const, label: "시코쿠 지방" },
    { value: "jp_kyushu" as const, label: "규슈·오키나와 지방" },
  ],
};

export const ENVIRONMENT_OPTIONS: { value: EnvironmentFilter; label: string }[] = [
  { value: "nature", label: "자연친화" },
  { value: "urban", label: "도심선호" },
  { value: "cafe", label: "카페작업" },
  { value: "coworking", label: "코워킹 필수" },
];

export const SEASON_OPTIONS: { value: SeasonFilter; label: string }[] = [
  { value: "spring", label: "봄" },
  { value: "summer", label: "여름" },
  { value: "fall", label: "가을" },
  { value: "winter", label: "겨울" },
];

// 지역 값 → 라벨 변환 헬퍼 함수
export function getRegionLabel(region: RegionFilter): string {
  if (region === "all") return REGION_OPTIONS.all.label;

  const koreaOption = REGION_OPTIONS.korea.find(opt => opt.value === region);
  if (koreaOption) return koreaOption.label;

  const japanOption = REGION_OPTIONS.japan.find(opt => opt.value === region);
  if (japanOption) return japanOption.label;

  return region;
}

// 예산 값 → 라벨 변환 헬퍼 함수
export function getBudgetLabel(budget: BudgetFilter | null): string | null {
  if (!budget) return null;
  const option = BUDGET_OPTIONS.find(opt => opt.value === budget);
  return option?.label || null;
}

// 환경 값 → 라벨 변환 헬퍼 함수
export function getEnvironmentLabel(environment: EnvironmentFilter | null): string | null {
  if (!environment) return null;
  const option = ENVIRONMENT_OPTIONS.find(opt => opt.value === environment);
  return option?.label || null;
}

// 계절 값 → 라벨 변환 헬퍼 함수
export function getSeasonLabel(season: SeasonFilter | null): string | null {
  if (!season) return null;
  const option = SEASON_OPTIONS.find(opt => opt.value === season);
  return option?.label || null;
}

// 도시 데이터 타입
export interface City {
  id: string;
  name: { ko: string; en: string; ja: string };
  country: "KR" | "JP";
  image: string;
  monthlyCost: {
    amount: number;
    currency: "KRW" | "JPY";
  };
  internetSpeed: number;
  scores: {
    overall: number;
    cost: number;
    internet: number;
    coworking: number;
    transport: number;
    healthcare: number;
    safety: number;
    english: number;
    weather: number;
    food: number;
    nightlife: number;
  };
  reviewCount: number;
  recommendRate: number;
  description: string;
  tags: string[];
  budget: BudgetFilter;
  region: RegionFilter;
  environment: EnvironmentFilter[];
  bestSeason: SeasonFilter[];
  likes: number;
  dislikes: number;
}

// 한국 도시 데이터 (10개)
export const KOREA_CITIES: City[] = [
  {
    id: "seoul",
    name: { ko: "서울", en: "Seoul", ja: "ソウル" },
    country: "KR",
    image: "/images/seoul.jpg",
    monthlyCost: { amount: 1800000, currency: "KRW" },
    internetSpeed: 95,
    scores: {
      overall: 4.5,
      cost: 3.5,
      internet: 4.9,
      coworking: 4.8,
      transport: 4.9,
      healthcare: 4.8,
      safety: 4.6,
      english: 3.5,
      weather: 3.8,
      food: 4.7,
      nightlife: 4.5,
    },
    reviewCount: 342,
    recommendRate: 89,
    description: "대한민국의 수도. 최고의 인프라와 빠른 인터넷",
    tags: ["인프라 최고", "카페 천국", "대중교통"],
    budget: "over200",
    region: "kr_capital",
    environment: ["urban", "cafe", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 304,
    dislikes: 38,
  },
  {
    id: "busan",
    name: { ko: "부산", en: "Busan", ja: "釜山" },
    country: "KR",
    image: "/images/busan.jpg",
    monthlyCost: { amount: 1400000, currency: "KRW" },
    internetSpeed: 85,
    scores: {
      overall: 4.3,
      cost: 4.2,
      internet: 4.5,
      coworking: 4.0,
      transport: 4.2,
      healthcare: 4.5,
      safety: 4.5,
      english: 3.0,
      weather: 4.2,
      food: 4.8,
      nightlife: 4.0,
    },
    reviewCount: 198,
    recommendRate: 86,
    description: "해변과 맛있는 음식의 도시. 서울보다 저렴한 물가",
    tags: ["해변", "해산물", "저렴함"],
    budget: "100to200",
    region: "kr_gyeongsang",
    environment: ["nature", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 170,
    dislikes: 28,
  },
  {
    id: "jeju",
    name: { ko: "제주", en: "Jeju", ja: "済州" },
    country: "KR",
    image: "/images/jeju.jpg",
    monthlyCost: { amount: 1500000, currency: "KRW" },
    internetSpeed: 75,
    scores: {
      overall: 4.2,
      cost: 3.8,
      internet: 4.0,
      coworking: 3.8,
      transport: 3.0,
      healthcare: 3.8,
      safety: 4.8,
      english: 2.8,
      weather: 4.5,
      food: 4.3,
      nightlife: 3.2,
    },
    reviewCount: 156,
    recommendRate: 82,
    description: "아름다운 자연과 여유로운 섬 생활. 노마드 커뮤니티 활발",
    tags: ["자연", "힐링", "노마드 커뮤니티"],
    budget: "100to200",
    region: "kr_jeju",
    environment: ["nature"],
    bestSeason: ["spring", "summer", "fall"],
    likes: 128,
    dislikes: 28,
  },
  {
    id: "daejeon",
    name: { ko: "대전", en: "Daejeon", ja: "大田" },
    country: "KR",
    image: "/images/daejeon.jpg",
    monthlyCost: { amount: 1200000, currency: "KRW" },
    internetSpeed: 88,
    scores: {
      overall: 3.9,
      cost: 4.5,
      internet: 4.6,
      coworking: 3.5,
      transport: 3.8,
      healthcare: 4.2,
      safety: 4.5,
      english: 3.0,
      weather: 3.8,
      food: 3.8,
      nightlife: 3.0,
    },
    reviewCount: 67,
    recommendRate: 78,
    description: "과학과 IT의 도시. 조용하고 저렴한 생활",
    tags: ["IT 클러스터", "조용함", "저렴함"],
    budget: "under100",
    region: "kr_chungcheong",
    environment: ["urban", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 52,
    dislikes: 15,
  },
  {
    id: "daegu",
    name: { ko: "대구", en: "Daegu", ja: "大邱" },
    country: "KR",
    image: "/images/daegu.jpg",
    monthlyCost: { amount: 1100000, currency: "KRW" },
    internetSpeed: 82,
    scores: {
      overall: 3.8,
      cost: 4.6,
      internet: 4.4,
      coworking: 3.3,
      transport: 3.5,
      healthcare: 4.0,
      safety: 4.3,
      english: 2.5,
      weather: 3.2,
      food: 4.0,
      nightlife: 3.2,
    },
    reviewCount: 45,
    recommendRate: 75,
    description: "따뜻한 날씨와 저렴한 물가의 내륙 도시",
    tags: ["저렴함", "따뜻함", "중간 규모"],
    budget: "under100",
    region: "kr_gyeongsang",
    environment: ["urban", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 34,
    dislikes: 11,
  },
  {
    id: "gwangju",
    name: { ko: "광주", en: "Gwangju", ja: "光州" },
    country: "KR",
    image: "/images/gwangju.jpg",
    monthlyCost: { amount: 1050000, currency: "KRW" },
    internetSpeed: 80,
    scores: {
      overall: 3.7,
      cost: 4.7,
      internet: 4.3,
      coworking: 3.0,
      transport: 3.3,
      healthcare: 3.8,
      safety: 4.4,
      english: 2.3,
      weather: 3.8,
      food: 4.5,
      nightlife: 3.0,
    },
    reviewCount: 38,
    recommendRate: 74,
    description: "예술과 문화의 도시. 맛있는 음식과 친절한 사람들",
    tags: ["예술/문화", "맛집", "친절함"],
    budget: "under100",
    region: "kr_jeolla",
    environment: ["urban", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 28,
    dislikes: 10,
  },
  {
    id: "jeonju",
    name: { ko: "전주", en: "Jeonju", ja: "全州" },
    country: "KR",
    image: "/images/jeonju.jpg",
    monthlyCost: { amount: 1000000, currency: "KRW" },
    internetSpeed: 72,
    scores: {
      overall: 3.8,
      cost: 4.8,
      internet: 4.0,
      coworking: 2.8,
      transport: 3.0,
      healthcare: 3.5,
      safety: 4.5,
      english: 2.0,
      weather: 3.8,
      food: 4.9,
      nightlife: 2.8,
    },
    reviewCount: 52,
    recommendRate: 80,
    description: "한옥마을과 전통문화의 도시. 비빔밥의 고향",
    tags: ["한옥", "전통문화", "비빔밥"],
    budget: "under100",
    region: "kr_jeolla",
    environment: ["nature", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 42,
    dislikes: 10,
  },
  {
    id: "gangneung",
    name: { ko: "강릉", en: "Gangneung", ja: "江陵" },
    country: "KR",
    image: "/images/gangneung.jpg",
    monthlyCost: { amount: 1150000, currency: "KRW" },
    internetSpeed: 70,
    scores: {
      overall: 3.9,
      cost: 4.3,
      internet: 3.8,
      coworking: 3.2,
      transport: 2.8,
      healthcare: 3.3,
      safety: 4.6,
      english: 2.2,
      weather: 4.0,
      food: 4.2,
      nightlife: 2.5,
    },
    reviewCount: 48,
    recommendRate: 79,
    description: "동해 바다와 커피 거리. 조용한 해변 도시",
    tags: ["해변", "커피", "조용함"],
    budget: "100to200",
    region: "kr_gangwon",
    environment: ["nature", "cafe"],
    bestSeason: ["summer", "winter"],
    likes: 38,
    dislikes: 10,
  },
  {
    id: "suwon",
    name: { ko: "수원", en: "Suwon", ja: "水原" },
    country: "KR",
    image: "/images/suwon.jpg",
    monthlyCost: { amount: 1350000, currency: "KRW" },
    internetSpeed: 90,
    scores: {
      overall: 4.0,
      cost: 4.0,
      internet: 4.7,
      coworking: 3.8,
      transport: 4.3,
      healthcare: 4.2,
      safety: 4.4,
      english: 3.0,
      weather: 3.7,
      food: 4.0,
      nightlife: 3.5,
    },
    reviewCount: 72,
    recommendRate: 81,
    description: "서울 근교 위성도시. 화성과 삼성 본사",
    tags: ["서울 근교", "역사", "IT"],
    budget: "100to200",
    region: "kr_capital",
    environment: ["urban", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 58,
    dislikes: 14,
  },
  {
    id: "pangyo",
    name: { ko: "판교", en: "Pangyo", ja: "板橋" },
    country: "KR",
    image: "/images/pangyo.jpg",
    monthlyCost: { amount: 1600000, currency: "KRW" },
    internetSpeed: 98,
    scores: {
      overall: 4.1,
      cost: 3.6,
      internet: 4.9,
      coworking: 4.5,
      transport: 4.0,
      healthcare: 4.3,
      safety: 4.7,
      english: 3.8,
      weather: 3.7,
      food: 3.8,
      nightlife: 3.0,
    },
    reviewCount: 89,
    recommendRate: 83,
    description: "한국의 실리콘밸리. 스타트업과 IT 기업 밀집",
    tags: ["IT 허브", "스타트업", "테크"],
    budget: "over200",
    region: "kr_capital",
    environment: ["urban", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 74,
    dislikes: 15,
  },
];

// 일본 도시 데이터 (10개)
export const JAPAN_CITIES: City[] = [
  {
    id: "tokyo",
    name: { ko: "도쿄", en: "Tokyo", ja: "東京" },
    country: "JP",
    image: "/images/tokyo.jpg",
    monthlyCost: { amount: 280000, currency: "JPY" },
    internetSpeed: 92,
    scores: {
      overall: 4.4,
      cost: 3.2,
      internet: 4.8,
      coworking: 4.7,
      transport: 5.0,
      healthcare: 4.9,
      safety: 4.8,
      english: 3.8,
      weather: 3.9,
      food: 4.8,
      nightlife: 4.6,
    },
    reviewCount: 412,
    recommendRate: 87,
    description: "일본의 수도. 세계 최대 도시권과 무한한 가능성",
    tags: ["대도시", "문화", "교통 최고"],
    budget: "over200",
    region: "jp_kanto",
    environment: ["urban", "cafe", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 358,
    dislikes: 54,
  },
  {
    id: "osaka",
    name: { ko: "오사카", en: "Osaka", ja: "大阪" },
    country: "JP",
    image: "/images/osaka.jpg",
    monthlyCost: { amount: 220000, currency: "JPY" },
    internetSpeed: 88,
    scores: {
      overall: 4.3,
      cost: 3.8,
      internet: 4.6,
      coworking: 4.3,
      transport: 4.7,
      healthcare: 4.7,
      safety: 4.5,
      english: 3.2,
      weather: 4.0,
      food: 4.9,
      nightlife: 4.5,
    },
    reviewCount: 287,
    recommendRate: 88,
    description: "일본의 부엌. 맛있는 음식과 활기찬 분위기",
    tags: ["음식 천국", "활기참", "친근함"],
    budget: "100to200",
    region: "jp_kinki",
    environment: ["urban", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 253,
    dislikes: 34,
  },
  {
    id: "kyoto",
    name: { ko: "교토", en: "Kyoto", ja: "京都" },
    country: "JP",
    image: "/images/kyoto.jpg",
    monthlyCost: { amount: 200000, currency: "JPY" },
    internetSpeed: 82,
    scores: {
      overall: 4.2,
      cost: 4.0,
      internet: 4.4,
      coworking: 3.8,
      transport: 4.3,
      healthcare: 4.5,
      safety: 4.8,
      english: 3.5,
      weather: 3.8,
      food: 4.5,
      nightlife: 3.2,
    },
    reviewCount: 198,
    recommendRate: 85,
    description: "천년 고도. 전통과 현대가 조화로운 문화 도시",
    tags: ["전통", "사찰", "조용함"],
    budget: "100to200",
    region: "jp_kinki",
    environment: ["nature", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 168,
    dislikes: 30,
  },
  {
    id: "fukuoka",
    name: { ko: "후쿠오카", en: "Fukuoka", ja: "福岡" },
    country: "JP",
    image: "/images/fukuoka.jpg",
    monthlyCost: { amount: 180000, currency: "JPY" },
    internetSpeed: 85,
    scores: {
      overall: 4.4,
      cost: 4.3,
      internet: 4.5,
      coworking: 4.2,
      transport: 4.2,
      healthcare: 4.5,
      safety: 4.6,
      english: 3.0,
      weather: 4.2,
      food: 4.7,
      nightlife: 4.2,
    },
    reviewCount: 234,
    recommendRate: 91,
    description: "아시아의 관문. 스타트업 허브로 성장 중인 도시",
    tags: ["스타트업", "라멘", "아시아 허브"],
    budget: "under100",
    region: "jp_kyushu",
    environment: ["urban", "cafe"],
    bestSeason: ["spring", "fall"],
    likes: 213,
    dislikes: 21,
  },
  {
    id: "nagoya",
    name: { ko: "나고야", en: "Nagoya", ja: "名古屋" },
    country: "JP",
    image: "/images/nagoya.jpg",
    monthlyCost: { amount: 190000, currency: "JPY" },
    internetSpeed: 86,
    scores: {
      overall: 3.9,
      cost: 4.2,
      internet: 4.5,
      coworking: 3.8,
      transport: 4.4,
      healthcare: 4.6,
      safety: 4.5,
      english: 2.8,
      weather: 3.8,
      food: 4.2,
      nightlife: 3.5,
    },
    reviewCount: 98,
    recommendRate: 79,
    description: "제조업의 중심지. 도쿄와 오사카 사이의 실용적인 도시",
    tags: ["제조업", "실용적", "중간 위치"],
    budget: "100to200",
    region: "jp_chubu",
    environment: ["urban", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 77,
    dislikes: 21,
  },
  {
    id: "sapporo",
    name: { ko: "삿포로", en: "Sapporo", ja: "札幌" },
    country: "JP",
    image: "/images/sapporo.jpg",
    monthlyCost: { amount: 170000, currency: "JPY" },
    internetSpeed: 80,
    scores: {
      overall: 4.0,
      cost: 4.4,
      internet: 4.3,
      coworking: 3.5,
      transport: 4.0,
      healthcare: 4.4,
      safety: 4.7,
      english: 2.5,
      weather: 3.5,
      food: 4.6,
      nightlife: 3.8,
    },
    reviewCount: 112,
    recommendRate: 82,
    description: "북쪽의 대도시. 시원한 여름과 눈 축제로 유명",
    tags: ["시원함", "눈 축제", "라멘"],
    budget: "under100",
    region: "jp_hokkaido",
    environment: ["nature", "cafe"],
    bestSeason: ["summer", "winter"],
    likes: 92,
    dislikes: 20,
  },
  {
    id: "okinawa",
    name: { ko: "오키나와", en: "Okinawa", ja: "沖縄" },
    country: "JP",
    image: "/images/okinawa.jpg",
    monthlyCost: { amount: 160000, currency: "JPY" },
    internetSpeed: 68,
    scores: {
      overall: 4.1,
      cost: 4.5,
      internet: 3.8,
      coworking: 3.2,
      transport: 2.8,
      healthcare: 3.8,
      safety: 4.8,
      english: 3.2,
      weather: 4.5,
      food: 4.3,
      nightlife: 3.5,
    },
    reviewCount: 145,
    recommendRate: 84,
    description: "열대의 낙원. 아름다운 해변과 독특한 문화",
    tags: ["해변", "리조트", "열대"],
    budget: "under100",
    region: "jp_kyushu",
    environment: ["nature"],
    bestSeason: ["spring", "summer", "fall"],
    likes: 122,
    dislikes: 23,
  },
  {
    id: "kobe",
    name: { ko: "고베", en: "Kobe", ja: "神戸" },
    country: "JP",
    image: "/images/kobe.jpg",
    monthlyCost: { amount: 195000, currency: "JPY" },
    internetSpeed: 84,
    scores: {
      overall: 4.0,
      cost: 4.0,
      internet: 4.4,
      coworking: 3.6,
      transport: 4.3,
      healthcare: 4.5,
      safety: 4.6,
      english: 3.3,
      weather: 4.0,
      food: 4.5,
      nightlife: 3.5,
    },
    reviewCount: 76,
    recommendRate: 81,
    description: "국제적인 항구 도시. 세련된 분위기와 고베규",
    tags: ["항구", "국제적", "고베규"],
    budget: "100to200",
    region: "jp_kinki",
    environment: ["nature", "urban"],
    bestSeason: ["spring", "fall"],
    likes: 62,
    dislikes: 14,
  },
  {
    id: "yokohama",
    name: { ko: "요코하마", en: "Yokohama", ja: "横浜" },
    country: "JP",
    image: "/images/yokohama.jpg",
    monthlyCost: { amount: 230000, currency: "JPY" },
    internetSpeed: 90,
    scores: {
      overall: 4.1,
      cost: 3.7,
      internet: 4.7,
      coworking: 4.0,
      transport: 4.6,
      healthcare: 4.6,
      safety: 4.6,
      english: 3.5,
      weather: 3.9,
      food: 4.3,
      nightlife: 3.8,
    },
    reviewCount: 134,
    recommendRate: 83,
    description: "도쿄 근교의 항구 도시. 차이나타운과 야경",
    tags: ["도쿄 근교", "차이나타운", "야경"],
    budget: "over200",
    region: "jp_kanto",
    environment: ["urban", "coworking"],
    bestSeason: ["spring", "fall"],
    likes: 111,
    dislikes: 23,
  },
  {
    id: "kanazawa",
    name: { ko: "가나자와", en: "Kanazawa", ja: "金沢" },
    country: "JP",
    image: "/images/kanazawa.jpg",
    monthlyCost: { amount: 165000, currency: "JPY" },
    internetSpeed: 75,
    scores: {
      overall: 4.0,
      cost: 4.4,
      internet: 4.1,
      coworking: 3.0,
      transport: 3.5,
      healthcare: 4.2,
      safety: 4.8,
      english: 2.5,
      weather: 3.5,
      food: 4.6,
      nightlife: 2.8,
    },
    reviewCount: 58,
    recommendRate: 86,
    description: "전통과 예술의 도시. 겐로쿠엔 정원과 해산물",
    tags: ["전통", "정원", "해산물"],
    budget: "under100",
    region: "jp_chubu",
    environment: ["nature", "cafe"],
    bestSeason: ["spring", "winter"],
    likes: 50,
    dislikes: 8,
  },
];

// 전체 도시 데이터
export const ALL_CITIES: City[] = [...KOREA_CITIES, ...JAPAN_CITIES];

// 통계 데이터
export const STATS = {
  totalCities: 20,
  totalReviews: 2847,
  activeNomads: 1243,
  countries: 2,
};

// 유틸리티 함수들
export function getCountryFlag(country: "KR" | "JP"): string {
  return country === "KR" ? "🇰🇷" : "🇯🇵";
}

// 도시 ID로 도시 데이터 조회
export function getCityById(id: string): City | undefined {
  return ALL_CITIES.find((city) => city.id === id);
}

// 점수 카테고리 라벨
export const SCORE_LABELS: Record<keyof City["scores"], string> = {
  overall: "종합 점수",
  cost: "생활비",
  internet: "인터넷",
  coworking: "코워킹",
  transport: "대중교통",
  healthcare: "의료",
  safety: "안전",
  english: "영어 소통",
  weather: "날씨",
  food: "음식",
  nightlife: "나이트라이프",
};
