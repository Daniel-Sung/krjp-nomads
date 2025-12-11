import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityById, ALL_CITIES } from "@/lib/constants";
import CityDetailClient from "./CityDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 정적 생성을 위한 모든 도시 ID 반환
export async function generateStaticParams() {
  return ALL_CITIES.map((city) => ({
    id: city.id,
  }));
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    return {
      title: "도시를 찾을 수 없습니다 | KR-JP Nomads",
    };
  }

  const countryName = city.country === "KR" ? "한국" : "일본";

  return {
    title: `${city.name.ko} (${city.name.en}) | KR-JP Nomads`,
    description: `${countryName} ${city.name.ko}에서 디지털 노마드로 살기. ${city.description}. 월 생활비, 인터넷 속도, 추천율 등 상세 정보 확인.`,
    openGraph: {
      title: `${city.name.ko} - 디지털 노마드 가이드 | KR-JP Nomads`,
      description: city.description,
      type: "website",
    },
  };
}

export default async function CityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    notFound();
  }

  return <CityDetailClient city={city} />;
}
