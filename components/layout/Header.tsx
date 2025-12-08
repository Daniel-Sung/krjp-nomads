"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/cities", label: "도시 탐색" },
  { href: "/ranking", label: "랭킹" },
  { href: "/compare", label: "비교하기" },
  { href: "/community", label: "커뮤니티" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xl">🇰🇷</span>
              <span className="text-xl">🇯🇵</span>
            </div>
            <span className="font-bold text-xl text-slate-900">
              KR-JP Nomads
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              로그인
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              리뷰 작성
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-600">
              <Search className="h-5 w-5" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <span>🇰🇷</span>
                    <span>🇯🇵</span>
                    <span>KR-JP Nomads</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      {link.label}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="h-5 w-5 mr-2" />
                    언어 변경
                  </Button>
                  <Button variant="outline" className="w-full">
                    로그인
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    리뷰 작성
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
