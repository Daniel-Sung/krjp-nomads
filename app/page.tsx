import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TopCitiesSection from "@/components/home/TopCitiesSection";
import CountryRanking from "@/components/home/CountryRanking";
import RecentReviews from "@/components/home/RecentReviews";
import CategorySection from "@/components/home/CategorySection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 히어로 섹션 - 검색 및 CTA */}
      <HeroSection />

      {/* 통계 섹션 - 도시, 리뷰, 활동 노마드 수 */}
      <StatsSection />

      {/* 인기 도시 TOP 8 */}
      <TopCitiesSection />

      {/* 국가별 TOP 5 (한국/일본) */}
      <CountryRanking />

      {/* 최근 리뷰 */}
      <RecentReviews />

      {/* 카테고리별 추천 */}
      <CategorySection />

      {/* CTA 섹션 - 리뷰 작성 유도 */}
      <CTASection />
    </>
  );
}
