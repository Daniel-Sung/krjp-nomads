"use client";

import { useState } from "react";
import Link from "next/link";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  City,
  getCountryFlag,
  getBudgetLabel,
  getRegionLabel,
  getEnvironmentLabel,
  getSeasonLabel,
} from "@/lib/constants";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const flag = getCountryFlag(city.country);

  // 좋아요/싫어요 상태 관리
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(city.likes);
  const [dislikeCount, setDislikeCount] = useState(city.dislikes);

  // 좋아요 버튼 클릭 핸들러
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount((prev) => prev - 1);
      }
    }
  };

  // 싫어요 버튼 클릭 핸들러
  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disliked) {
      setDisliked(false);
      setDislikeCount((prev) => prev - 1);
    } else {
      setDisliked(true);
      setDislikeCount((prev) => prev + 1);
      if (liked) {
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  // 환경 배열을 한글 라벨로 변환
  const environmentLabels = city.environment
    .map((env) => getEnvironmentLabel(env))
    .filter(Boolean)
    .join(", ");

  // 계절 배열을 한글 라벨로 변환
  const seasonLabels = city.bestSeason
    .map((season) => getSeasonLabel(season))
    .filter(Boolean)
    .join(", ");

  return (
    <Link href={`/city/${city.id}`} className="block h-full">
      <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full cursor-pointer">
        {/* Image Placeholder */}
        <div className="relative h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {flag}
          </span>
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
            <h3 className="font-bold text-lg text-slate-900">
              {city.name.ko}
            </h3>
            <p className="text-sm text-slate-500">{city.name.en}</p>
          </div>

          {/* 좋아요/싫어요 버튼 */}
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                liked
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                disliked
                  ? "bg-red-100 text-red-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <ThumbsDown className={`h-4 w-4 ${disliked ? "fill-current" : ""}`} />
              <span className="text-sm font-medium">{dislikeCount}</span>
            </button>
          </div>

          {/* 필터 정보 Key-Value */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">예산</span>
              <span className="text-slate-900 font-medium">
                {getBudgetLabel(city.budget)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">지역</span>
              <span className="text-slate-900 font-medium">
                {getRegionLabel(city.region)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">환경</span>
              <span className="text-slate-900 font-medium text-right">
                {environmentLabels}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">최고 계절</span>
              <span className="text-slate-900 font-medium">
                {seasonLabels}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
