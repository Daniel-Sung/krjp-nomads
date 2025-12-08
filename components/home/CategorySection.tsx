import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, getCitiesByCategory, getCountryFlag } from "@/lib/constants";

export default function CategorySection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-700">
              추천
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            카테고리별 추천
          </h2>
          <p className="text-slate-600">
            당신에게 중요한 기준으로 도시를 찾아보세요
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const topCities = getCitiesByCategory(category.id, 4);

            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <div>
                          <h3 className="font-bold text-lg">{category.title}</h3>
                          <p className="text-sm text-slate-300">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  {/* Top Cities in Category */}
                  <div className="p-4 space-y-2">
                    {topCities.slice(0, 4).map((city, index) => (
                      <Link
                        key={city.id}
                        href={`/city/${city.id}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-400 w-5">
                            {index + 1}
                          </span>
                          <span className="text-lg">
                            {getCountryFlag(city.country)}
                          </span>
                          <span className="font-medium text-slate-900">
                            {city.name.ko}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.id === "cost"
                            ? `₩${(city.monthlyCost.amount / 10000).toFixed(0)}만`
                            : category.id === "internet"
                            ? `${city.internetSpeed}Mbps`
                            : city.scores[
                                category.id as keyof typeof city.scores
                              ]?.toFixed(1) || city.scores.overall.toFixed(1)}
                        </Badge>
                      </Link>
                    ))}
                  </div>

                  {/* View More Link */}
                  <div className="px-4 pb-4">
                    <Link
                      href={`/cities?category=${category.id}`}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      더 보기
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
