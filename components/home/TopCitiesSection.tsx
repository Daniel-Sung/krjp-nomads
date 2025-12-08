import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CityCard from "@/components/shared/CityCard";
import { getTopCities } from "@/lib/constants";

export default function TopCitiesSection() {
  const topCities = getTopCities(8);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                TOP 8
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              인기 도시 TOP 8
            </h2>
            <p className="text-slate-600">
              노마드들이 가장 많이 찾는 한국과 일본의 인기 도시
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="default" size="sm" className="bg-slate-900">
              전체
            </Button>
            <Button variant="outline" size="sm">
              🇰🇷 한국
            </Button>
            <Button variant="outline" size="sm">
              🇯🇵 일본
            </Button>
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {topCities.map((city, index) => (
            <CityCard key={city.id} city={city} rank={index + 1} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/cities">
            <Button variant="outline" size="lg" className="group">
              전체 20개 도시 보기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
