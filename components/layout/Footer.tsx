import Link from "next/link";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

const serviceLinks = [
  { href: "/about", label: "소개" },
  { href: "/contact", label: "문의하기" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
];

const socialLinks = [
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "mailto:hello@krjpnomads.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl">🇰🇷</span>
              <span className="text-xl">🇯🇵</span>
              <span className="font-bold text-lg text-white">KR-JP Nomads</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              한국과 일본에서 노마드로 살기 좋은 도시를 찾아보세요. 실제 경험을
              바탕으로 한 리뷰와 정보를 제공합니다.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Service Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">서비스</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © 2024 KR-JP Nomads. All rights reserved.
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-4 text-sm">
              <button className="text-white font-medium">한국어</button>
              <span className="text-slate-600">|</span>
              <button className="text-slate-400 hover:text-white transition-colors">
                English
              </button>
              <span className="text-slate-600">|</span>
              <button className="text-slate-400 hover:text-white transition-colors">
                日本語
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
