"use client";

import { useState } from "react";
import HeroSection, { FilterState } from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TopCitiesSection from "@/components/home/TopCitiesSection";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>({
    budget: null,
    region: "all",
    environment: null,
    season: null,
  });

  return (
    <>
      {/* 히어로 섹션 - 필터 UI */}
      <HeroSection filters={filters} onFiltersChange={setFilters} />

      {/* 통계 섹션 */}
      <StatsSection />

      {/* 도시 리스트 (필터링됨) */}
      <TopCitiesSection filters={filters} />
    </>
  );
}
