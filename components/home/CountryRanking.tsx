import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CityCard from "@/components/shared/CityCard";
import { getTopCitiesByCountry } from "@/lib/constants";

export default function CountryRanking() {
  const koreaTop5 = getTopCitiesByCountry("KR", 5);
  const japanTop5 = getTopCitiesByCountry("JP", 5);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Crown className="h-5 w-5 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            국가별 TOP 5
          </h2>
          <p className="text-slate-600">
            한국과 일본, 각 국가에서 가장 인기 있는 도시 TOP 5
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Korea Section */}
          <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🇰🇷</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">한국 TOP 5</h3>
                  <p className="text-sm font-normal text-slate-500">
                    Korea Best Cities
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {koreaTop5.map((city, index) => (
                <CityCard
                  key={city.id}
                  city={city}
                  rank={index + 1}
                  variant="compact"
                />
              ))}
              <Link href="/cities/korea" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50 group"
                >
                  한국 전체 보기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Japan Section */}
          <Card className="border-pink-200 bg-gradient-to-br from-white to-pink-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🇯🇵</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">일본 TOP 5</h3>
                  <p className="text-sm font-normal text-slate-500">
                    Japan Best Cities
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {japanTop5.map((city, index) => (
                <CityCard
                  key={city.id}
                  city={city}
                  rank={index + 1}
                  variant="compact"
                />
              ))}
              <Link href="/cities/japan" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 group"
                >
                  일본 전체 보기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
