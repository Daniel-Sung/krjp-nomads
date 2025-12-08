import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KR-JP Nomads | 한국-일본 디지털 노마드 가이드",
  description:
    "한국과 일본에서 디지털 노마드로 살기 좋은 도시를 찾아보세요. 실제 노마드들의 리뷰와 상세한 도시 정보를 제공합니다.",
  keywords: [
    "디지털 노마드",
    "한국",
    "일본",
    "원격 근무",
    "워케이션",
    "노마드 도시",
    "서울",
    "도쿄",
    "부산",
    "오사카",
  ],
  authors: [{ name: "KR-JP Nomads" }],
  openGraph: {
    title: "KR-JP Nomads | 한국-일본 디지털 노마드 가이드",
    description:
      "한국과 일본에서 디지털 노마드로 살기 좋은 도시를 찾아보세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-slate-50 text-slate-900" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
