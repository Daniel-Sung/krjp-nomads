"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ThumbsUp, ThumbsDown, Wifi, DollarSign, MessageSquare, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getCountryFlag,
  getBudgetLabel,
  getRegionLabel,
  getEnvironmentLabel,
  getSeasonLabel,
  SCORE_LABELS,
  City,
} from "@/lib/constants";

// 점수 바 컴포넌트
function ScoreBar({ label, score, maxScore = 5 }: { label: string; score: number; maxScore?: number }) {
  const percentage = (score / maxScore) * 100;
  const getScoreColor = (score: number) => {
    if (score >= 4.5) return "bg-emerald-500";
    if (score >= 4.0) return "bg-green-500";
    if (score >= 3.5) return "bg-lime-500";
    if (score >= 3.0) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-slate-900">{score.toFixed(1)}</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getScoreColor(score)} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// 비용 포맷팅
function formatCost(amount: number, currency: "KRW" | "JPY"): string {
  if (currency === "KRW") {
    return `${(amount / 10000).toFixed(0)}만원`;
  }
  return `¥${amount.toLocaleString()}`;
}

interface CityDetailClientProps {
  city: City;
}

export default function CityDetailClient({ city }: CityDetailClientProps) {
  const router = useRouter();
  const flag = getCountryFlag(city.country);

  // 좋아요/싫어요 상태
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(city.likes);
  const [dislikeCount, setDislikeCount] = useState(city.dislikes);

  const handleLike = () => {
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

  const handleDislike = () => {
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

  // 환경/계절 라벨
  const environmentLabels = city.environment
    .map((env) => getEnvironmentLabel(env))
    .filter(Boolean);
  const seasonLabels = city.bestSeason
    .map((season) => getSeasonLabel(season))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
        <span className="text-9xl md:text-[10rem]">{flag}</span>
        {/* Back Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-white/80 hover:bg-white"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        {/* Country Badge */}
        <Badge
          className={`absolute top-4 right-4 text-sm px-3 py-1 ${
            city.country === "KR"
              ? "bg-red-100 text-red-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {city.country === "KR" ? "한국" : "일본"}
        </Badge>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 -mt-8 relative z-10">
        {/* Header Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-1">
                  {city.name.ko}
                </h1>
                <p className="text-lg text-slate-500 mb-2">
                  {city.name.en} / {city.name.ja}
                </p>
                <p className="text-slate-600">{city.description}</p>
              </div>
              {/* Like/Dislike */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    liked
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <ThumbsUp className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                  <span className="font-medium">{likeCount}</span>
                </button>
                <button
                  onClick={handleDislike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    disliked
                      ? "bg-red-100 text-red-600"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <ThumbsDown className={`h-5 w-5 ${disliked ? "fill-current" : ""}`} />
                  <span className="font-medium">{dislikeCount}</span>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {city.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-slate-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-emerald-500" />
              <p className="text-sm text-slate-500">월 생활비</p>
              <p className="text-xl font-bold text-slate-900">
                {formatCost(city.monthlyCost.amount, city.monthlyCost.currency)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Wifi className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-slate-500">인터넷 속도</p>
              <p className="text-xl font-bold text-slate-900">{city.internetSpeed} Mbps</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-slate-500">리뷰 수</p>
              <p className="text-xl font-bold text-slate-900">{city.reviewCount}개</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm text-slate-500">추천율</p>
              <p className="text-xl font-bold text-slate-900">{city.recommendRate}%</p>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">상세 점수</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(Object.keys(city.scores) as Array<keyof City["scores"]>).map((key) => (
                <ScoreBar
                  key={key}
                  label={SCORE_LABELS[key]}
                  score={city.scores[key]}
                />
              ))}
            </CardContent>
          </Card>

          {/* Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">도시 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">예산 수준</span>
                <span className="font-medium text-slate-900">{getBudgetLabel(city.budget)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">지역</span>
                <span className="font-medium text-slate-900">{getRegionLabel(city.region)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">환경</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {environmentLabels.map((label) => (
                    <Badge key={label} variant="outline" className="text-xs">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">추천 계절</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {seasonLabels.map((label) => (
                    <Badge key={label} variant="outline" className="text-xs">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500">종합 점수</span>
                <span className="font-bold text-lg text-emerald-600">
                  {city.scores.overall.toFixed(1)} / 5.0
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
