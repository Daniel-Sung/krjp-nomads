import { getAllCities } from "@/lib/supabase/cities";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  // 서버에서 데이터 가져오기
  const cities = await getAllCities();

  return <HomePageClient initialCities={cities} />;
}
