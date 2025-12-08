import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReviewCard from "@/components/shared/ReviewCard";
import { getRecentReviews } from "@/lib/constants";

export default function RecentReviews() {
  const recentReviews = getRecentReviews(3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="h-5 w-5 text-green-600" />
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                실시간
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              최근 리뷰
            </h2>
            <p className="text-slate-600">
              실제 노마드들이 남긴 생생한 도시 리뷰
            </p>
          </div>

          <Link href="/reviews" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              전체 리뷰 보기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} showCity={true} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            당신의 경험을 공유해주세요!
          </h3>
          <p className="text-slate-600 mb-4">
            한국이나 일본에서 노마드로 지낸 경험이 있나요? 다른 노마드들에게
            도움이 될 리뷰를 남겨주세요.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            리뷰 작성하기
          </Button>
        </div>
      </div>
    </section>
  );
}
