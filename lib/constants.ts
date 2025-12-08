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
}

// 리뷰 데이터 타입
export interface Review {
  id: string;
  cityId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  scores: {
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
  comment: string;
  stayDuration: "1week" | "1month" | "3months" | "6months+";
  createdAt: string;
  helpful: number;
  recommend: boolean;
}

// 카테고리 타입
export interface Category {
  id: string;
  icon: string;
  title: string;
  description: string;
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
  },
];

// 전체 도시 데이터
export const ALL_CITIES: City[] = [...KOREA_CITIES, ...JAPAN_CITIES];

// 리뷰 샘플 데이터
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "review_001",
    cityId: "seoul",
    userId: "user_001",
    userName: "DigitalNomad_Mike",
    userAvatar: "/avatars/mike.jpg",
    scores: {
      cost: 3,
      internet: 5,
      coworking: 5,
      transport: 5,
      healthcare: 5,
      safety: 4,
      english: 3,
      weather: 4,
      food: 5,
      nightlife: 5,
    },
    comment:
      "인터넷 속도가 미쳤어요! 카페마다 콘센트가 있고 WiFi도 빠름. 다만 서울 집값이 좀 비싸서 고시원이나 쉐어하우스 추천해요.",
    stayDuration: "3months",
    createdAt: "2024-12-05",
    helpful: 45,
    recommend: true,
  },
  {
    id: "review_002",
    cityId: "fukuoka",
    userId: "user_002",
    userName: "TechWriter_Sarah",
    userAvatar: "/avatars/sarah.jpg",
    scores: {
      cost: 4,
      internet: 4,
      coworking: 4,
      transport: 4,
      healthcare: 5,
      safety: 5,
      english: 3,
      weather: 4,
      food: 5,
      nightlife: 4,
    },
    comment:
      "아시아 여러 나라 다녀봤는데 후쿠오카가 최고예요. 물가도 적당하고, 한국이랑 가까워서 왔다갔다 하기 좋아요. 라멘이 너무 맛있어서 살찔 것 같아요 ㅋㅋ",
    stayDuration: "1month",
    createdAt: "2024-12-03",
    helpful: 32,
    recommend: true,
  },
  {
    id: "review_003",
    cityId: "busan",
    userId: "user_003",
    userName: "RemoteDev_Jason",
    userAvatar: "/avatars/jason.jpg",
    scores: {
      cost: 4,
      internet: 4,
      coworking: 4,
      transport: 4,
      healthcare: 4,
      safety: 5,
      english: 3,
      weather: 5,
      food: 5,
      nightlife: 4,
    },
    comment:
      "해운대 근처에서 한 달 살았는데 최고였어요. 아침에 바다 보면서 코딩하고, 저녁에 회 먹고. 서울보다 여유롭고 물가도 착해요.",
    stayDuration: "1month",
    createdAt: "2024-12-01",
    helpful: 28,
    recommend: true,
  },
  {
    id: "review_004",
    cityId: "osaka",
    userId: "user_004",
    userName: "FreelanceDesigner_Yuki",
    userAvatar: "/avatars/yuki.jpg",
    scores: {
      cost: 4,
      internet: 5,
      coworking: 4,
      transport: 5,
      healthcare: 5,
      safety: 4,
      english: 3,
      weather: 4,
      food: 5,
      nightlife: 5,
    },
    comment:
      "오사카 사람들 너무 친근해요! 도쿄보다 물가 저렴하고, 먹거리가 정말 많아요. 도톤보리 근처 에어비앤비 구하면 위치도 좋고 편리해요.",
    stayDuration: "3months",
    createdAt: "2024-11-28",
    helpful: 51,
    recommend: true,
  },
  {
    id: "review_005",
    cityId: "jeju",
    userId: "user_005",
    userName: "ContentCreator_Emma",
    userAvatar: "/avatars/emma.jpg",
    scores: {
      cost: 3,
      internet: 4,
      coworking: 4,
      transport: 2,
      healthcare: 3,
      safety: 5,
      english: 2,
      weather: 5,
      food: 4,
      nightlife: 2,
    },
    comment:
      "제주도 노마드 카페들이 정말 잘 되어 있어요! 특히 애월 쪽 카페들. 다만 차가 없으면 이동이 좀 불편해요. 한 달 이상 있을 거면 렌트카 필수!",
    stayDuration: "1month",
    createdAt: "2024-11-25",
    helpful: 38,
    recommend: true,
  },
  {
    id: "review_006",
    cityId: "tokyo",
    userId: "user_006",
    userName: "StartupFounder_Alex",
    userAvatar: "/avatars/alex.jpg",
    scores: {
      cost: 3,
      internet: 5,
      coworking: 5,
      transport: 5,
      healthcare: 5,
      safety: 5,
      english: 4,
      weather: 4,
      food: 5,
      nightlife: 5,
    },
    comment:
      "도쿄는 뭐든지 있어요. 코워킹 스페이스도 많고, 밤늦게까지 열어요. 시부야나 신주쿠 쪽에 WeWork 많이 있어요. 비싸긴 한데 그만한 가치가 있어요.",
    stayDuration: "6months+",
    createdAt: "2024-11-20",
    helpful: 67,
    recommend: true,
  },
];

// 카테고리 데이터
export const CATEGORIES: Category[] = [
  {
    id: "cost",
    icon: "💰",
    title: "가성비 최고",
    description: "저렴한 생활비로 편하게",
  },
  {
    id: "internet",
    icon: "📶",
    title: "인터넷 최강",
    description: "초고속 안정적인 인터넷",
  },
  {
    id: "coworking",
    icon: "☕",
    title: "카페 천국",
    description: "작업하기 좋은 카페 많은 곳",
  },
  {
    id: "safety",
    icon: "🔒",
    title: "안전 1순위",
    description: "치안 좋고 안전한 도시",
  },
  {
    id: "food",
    icon: "🍜",
    title: "맛집 투어",
    description: "맛있는 음식 가득한 도시",
  },
  {
    id: "nature",
    icon: "🏖️",
    title: "자연 속에서",
    description: "해변, 산 등 자연환경 좋은 곳",
  },
];

// 통계 데이터
export const STATS = {
  totalCities: 20,
  totalReviews: 2847,
  activeNomads: 1243,
  countries: 2,
};

// 유틸리티 함수들
export function formatCurrency(amount: number, currency: "KRW" | "JPY"): string {
  if (currency === "KRW") {
    return `₩${(amount / 10000).toFixed(0)}만`;
  } else {
    return `¥${(amount / 10000).toFixed(0)}万`;
  }
}

export function formatCurrencyFull(amount: number, currency: "KRW" | "JPY"): string {
  if (currency === "KRW") {
    return `₩${amount.toLocaleString()}`;
  } else {
    return `¥${amount.toLocaleString()}`;
  }
}

export function getCountryFlag(country: "KR" | "JP"): string {
  return country === "KR" ? "🇰🇷" : "🇯🇵";
}

export function getCountryName(country: "KR" | "JP"): string {
  return country === "KR" ? "한국" : "일본";
}

export function getStayDurationText(duration: string): string {
  const map: Record<string, string> = {
    "1week": "1주",
    "1month": "1개월",
    "3months": "3개월",
    "6months+": "6개월+",
  };
  return map[duration] || duration;
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "오늘";
  if (diffDays === 1) return "어제";
  if (diffDays < 7) return `${diffDays}일 전`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;
  return `${Math.floor(diffDays / 365)}년 전`;
}

// 도시 데이터 접근 함수들
export function getCityById(id: string): City | undefined {
  return ALL_CITIES.find((city) => city.id === id);
}

export function getTopCities(count: number = 8): City[] {
  return [...ALL_CITIES].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, count);
}

export function getTopCitiesByCountry(country: "KR" | "JP", count: number = 5): City[] {
  const cities = country === "KR" ? KOREA_CITIES : JAPAN_CITIES;
  return [...cities].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, count);
}

export function getCitiesByCategory(categoryId: string, count: number = 4): City[] {
  const scoreKey = categoryId as keyof City["scores"];
  if (!ALL_CITIES[0].scores.hasOwnProperty(scoreKey)) {
    return getTopCities(count);
  }
  return [...ALL_CITIES].sort((a, b) => b.scores[scoreKey] - a.scores[scoreKey]).slice(0, count);
}

export function getRecentReviews(count: number = 3): Review[] {
  return [...SAMPLE_REVIEWS]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
}
