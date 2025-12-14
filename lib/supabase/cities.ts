import { createClient } from '@/utils/supabase/server'
import type { City, CityScore, CityStats, Country, Region } from '@/types/database.types'

// Extended city type with all relations
export type CityWithAllDetails = City & {
  city_scores: CityScore | null
  countries: Country | null
  regions: Region | null
}

// Get all cities with scores
export async function getAllCities(): Promise<CityWithAllDetails[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      city_scores (*),
      countries (*),
      regions (*)
    `)
    .order('name_ko')

  if (error) {
    console.error('Error fetching cities:', error)
    return []
  }

  return data as CityWithAllDetails[]
}

// Get cities by country
export async function getCitiesByCountry(countryId: 'KR' | 'JP'): Promise<CityWithAllDetails[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      city_scores (*),
      countries (*),
      regions (*)
    `)
    .eq('country_id', countryId)
    .order('name_ko')

  if (error) {
    console.error('Error fetching cities by country:', error)
    return []
  }

  return data as CityWithAllDetails[]
}

// Get single city by ID
export async function getCityById(cityId: string): Promise<CityWithAllDetails | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      city_scores (*),
      countries (*),
      regions (*)
    `)
    .eq('id', cityId)
    .single()

  if (error) {
    console.error('Error fetching city:', error)
    return null
  }

  return data as CityWithAllDetails
}

// Get city stats (review count, likes, etc.)
export async function getCityStats(cityId: string): Promise<CityStats | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('city_stats')
    .select('*')
    .eq('city_id', cityId)
    .single()

  if (error) {
    console.error('Error fetching city stats:', error)
    return null
  }

  return data
}

// Get top cities by overall score
export async function getTopCities(limit: number = 10): Promise<CityWithAllDetails[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      city_scores (*),
      countries (*),
      regions (*)
    `)
    .order('city_scores(overall)', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching top cities:', error)
    return []
  }

  return data as CityWithAllDetails[]
}

// Search cities
export async function searchCities(query: string): Promise<CityWithAllDetails[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('cities')
    .select(`
      *,
      city_scores (*),
      countries (*),
      regions (*)
    `)
    .or(`name_ko.ilike.%${query}%,name_en.ilike.%${query}%,name_ja.ilike.%${query}%`)
    .order('name_ko')

  if (error) {
    console.error('Error searching cities:', error)
    return []
  }

  return data as CityWithAllDetails[]
}

// Get all countries
export async function getAllCountries(): Promise<Country[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('countries')
    .select('*')
    .order('id')

  if (error) {
    console.error('Error fetching countries:', error)
    return []
  }

  return data
}

// Get regions by country
export async function getRegionsByCountry(countryId: 'KR' | 'JP'): Promise<Region[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('country_id', countryId)
    .order('name_ko')

  if (error) {
    console.error('Error fetching regions:', error)
    return []
  }

  return data
}
