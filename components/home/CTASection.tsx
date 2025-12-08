import { ArrowRight, PenSquare, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: PenSquare,
    title: "리뷰 작성",
    description: "당신의 노마드 경험을 공유하고 다른 노마드들에게 도움을 주세요",
  },
  {
    icon: Users,
    title: "커뮤니티 참여",
    description: "한국/일본에서 활동하는 노마드들과 정보를 교환하세요",
  },
  {
    icon: Star,
    title: "도시 평가",
    description: "10가지 카테고리로 도시를 상세하게 평가해주세요",
  },
];

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 text-6xl">✍️</div>
        <div className="absolute bottom-20 right-10 text-6xl">🌟</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">💬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            당신의 경험이 다른 노마드에게
            <br />
            <span className="text-amber-300">소중한 정보가 됩니다</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            한국이나 일본에서 노마드로 지낸 경험이 있나요?
            <br />
            생생한 리뷰를 남겨 다른 노마드들의 선택을 도와주세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 group"
            >
              리뷰 작성하기
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
            >
              전체 도시 탐색
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur border-white/20 text-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-300">2,847</p>
              <p className="text-sm text-blue-200">총 리뷰 수</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-300">20</p>
              <p className="text-sm text-blue-200">등록된 도시</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-300">1,243</p>
              <p className="text-sm text-blue-200">활동 노마드</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-300">89%</p>
              <p className="text-sm text-blue-200">추천율</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
