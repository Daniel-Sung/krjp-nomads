import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🇰🇷</div>
        <div className="absolute top-40 right-20 text-8xl">🇯🇵</div>
        <div className="absolute bottom-20 left-1/3 text-6xl">✈️</div>
        <div className="absolute bottom-40 right-1/4 text-6xl">💻</div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 px-4 py-1.5">
            🌏 한국 & 일본 디지털 노마드 가이드
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            노마드로 살기 좋은
            <br />
            <span className="text-amber-300">도시를 찾아보세요</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            한국과 일본 20개 도시의 실제 노마드 리뷰를 확인하고
            <br className="hidden md:block" />
            나에게 맞는 도시를 찾아보세요
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl p-2 shadow-2xl max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="도시명 검색 (서울, 도쿄, 부산...)"
                  className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg md:w-40">
                <MapPin className="h-5 w-5 text-slate-400" />
                <select className="flex-1 bg-transparent outline-none text-slate-900 cursor-pointer">
                  <option value="all">전체</option>
                  <option value="KR">한국</option>
                  <option value="JP">일본</option>
                </select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 md:py-3">
                검색
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 cursor-pointer px-4 py-2"
            >
              🔥 인기: 서울
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 cursor-pointer px-4 py-2"
            >
              🔥 인기: 도쿄
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 cursor-pointer px-4 py-2"
            >
              💰 가성비: 후쿠오카
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 cursor-pointer px-4 py-2"
            >
              🏖️ 휴양: 제주
            </Badge>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 group"
          >
            전체 도시 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
