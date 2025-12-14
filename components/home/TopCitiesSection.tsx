"use client";

import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CityCard from "@/components/shared/CityCard";
import { BudgetFilter, RegionFilter } from "@/lib/constants";
import { FilterState } from "./HeroSection";
import { type CityWithAllDetails } from "@/lib/supabase/cities";

interface TopCitiesSectionProps {
  filters: FilterState;
  cities: CityWithAllDetails[];
}

function matchBudget(city: CityWithAllDetails, budget: BudgetFilter): boolean {
  return city.budget === budget;
}

function matchRegion(city: CityWithAllDetails, region: RegionFilter): boolean {
  if (region === "all") return true;
  if (region === "kr_all") return city.country_id === "KR";
  if (region === "jp_all") return city.country_id === "JP";
  return city.region_id === region;
}

function filterCities(cities: CityWithAllDetails[], filters: FilterState): CityWithAllDetails[] {
  return cities.filter((city) => {
    // Budget filter
    if (filters.budget && !matchBudget(city, filters.budget)) return false;
    // Region filter
    if (filters.region !== "all" && !matchRegion(city, filters.region)) return false;
    // Environment filter
    if (filters.environment && city.environment && !city.environment.includes(filters.environment)) return false;
    // Season filter
    if (filters.season && city.best_season && !city.best_season.includes(filters.season)) return false;
    return true;
  });
}

export default function TopCitiesSection({ filters, cities }: TopCitiesSectionProps) {
  const filteredCities = filterCities(cities, filters);
  // Sort by overall score (descending)
  const sortedCities = [...filteredCities].sort((a, b) =>
    (b.city_scores?.overall ?? 0) - (a.city_scores?.overall ?? 0)
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {sortedCities.length}개 도시
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              도시 리스트
            </h2>
            <p className="text-slate-600">
              모든 도시를 좋아요 순으로 확인해보세요
            </p>
          </div>
        </div>

        {/* City Cards Grid */}
        {sortedCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              선택한 필터에 맞는 도시가 없습니다.
            </p>
            <p className="text-slate-400 mt-2">
              필터 조건을 변경해 보세요.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
