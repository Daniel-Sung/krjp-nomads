"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getBudgetLabel,
  getEnvironmentLabel,
  getSeasonLabel,
  BudgetFilter,
  EnvironmentFilter,
  SeasonFilter,
} from "@/lib/constants";
import { type CityWithAllDetails } from "@/lib/supabase/cities";
import { createClient } from "@/utils/supabase/client";

interface CityCardProps {
  city: CityWithAllDetails;
}

export default function CityCard({ city }: CityCardProps) {
  const flag = city.country_id === "KR" ? "🇰🇷" : "🇯🇵";
  const supabase = createClient();

  // 좋아요/싫어요 상태 관리
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 투표 상태 및 카운트 가져오기
  useEffect(() => {
    async function fetchVoteData() {
      // 전체 투표 카운트 가져오기
      const { data: votes } = await supabase
        .from("city_votes")
        .select("vote_type")
        .eq("city_id", city.id);

      if (votes) {
        setLikeCount(votes.filter((v) => v.vote_type === "like").length);
        setDislikeCount(votes.filter((v) => v.vote_type === "dislike").length);
      }

      // 현재 사용자의 투표 상태 확인
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: userVote } = await supabase
          .from("city_votes")
          .select("vote_type")
          .eq("city_id", city.id)
          .eq("user_id", user.id)
          .single();

        if (userVote) {
          setLiked(userVote.vote_type === "like");
          setDisliked(userVote.vote_type === "dislike");
        }
      }
    }
    fetchVoteData();
  }, [city.id, supabase]);

  // 좋아요 버튼 클릭 핸들러
  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      // 로그인 필요
      window.location.href = "/login";
      return;
    }

    setIsLoading(true);
    try {
      if (liked) {
        // 좋아요 취소
        await supabase
          .from("city_votes")
          .delete()
          .eq("city_id", city.id)
          .eq("user_id", user.id);
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      } else {
        // 기존 투표가 있으면 삭제
        if (disliked) {
          await supabase
            .from("city_votes")
            .delete()
            .eq("city_id", city.id)
            .eq("user_id", user.id);
          setDisliked(false);
          setDislikeCount((prev) => prev - 1);
        }
        // 좋아요 추가
        await supabase.from("city_votes").insert({
          city_id: city.id,
          user_id: user.id,
          vote_type: "like",
        });
        setLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 싫어요 버튼 클릭 핸들러
  const handleDislike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = "/login";
      return;
    }

    setIsLoading(true);
    try {
      if (disliked) {
        // 싫어요 취소
        await supabase
          .from("city_votes")
          .delete()
          .eq("city_id", city.id)
          .eq("user_id", user.id);
        setDisliked(false);
        setDislikeCount((prev) => prev - 1);
      } else {
        // 기존 투표가 있으면 삭제
        if (liked) {
          await supabase
            .from("city_votes")
            .delete()
            .eq("city_id", city.id)
            .eq("user_id", user.id);
          setLiked(false);
          setLikeCount((prev) => prev - 1);
        }
        // 싫어요 추가
        await supabase.from("city_votes").insert({
          city_id: city.id,
          user_id: user.id,
          vote_type: "dislike",
        });
        setDisliked(true);
        setDislikeCount((prev) => prev + 1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 환경 배열을 한글 라벨로 변환
  const environmentLabels = (city.environment || [])
    .map((env) => getEnvironmentLabel(env as EnvironmentFilter))
    .filter(Boolean)
    .join(", ");

  // 계절 배열을 한글 라벨로 변환
  const seasonLabels = (city.best_season || [])
    .map((season) => getSeasonLabel(season as SeasonFilter))
    .filter(Boolean)
    .join(", ");

  // 지역명 가져오기
  const regionName = city.regions?.name_ko || "";

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
              city.country_id === "KR"
                ? "bg-red-100 text-red-700"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {city.country_id === "KR" ? "한국" : "일본"}
          </Badge>
          {/* Overall Score */}
          {city.city_scores?.overall && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold">{city.city_scores.overall}</span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          {/* City Name */}
          <div className="mb-3">
            <h3 className="font-bold text-lg text-slate-900">{city.name_ko}</h3>
            <p className="text-sm text-slate-500">{city.name_en}</p>
          </div>

          {/* 좋아요/싫어요 버튼 */}
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleLike}
              disabled={isLoading}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                liked
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              } ${isLoading ? "opacity-50" : ""}`}
            >
              <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <button
              onClick={handleDislike}
              disabled={isLoading}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                disliked
                  ? "bg-red-100 text-red-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              } ${isLoading ? "opacity-50" : ""}`}
            >
              <ThumbsDown
                className={`h-4 w-4 ${disliked ? "fill-current" : ""}`}
              />
              <span className="text-sm font-medium">{dislikeCount}</span>
            </button>
          </div>

          {/* 필터 정보 Key-Value */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">예산</span>
              <span className="text-slate-900 font-medium">
                {getBudgetLabel(city.budget as BudgetFilter)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">지역</span>
              <span className="text-slate-900 font-medium">{regionName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">환경</span>
              <span className="text-slate-900 font-medium text-right">
                {environmentLabels}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">최고 계절</span>
              <span className="text-slate-900 font-medium">{seasonLabels}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
