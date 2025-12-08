import Link from "next/link";
import { Star, Wifi, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  City,
  formatCurrency,
  getCountryFlag,
} from "@/lib/constants";

interface CityCardProps {
  city: City;
  rank?: number;
  variant?: "default" | "compact" | "horizontal";
}

export default function CityCard({
  city,
  rank,
  variant = "default",
}: CityCardProps) {
  const flag = getCountryFlag(city.country);

  if (variant === "compact") {
    return (
      <Link href={`/city/${city.id}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {rank && (
                <span className="text-2xl font-bold text-slate-300">
                  #{rank}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-2xl">
                {flag}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">
                  {city.name.ko}
                </h3>
                <p className="text-sm text-slate-500">{city.name.en}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">
                    {city.scores.overall.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {city.reviewCount}개 리뷰
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/city/${city.id}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
          <CardContent className="p-0">
            <div className="flex">
              {/* Image Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">{flag}</span>
              </div>
              {/* Content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {flag} {city.name.ko}
                    </h3>
                    <p className="text-sm text-slate-500">{city.name.en}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">
                      {city.scores.overall.toFixed(1)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2 line-clamp-1">
                  {city.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>
                    💰 {formatCurrency(city.monthlyCost.amount, city.monthlyCost.currency)}/월
                  </span>
                  <span>📶 {city.internetSpeed} Mbps</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/city/${city.id}`}>
      <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden h-full">
        {/* Image Placeholder */}
        <div className="relative h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {flag}
          </span>
          {/* Rank Badge */}
          {rank && (
            <Badge
              className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700"
              variant="default"
            >
              #{rank}
            </Badge>
          )}
          {/* Country Badge */}
          <Badge
            variant="secondary"
            className={`absolute top-3 right-3 ${
              city.country === "KR"
                ? "bg-red-100 text-red-700"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {city.country === "KR" ? "한국" : "일본"}
          </Badge>
        </div>

        <CardContent className="p-4">
          {/* City Name */}
          <div className="mb-3">
            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
              {city.name.ko}
            </h3>
            <p className="text-sm text-slate-500">{city.name.en}</p>
          </div>

          {/* Scores */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-900">
                {city.scores.overall.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <ThumbsUp className="h-4 w-4" />
              <span>{city.recommendRate}%</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <span>💰</span>
              <span>
                {formatCurrency(city.monthlyCost.amount, city.monthlyCost.currency)}/월
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Wifi className="h-4 w-4" />
              <span>{city.internetSpeed} Mbps</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {city.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Review Count */}
          <p className="text-xs text-slate-400 mt-3">
            {city.reviewCount}개의 리뷰
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
