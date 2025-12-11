import { MapPin, ThumbsUp, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { STATS, ALL_CITIES } from "@/lib/constants";

// 총 좋아요 수 계산
const totalLikes = ALL_CITIES.reduce((sum, city) => sum + city.likes, 0);

const stats = [
  {
    icon: MapPin,
    value: STATS.totalCities,
    label: "도시",
    description: "한국 10곳 + 일본 10곳",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: ThumbsUp,
    value: totalLikes.toLocaleString(),
    label: "총 좋아요",
    description: "노마드들의 추천",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Users,
    value: STATS.activeNomads.toLocaleString(),
    label: "활동 노마드",
    description: "지난 30일 기준",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Globe,
    value: STATS.countries,
    label: "국가",
    description: "한국 & 일본 특화",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} mb-4`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-slate-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
