import { Star, ThumbsUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Review,
  getCityById,
  getCountryFlag,
  getStayDurationText,
  getRelativeTime,
} from "@/lib/constants";

interface ReviewCardProps {
  review: Review;
  showCity?: boolean;
}

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= score
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

function calculateOverallScore(scores: Review["scores"]): number {
  const values = Object.values(scores);
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

export default function ReviewCard({
  review,
  showCity = true,
}: ReviewCardProps) {
  const city = getCityById(review.cityId);
  const overallScore = calculateOverallScore(review.scores);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        {/* Header: User Info + City */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
              {review.userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{review.userName}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-3 w-3" />
                <span>{getRelativeTime(review.createdAt)}</span>
                <span className="text-slate-300">|</span>
                <span>체류: {getStayDurationText(review.stayDuration)}</span>
              </div>
            </div>
          </div>

          {/* Overall Score */}
          <div className="text-right">
            <StarRating score={Math.round(overallScore)} />
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {overallScore.toFixed(1)}
            </p>
          </div>
        </div>

        {/* City Info (Optional) */}
        {showCity && city && (
          <div className="flex items-center gap-2 mb-3 p-2 bg-slate-50 rounded-lg">
            <span className="text-lg">{getCountryFlag(city.country)}</span>
            <span className="font-medium text-slate-900">{city.name.ko}</span>
            <span className="text-sm text-slate-500">{city.name.en}</span>
          </div>
        )}

        {/* Comment */}
        <p className="text-slate-700 mb-4 leading-relaxed">{review.comment}</p>

        {/* Score Details (Collapsed View) */}
        <div className="grid grid-cols-5 gap-2 mb-4 p-3 bg-slate-50 rounded-lg">
          <div className="text-center">
            <p className="text-lg mb-1">💰</p>
            <p className="text-sm font-semibold">{review.scores.cost}</p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-1">📶</p>
            <p className="text-sm font-semibold">{review.scores.internet}</p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-1">☕</p>
            <p className="text-sm font-semibold">{review.scores.coworking}</p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-1">🔒</p>
            <p className="text-sm font-semibold">{review.scores.safety}</p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-1">🍜</p>
            <p className="text-sm font-semibold">{review.scores.food}</p>
          </div>
        </div>

        {/* Footer: Helpful + Recommend */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors">
            <ThumbsUp className="h-4 w-4" />
            <span>도움됨 ({review.helpful})</span>
          </button>

          {review.recommend && (
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              👍 추천
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
