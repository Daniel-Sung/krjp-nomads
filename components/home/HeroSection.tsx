"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  BudgetFilter,
  RegionFilter,
  EnvironmentFilter,
  SeasonFilter,
  BUDGET_OPTIONS,
  REGION_OPTIONS,
  ENVIRONMENT_OPTIONS,
  SEASON_OPTIONS,
  getRegionLabel,
  getBudgetLabel,
  getEnvironmentLabel,
  getSeasonLabel,
} from "@/lib/constants";

export interface FilterState {
  budget: BudgetFilter | null;
  region: RegionFilter;
  environment: EnvironmentFilter | null;
  season: SeasonFilter | null;
}

interface HeroSectionProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function HeroSection({ filters, onFiltersChange }: HeroSectionProps) {
  const handleReset = () => {
    onFiltersChange({
      budget: null,
      region: "all",
      environment: null,
      season: null,
    });
  };

  const hasActiveFilters =
    filters.budget !== null ||
    filters.region !== "all" ||
    filters.environment !== null ||
    filters.season !== null;

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🇰🇷</div>
        <div className="absolute top-40 right-20 text-8xl">🇯🇵</div>
        <div className="absolute bottom-20 left-1/3 text-6xl">✈️</div>
        <div className="absolute bottom-40 right-1/4 text-6xl">💻</div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 px-4 py-1.5">
            🌏 한국 & 일본 디지털 노마드 가이드
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            노마드로 살기 좋은
            <br />
            <span className="text-amber-300">도시를 찾아보세요</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            한국과 일본 20개 도시의 실제 노마드 리뷰를 확인하고
            <br className="hidden md:block" />
            나에게 맞는 도시를 찾아보세요
          </p>

          {/* Filter Box */}
          <div className="bg-white rounded-xl p-4 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {/* Budget Filter */}
              <Select
                value={filters.budget || ""}
                onValueChange={(value: string) =>
                  onFiltersChange({ ...filters, budget: value as BudgetFilter || null })
                }
              >
                <SelectTrigger className="w-full">
                  <span className="truncate">
                    {filters.budget ? `💰 ${getBudgetLabel(filters.budget)}` : "💰 예산"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Region Filter */}
              <Select
                value={filters.region}
                onValueChange={(value: string) =>
                  onFiltersChange({ ...filters, region: value as RegionFilter })
                }
              >
                <SelectTrigger className="w-full">
                  <span className="truncate">
                    {filters.region === "all" ? "📍 지역" : `📍 ${getRegionLabel(filters.region)}`}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={REGION_OPTIONS.all.value}>
                    {REGION_OPTIONS.all.label}
                  </SelectItem>
                  <SelectGroup>
                    <SelectLabel>🇰🇷 한국</SelectLabel>
                    {REGION_OPTIONS.korea.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>🇯🇵 일본</SelectLabel>
                    {REGION_OPTIONS.japan.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Environment Filter */}
              <Select
                value={filters.environment || ""}
                onValueChange={(value: string) =>
                  onFiltersChange({ ...filters, environment: value as EnvironmentFilter || null })
                }
              >
                <SelectTrigger className="w-full">
                  <span className="truncate">
                    {filters.environment ? `🌿 ${getEnvironmentLabel(filters.environment)}` : "🌿 환경"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {ENVIRONMENT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Season Filter */}
              <Select
                value={filters.season || ""}
                onValueChange={(value: string) =>
                  onFiltersChange({ ...filters, season: value as SeasonFilter || null })
                }
              >
                <SelectTrigger className="w-full">
                  <span className="truncate">
                    {filters.season ? `🗓️ ${getSeasonLabel(filters.season)}` : "🗓️ 계절"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {SEASON_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={!hasActiveFilters}
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                초기화
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
